/** Progressive enhancement for Safari's native, direct-touch switch feedback.
 * The real buttons retain their semantics, focus and keyboard handlers. Native
 * targets are siblings in a separate layer, never interactive button children.
 */
export function nativeTapTargets(preference: () => boolean) {
  const coarse = matchMedia('(any-pointer: coarse)');
  const supported =
    'switch' in document.createElement('input') &&
    typeof navigator.vibrate !== 'function';
  const targets = new Map<HTMLElement, HTMLInputElement>();
  const layers = new Map<HTMLElement, HTMLDivElement>();
  const positions = new Map<HTMLElement, string>();
  let frame = 0;
  let destroyed = false;
  const active = () =>
    supported &&
    coarse.matches &&
    preference() &&
    document.visibilityState === 'visible';

  function removeLayer(host: HTMLElement, layer: HTMLDivElement) {
    layer.remove();
    const original = positions.get(host);
    if (original !== undefined && host.style.position === 'relative')
      host.style.position = original;
    positions.delete(host);
    layers.delete(host);
  }

  function clear() {
    for (const [button, input] of targets) {
      button.removeAttribute('data-native-tap-pressed');
      input.remove();
    }
    targets.clear();
    resize.disconnect();
    for (const [host, layer] of layers) removeLayer(host, layer);
  }

  function measure() {
    frame = 0;
    if (destroyed) return;
    if (!active()) {
      clear();
      return;
    }
    const modal = document.querySelector<HTMLElement>('dialog[open]');
    const keep = new Set<HTMLElement>();
    const controls = document.querySelectorAll<HTMLElement>(
      'button, summary, [role="button"]'
    );
    for (const button of controls) {
      if (
        button.matches(
          ':disabled, [aria-disabled="true"], [data-haptic="none"], [data-native-tap="none"]'
        ) ||
        button.closest('[hidden], [inert], [aria-hidden="true"]') ||
        (modal && !modal.contains(button))
      )
        continue;
      const rect = button.getBoundingClientRect();
      const css = getComputedStyle(button);
      if (
        !rect.width ||
        !rect.height ||
        css.visibility !== 'visible' ||
        css.pointerEvents === 'none' ||
        Number(css.opacity) === 0
      )
        continue;
      let left = Math.max(0, rect.left),
        right = Math.min(innerWidth, rect.right);
      let top = Math.max(0, rect.top),
        bottom = Math.min(innerHeight, rect.bottom);
      let visible = true;
      let scrollHost: HTMLElement | null = null;
      // Clip to scroll panels, not merely the viewport. Offscreen forecast
      // buttons must never intercept taps on the fixed navigation below them.
      for (
        let parent = button.parentElement;
        parent;
        parent = parent.parentElement
      ) {
        const style = getComputedStyle(parent);
        if (Number(style.opacity) === 0 || style.visibility !== 'visible') {
          visible = false;
          break;
        }
        const box = parent.getBoundingClientRect();
        if (
          !scrollHost &&
          /auto|scroll/.test(`${style.overflowX} ${style.overflowY}`)
        ) {
          scrollHost = parent;
        }
        if (/hidden|clip|auto|scroll/.test(style.overflowX)) {
          left = Math.max(left, box.left);
          right = Math.min(right, box.right);
        }
        if (/hidden|clip|auto|scroll/.test(style.overflowY)) {
          top = Math.max(top, box.top);
          bottom = Math.min(bottom, box.bottom);
        }
      }
      if (!visible || right <= left || bottom <= top) continue;
      // Keep the native target inside the original scrolling ancestor so a
      // swipe starting on a forecast/disclosure still scrolls that panel.
      const host = scrollHost ?? modal ?? document.body;
      const local = host !== document.body;
      if (local && getComputedStyle(host).position === 'static') {
        if (!positions.has(host)) positions.set(host, host.style.position);
        host.style.position = 'relative';
      }
      let layer = layers.get(host);
      if (!layer) {
        layer = document.createElement('div');
        layer.className = 'native-tap-layer';
        layer.setAttribute('aria-hidden', 'true');
        host.append(layer);
        layers.set(host, layer);
      }
      let input = targets.get(button);
      if (!input) {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.setAttribute('switch', '');
        input.className = 'native-tap-target';
        input.tabIndex = -1;
        input.setAttribute('aria-hidden', 'true');
        input.dataset.haptic = 'none';
        input.dataset.nativeTapLabel =
          button.getAttribute('aria-label') ?? button.textContent?.trim() ?? '';
        let trusted = false;
        let previous: HTMLElement | null = null;
        input.addEventListener('pointerdown', (e) => {
          trusted = e.isTrusted;
          previous = document.activeElement as HTMLElement;
          button.setAttribute('data-native-tap-pressed', '');
          // Do not prevent the native default action: Safari needs the real tap.
        });
        const release = () => button.removeAttribute('data-native-tap-pressed');
        input.addEventListener('pointerup', release);
        input.addEventListener('pointercancel', () => {
          trusted = false;
          release();
        });
        input.addEventListener('change', () => {
          release();
          if (
            !trusted ||
            !active() ||
            !button.isConnected ||
            button.matches(':disabled, [aria-disabled="true"]')
          )
            return;
          trusted = false;
          // Preserve caret editing when a keypad tap was made while typing.
          const focus =
            button.closest('.calc-keypad') &&
            previous?.matches('input:not(.native-tap-target)')
              ? previous
              : button;
          focus?.focus({ preventScroll: true });
          button.click();
          refresh();
        });
        targets.set(button, input);
        resize.observe(button);
      }
      if (input.parentElement !== layer) layer.append(input);
      const origin = host.getBoundingClientRect();
      Object.assign(input.style, {
        position: local ? 'absolute' : 'fixed',
        left: `${local ? rect.left - origin.left + host.scrollLeft - host.clientLeft : rect.left}px`,
        top: `${local ? rect.top - origin.top + host.scrollTop - host.clientTop : rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        clipPath: `inset(${top - rect.top}px ${rect.right - right}px ${rect.bottom - bottom}px ${left - rect.left}px round ${css.borderTopLeftRadius} ${css.borderTopRightRadius} ${css.borderBottomRightRadius} ${css.borderBottomLeftRadius})`,
      });
      keep.add(button);
    }
    for (const [button, input] of targets) {
      if (keep.has(button)) continue;
      resize.unobserve(button);
      button.removeAttribute('data-native-tap-pressed');
      input.remove();
      targets.delete(button);
    }
    for (const [host, layer] of layers) {
      if (!layer.children.length) {
        removeLayer(host, layer);
      }
    }
  }
  function refresh() {
    if (!active()) clear();
    else if (!frame && !destroyed) frame = requestAnimationFrame(measure);
  }
  const resize = new ResizeObserver(refresh);
  const mutation = new MutationObserver((records) => {
    if (
      records.some(
        (r) =>
          !(r.target instanceof Element) ||
          !r.target.closest('.native-tap-layer')
      )
    )
      refresh();
  });
  // No extra controls on desktop; Android keeps its Vibration API behavior.
  if (supported) {
    mutation.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [
        'class',
        'style',
        'hidden',
        'inert',
        'disabled',
        'aria-disabled',
        'open',
        'data-haptic',
        'data-native-tap',
      ],
    });
    document.addEventListener('scroll', refresh, true);
    document.addEventListener('transitionend', refresh, true);
    document.addEventListener('animationend', refresh, true);
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('resize', refresh);
    window.visualViewport?.addEventListener('resize', refresh);
    window.visualViewport?.addEventListener('scroll', refresh);
    coarse.addEventListener('change', refresh);
    document.fonts.ready.then(refresh);
    refresh();
  }
  return {
    refresh,
    destroy() {
      destroyed = true;
      cancelAnimationFrame(frame);
      mutation.disconnect();
      clear();
      document.removeEventListener('scroll', refresh, true);
      document.removeEventListener('transitionend', refresh, true);
      document.removeEventListener('animationend', refresh, true);
      document.removeEventListener('visibilitychange', refresh);
      window.removeEventListener('resize', refresh);
      window.visualViewport?.removeEventListener('resize', refresh);
      window.visualViewport?.removeEventListener('scroll', refresh);
      coarse.removeEventListener('change', refresh);
    },
  };
}
