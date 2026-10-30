export default function PageNavigation({ index, total, onPrev, onNext, soundOn, setSoundOn }) {
  return (
    <nav className="controls" aria-label="book controls">
      <div className="dots" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`dot${i === index ? ' on' : ''}${i < index ? ' done' : ''}`} />
        ))}
      </div>
      <div className="control-row">
        <button type="button" className="nav-btn" onClick={onPrev} disabled={index === 0} aria-label="previous page">
          ‹
        </button>
        <button
          type="button"
          className="sound-btn"
          onClick={() => setSoundOn(!soundOn)}
          aria-pressed={soundOn}
          aria-label={soundOn ? 'turn page sound off' : 'turn page sound on'}
        >
          {soundOn ? '🔊' : '🔇'}
        </button>
        <button
          type="button"
          className="nav-btn"
          onClick={onNext}
          disabled={index === total - 1}
          aria-label="next page"
        >
          ›
        </button>
      </div>
    </nav>
  );
}
