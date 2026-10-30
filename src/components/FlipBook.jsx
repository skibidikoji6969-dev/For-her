import { useCallback, useEffect, useRef, useState } from 'react';
import BookPage from './BookPage.jsx';
import PageNavigation from './PageNavigation.jsx';
import PAGES from './pages.jsx';
import useReducedMotion from '../useReducedMotion.js';
import { playFlip } from '../sound.js';

const FLIP_MS = 760;
const REDUCED_MS = 220;
const SWIPE_MIN = 45;

export default function FlipBook({ onClose, soundOn, setSoundOn }) {
  const total = PAGES.length;
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(null); // { from, to, dir } while a flip is running
  const reduced = useReducedMotion();
  const lock = useRef(false); // blocks conflicting flips
  const timer = useRef();
  const start = useRef(null);

  const go = useCallback(
    (dir) => {
      if (lock.current) return;
      const to = index + dir;
      if (to < 0 || to >= total) return;
      lock.current = true;
      setFlip({ from: index, to, dir });
      if (soundOn) playFlip();
      timer.current = setTimeout(() => {
        setIndex(to);
        setFlip(null);
        lock.current = false;
      }, reduced ? REDUCED_MS : FLIP_MS);
    },
    [index, total, soundOn, reduced]
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const onPointerDown = (e) => {
    start.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    const s = start.current;
    start.current = null;
    if (!s) return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy) * 1.3) go(dx < 0 ? 1 : -1);
  };

  // While flipping: "next" lifts the current page off the next one; "prev" lays the earlier page back down.
  const baseIdx = flip ? (flip.dir > 0 ? flip.to : flip.from) : index;
  const topIdx = flip ? (flip.dir > 0 ? flip.from : flip.to) : null;

  const renderPage = (i) => {
    const Page = PAGES[i];
    return (
      <BookPage number={i + 1} total={total}>
        <Page onClose={onClose} />
      </BookPage>
    );
  };

  return (
    <main className="book-area">
      <div
        className="book-stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (start.current = null)}
      >
        <div className="leaf base" key={`base-${baseIdx}`}>{renderPage(baseIdx)}</div>
        {topIdx !== null && (
          <div className={`leaf top ${flip.dir > 0 ? 'turn-next' : 'turn-prev'}`} key={`top-${topIdx}`} aria-hidden="true">
            {renderPage(topIdx)}
          </div>
        )}
        <button type="button" tabIndex={-1} aria-hidden="true" className="edge l" onClick={() => go(-1)} disabled={index === 0} />
        <button type="button" tabIndex={-1} aria-hidden="true" className="edge r" onClick={() => go(1)} disabled={index === total - 1} />
      </div>
      <p className="sr-only" aria-live="polite">page {index + 1} of {total}</p>
      <PageNavigation
        index={index}
        total={total}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />
    </main>
  );
}
