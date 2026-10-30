import { useState } from 'react';
import SkyBackground from './components/SkyBackground.jsx';
import BookCover from './components/BookCover.jsx';
import FlipBook from './components/FlipBook.jsx';
import FinalScreen from './components/FinalScreen.jsx';

// stages: cover -> book -> closing -> closed -> (read it again) cover
export default function App() {
  const [stage, setStage] = useState('cover');
  const [soundOn, setSoundOn] = useState(false); // sound is OFF by default

  return (
    <div className="app">
      <SkyBackground />
      {stage === 'cover' && <BookCover key="cover" onOpen={() => setStage('book')} />}
      {stage === 'book' && (
        <FlipBook
          key="book"
          soundOn={soundOn}
          setSoundOn={setSoundOn}
          onClose={() => setStage('closing')}
        />
      )}
      {stage === 'closing' && (
        <BookCover key="closing" mode="closing" onClosed={() => setStage('closed')} />
      )}
      {stage === 'closed' && <FinalScreen key="closed" onRestart={() => setStage('cover')} />}
    </div>
  );
}
