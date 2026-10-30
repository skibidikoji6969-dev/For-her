import { useEffect, useRef, useState } from 'react';
import { CloudHeart } from './Art.jsx';
import useReducedMotion from '../useReducedMotion.js';

// mode "cover": shows the closed book, opens on tap.
// mode "closing": plays the cover closing, then calls onClosed.
export default function BookCover({ mode = 'cover', onOpen, onClosed }) {
  const [phase, setPhase] = useState(mode === 'closing' ? 'closing' : 'idle');
  const reduced = useReducedMotion();
  const timer = useRef();
  const ms = reduced ? 260 : 950;

  useEffect(() => {
    if (mode === 'closing') timer.current = setTimeout(() => onClosed && onClosed(), ms);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const open = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    timer.current = setTimeout(() => onOpen && onOpen(), ms);
  };

  return (
    <main className={`cover-scene phase-${phase}`}>
      <div className="cover-wrap">
        <div className="book3d">
          <div className="cover-inside" aria-hidden="true" />
          <div className="cover-leaf" onClick={open}>
            <div className="cover-spine" aria-hidden="true" />
            <div className="cover-content">
              <span className="sparkle sp1" aria-hidden="true">✨</span>
              <span className="sparkle sp2" aria-hidden="true">✦</span>
              <CloudHeart size={170} />
              <h1 className="cover-title">a little book for you 🩵</h1>
              <p className="cover-sub">made with a little love and a lot of feelings</p>
              <button
                type="button"
                className="tap-btn"
                disabled={phase !== 'idle'}
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
              >
                tap to open ☁️
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="hint" aria-hidden={phase !== 'idle'}>
        swipe, or tap the page edges, to turn pages
      </p>
    </main>
  );
}
