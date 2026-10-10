import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

export function InfoTip({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const id = useId();
  const anchor = useRef<HTMLButtonElement>(null);
  const popup = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const focused = useRef(false);
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [position, setPosition] = useState({ left: 16, top: 16 });
  function cancelClose() {
    clearTimeout(timer.current);
  }
  function show() {
    cancelClose();
    setOpen(true);
  }
  function hide() {
    cancelClose();
    if (!pinned && !focused.current)
      timer.current = setTimeout(() => setOpen(false), 160);
  }
  function dismiss() {
    cancelClose();
    setPinned(false);
    setOpen(false);
  }
  useEffect(() => () => clearTimeout(timer.current), []);
  useLayoutEffect(() => {
    if (!open) return;
    function place() {
      if (!anchor.current || !popup.current) return;
      const rect = anchor.current.getBoundingClientRect();
      const { width, height } = popup.current.getBoundingClientRect();
      setPosition({
        left: Math.max(16, Math.min(rect.left, window.innerWidth - width - 16)),
        top:
          rect.bottom + height + 8 <= window.innerHeight
            ? rect.bottom + 8
            : Math.max(16, rect.top - height - 8),
      });
    }
    place();
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (
        !anchor.current?.contains(event.target as Node) &&
        !popup.current?.contains(event.target as Node)
      )
        dismiss();
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') dismiss();
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  const host = anchor.current?.closest('.flight-app');
  return (
    <span className='fp-info'>
      <button
        ref={anchor}
        type='button'
        className='fp-info-button'
        aria-label={`About ${label}`}
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-describedby={open ? id : undefined}
        onPointerEnter={(e) => {
          if (e.pointerType !== 'touch') show();
        }}
        onPointerLeave={hide}
        onFocus={() => {
          focused.current = true;
          show();
        }}
        onBlur={() => {
          focused.current = false;
          hide();
        }}
        onClick={() => {
          cancelClose();
          setPinned(!pinned);
          setOpen(!pinned);
        }}
      >
        i
      </button>
      {open &&
        host &&
        createPortal(
          <span
            ref={popup}
            id={id}
            role='tooltip'
            className='fp-info-popover'
            style={position}
            onPointerEnter={cancelClose}
            onPointerLeave={hide}
          >
            <strong>{label}</strong>
            <span>{children}</span>
          </span>,
          host
        )}
    </span>
  );
}
