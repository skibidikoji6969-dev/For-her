import { CloudHeart } from './Art.jsx';

export default function FinalScreen({ onRestart }) {
  return (
    <main className="final">
      <div className="mini-book" aria-hidden="true">
        <CloudHeart size={96} />
      </div>
      <p className="final-note" role="status">made with care, just for you. 🩵</p>
      <button type="button" className="ghost-btn" onClick={onRestart}>
        read it again
      </button>
    </main>
  );
}
