import { PolaroidStack, type PolaroidPhoto } from '@domlee/ui';
import { useEffect, useRef } from 'react';
import '@domlee/ui/styles.css';
import { haptic } from '../TouchFeedback';

// Add a photo here to extend the same shared, looping stack. Originals stay in
// the site's public images folder; the component owns gestures and presentation.
const snapPhotos = [
  {
    id: 'snap75-desk',
    src: '/images/snap75-desk.jpg',
    alt: 'Hand-soldered SNAP-75 keyboard on my desk',
    caption: 'the first one I ever soldered',
  },
  {
    id: 'snap75-top',
    src: '/images/snap75-top.jpg',
    alt: 'SNAP-75 keyboard from above, with two OLED displays and colorful keycaps',
    caption: 'every little detail.',
  },
] satisfies readonly PolaroidPhoto[];

export default function NotebookPhotoStack({ quiet }: { quiet: boolean }) {
  const frame = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wrapper = frame.current;
    const stack = wrapper?.querySelector<HTMLElement>('.dm-polaroid-stack');
    if (!wrapper || !stack) return;
    // Photos and wrapping captions size themselves. Reserve only the remaining
    // space to the next notebook row, so the story below stays on its 32px grid.
    const align = () => {
      const height = stack.getBoundingClientRect().height;
      const space = Math.ceil(height / 32) * 32 - height;
      wrapper.style.setProperty('--notebook-photo-grid-space', `${space}px`);
    };
    const observer = new ResizeObserver(align);
    observer.observe(stack);
    align();
    return () => observer.disconnect();
  }, []);
  // The host's pulse limiter coalesces arrow-click feedback; this callback also
  // covers pointer swipes, which generate no control click.
  const selectionChanged = () => haptic('selection');
  return (
    <div ref={frame} className='notebook-photo-stack'>
      <PolaroidStack
        photos={snapPhotos}
        label='SNAP-75 photo gallery'
        aspectRatio={1600 / 898}
        quiet={quiet}
        onIndexChange={selectionChanged}
      />
    </div>
  );
}
