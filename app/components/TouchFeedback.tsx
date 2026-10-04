import {
  useEffect,
  useSyncExternalStore,
  type ReactNode,
  type InputHTMLAttributes,
} from 'react';
import { useLocation } from 'react-router';
import { nativeTapTargets } from './nativeTapTargets';

type Feedback = 'tap' | 'selection' | 'draw' | 'success' | 'error';
const patterns: Record<Feedback, number | number[]> = {
  tap: 6,
  selection: 4,
  draw: 5,
  success: [9, 45, 12],
  error: [14, 45, 14],
};
const storageKey = 'notebook-touch-feedback';
const subscribers = new Set<() => void>();
const cues = new Map<string, { feedback: Feedback; expires: number }>();
let enabled = true;
let reduced = false;
let touchAt = -Infinity;
let pulseAt = -Infinity;
let connected = false;

// This attribute creates a real native switch in Safari, with browser-managed
// haptics on trusted taps. Never simulate a hidden switch or a label click.
export const nativeSwitchProps = { switch: '' };

function cancelFeedback() {
  cues.clear();
  if (connected && typeof navigator.vibrate === 'function') {
    try {
      navigator.vibrate(0);
    } catch {
      // Browser or device policy can disable vibration.
    }
  }
}

function available() {
  return (
    connected &&
    enabled &&
    !reduced &&
    document.visibilityState === 'visible' &&
    typeof navigator.vibrate === 'function'
  );
}

function pulse(feedback: Feedback) {
  const now = performance.now();
  if (!available() || now - pulseAt < 65) return;
  try {
    if (navigator.vibrate(patterns[feedback])) pulseAt = now;
  } catch {
    // Keep every interaction usable when there is no accessible haptic motor.
  }
}

/** Feedback requires a recent real touch; mouse, hover and idle motion stay quiet. */
export function haptic(feedback: Feedback = 'tap') {
  if (connected && performance.now() - touchAt < 1200) pulse(feedback);
}

/** Finish cues follow the actual CSS animation, rather than a parallel timer. */
export function armHapticCue(id: string, feedback: Feedback = 'draw') {
  if (!available() || performance.now() - touchAt >= 1200) return;
  cues.set(id, { feedback, expires: performance.now() + 5000 });
}

function setEnabled(value: boolean) {
  enabled = value;
  try {
    localStorage.setItem(storageKey, value ? 'on' : 'off');
  } catch {
    // The preference still works when local storage is unavailable.
  }
  if (!value) cancelFeedback();
  subscribers.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  subscribers.add(notify);
  return () => subscribers.delete(notify);
}

export function TouchFeedbackSetting({
  compact = false,
}: {
  compact?: boolean;
}) {
  const checked = useSyncExternalStore(
    subscribe,
    () => enabled,
    () => true
  );
  return (
    <label className={`touch-feedback-setting ${compact ? 'is-compact' : ''}`}>
      <span>
        Touch feedback
        {!compact && <small>Small taps, when your device supports them.</small>}
      </span>
      <InkSwitch
        aria-label='Touch feedback'
        checked={checked}
        onChange={(e) => setEnabled(e.target.checked)}
      />
    </label>
  );
}

export function InkSwitch(
  props: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>
) {
  const native = useSyncExternalStore(
    subscribe,
    () => enabled && !reduced,
    () => true
  );
  return (
    <input
      {...props}
      {...(native ? nativeSwitchProps : { switch: undefined })}
      className={`ink-switch ${props.className ?? ''}`.trim()}
      type='checkbox'
    />
  );
}

export default function TouchFeedback({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    touchAt = -Infinity;
    cancelFeedback();
  }, [pathname]);
  useEffect(() => {
    connected = true;
    try {
      enabled = localStorage.getItem(storageKey) !== 'off';
    } catch {
      enabled = true;
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced = media.matches;
    const nativeTargets = nativeTapTargets(() => enabled && !reduced);
    const unsubscribeTargets = subscribe(nativeTargets.refresh);
    subscribers.forEach((notify) => notify());
    document.documentElement.toggleAttribute(
      'data-native-switch',
      'switch' in document.createElement('input')
    );
    const quiet = () => {
      touchAt = -Infinity;
      cancelFeedback();
    };
    const motionChanged = () => {
      reduced = media.matches;
      if (reduced) quiet();
      subscribers.forEach((notify) => notify());
    };
    const pointer = (e: PointerEvent) => {
      cues.clear();
      touchAt =
        e.isTrusted && (e.pointerType === 'touch' || e.pointerType === 'pen')
          ? performance.now()
          : -Infinity;
    };
    const click = (e: MouseEvent) => {
      if (!e.isTrusted || !(e.target instanceof Element)) return;
      const control = e.target.closest(
        'button, a[href], summary, input[type="checkbox"], input[type="radio"], [role="button"]'
      );
      if (!control || control.matches(':disabled, [aria-disabled="true"]'))
        return;
      const kind = control.getAttribute('data-haptic');
      if (kind === 'none' || kind === 'manual') return;
      // A label's synthetic click must not create a second motor pulse.
      haptic(kind && kind in patterns ? (kind as Feedback) : 'tap');
    };
    const drag = (e: PointerEvent) => {
      if (
        e.isTrusted &&
        e.buttons &&
        (e.pointerType === 'touch' || e.pointerType === 'pen')
      ) {
        touchAt = performance.now();
      }
    };
    const finish = (e: AnimationEvent) => {
      if (!(e.target instanceof Element)) return;
      const id = e.target.getAttribute('data-haptic-cue');
      const cue = id ? cues.get(id) : undefined;
      if (!cue) return;
      const animation = e.target.getAttribute('data-haptic-animation');
      if (animation && animation !== e.animationName) return;
      cues.delete(id!);
      if (
        cue.expires < performance.now() ||
        e.target.closest('[hidden], [data-motion="off"], .motion-paused') ||
        !e.target.getClientRects().length
      )
        return;
      pulse(cue.feedback);
    };
    const visibility = () => {
      if (document.visibilityState !== 'visible') quiet();
    };
    const preference = (e: StorageEvent) => {
      if (e.key !== storageKey) return;
      enabled = e.newValue !== 'off';
      if (!enabled) quiet();
      subscribers.forEach((notify) => notify());
    };
    document.addEventListener('pointerdown', pointer, {
      capture: true,
      passive: true,
    });
    document.addEventListener('click', click, true);
    document.addEventListener('pointermove', drag, {
      capture: true,
      passive: true,
    });
    document.addEventListener('animationend', finish);
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('blur', quiet);
    window.addEventListener('pagehide', quiet);
    window.addEventListener('storage', preference);
    media.addEventListener('change', motionChanged);
    return () => {
      unsubscribeTargets();
      nativeTargets.destroy();
      quiet();
      connected = false;
      document.removeEventListener('pointerdown', pointer, true);
      document.removeEventListener('click', click, true);
      document.removeEventListener('pointermove', drag, true);
      document.removeEventListener('animationend', finish);
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('blur', quiet);
      window.removeEventListener('pagehide', quiet);
      window.removeEventListener('storage', preference);
      media.removeEventListener('change', motionChanged);
    };
  }, []);
  return children;
}
