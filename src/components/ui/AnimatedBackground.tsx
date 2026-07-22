'use client';

import { useEffect, useRef } from 'react';

/**
 * Site-wide animated background: drifting aurora blobs, a slowly panning dot
 * grid, and a cursor-following spotlight. Purely decorative and self-hosted
 * (no external assets), so it stays within the site CSP. Honors
 * prefers-reduced-motion and disables the interactive glow on touch devices.
 */
export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    if (reduceMotion.matches || coarsePointer.matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty('--mx', `${e.clientX}px`);
        el.style.setProperty('--my', `${e.clientY}px`);
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="bg-layer" aria-hidden="true">
      <div
        className="aurora-blob aurora-1"
        style={{ top: '-8%', left: '-6%', width: '46vw', height: '46vw', maxWidth: 640, maxHeight: 640, background: '#2563EB' }}
      />
      <div
        className="aurora-blob aurora-2"
        style={{ bottom: '-12%', right: '-8%', width: '42vw', height: '42vw', maxWidth: 600, maxHeight: 600, background: '#F59E0B' }}
      />
      <div
        className="aurora-blob aurora-3"
        style={{ top: '30%', left: '55%', width: '36vw', height: '36vw', maxWidth: 520, maxHeight: 520, background: '#6366F1' }}
      />
      <div className="animated-grid" />
      <div className="cursor-glow" />
    </div>
  );
}
