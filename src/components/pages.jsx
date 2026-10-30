import { useEffect, useRef, useState } from 'react';
import { CloudFace, CloudHeart, Flower, Teddy, Envelope } from './Art.jsx';

function P1() {
  return (
    <>
      <div className="art-row duo" aria-hidden="true">
        <CloudFace size={130} />
        <CloudFace size={86} />
        <span className="sparkle sp1">✨</span>
        <span className="sparkle sp2">✦</span>
        <span className="tiny-heart">🩵</span>
      </div>
      <h2 className="page-title">a little note for you</h2>
      <p className="hand">hey, you. 🩵</p>
      <p>I made this little corner of the internet just for you.</p>
      <p>Take your time turning these pages.</p>
    </>
  );
}

function P2() {
  return (
    <>
      <div className="art-row"><CloudHeart size={150} /></div>
      <h2 className="page-title">first things first</h2>
      <p>I know you're upset with me, and I don't want to brush your feelings aside.</p>
      <p>I'm sorry for hurting you or making you feel this way.</p>
      <p>You deserve to be heard, understood, and treated with care.</p>
    </>
  );
}

function P3() {
  return (
    <>
      <div className="art-row duo" aria-hidden="true">
        <CloudFace size={110} />
        <Flower size={62} />
      </div>
      <h2 className="page-title">your feelings matter</h2>
      <p>I'm not making this to ask you to stop being mad.</p>
      <p>I'm making it because your feelings matter to me.</p>
      <p>You don't have to pretend everything is okay before you're ready.</p>
    </>
  );
}

function Card({ emoji, text }) {
  return (
    <li className="mini-card">
      <span className="em" aria-hidden="true">{emoji}</span>
      <span>{text}</span>
    </li>
  );
}

function P4() {
  return (
    <>
      <h2 className="page-title">the little things</h2>
      <ul className="cards">
        <Card emoji="☁️" text="Your little moments" />
        <Card emoji="🌷" text="The things that make you, you" />
        <Card emoji="✨" text="The happiness you bring into ordinary days" />
      </ul>
      <p>
        It's the little things that make someone special, and I hope I never get too caught up in a moment to
        appreciate them.
      </p>
    </>
  );
}

function P5() {
  return (
    <>
      <h2 className="page-title">a promise that means something</h2>
      <ul className="cards">
        <Card emoji="🫶🏻" text="I'll try to listen instead of jumping to conclusions." />
        <Card emoji="💌" text="I'll be more thoughtful about how my words and actions affect you." />
        <Card emoji="🌱" text="I'll focus on showing change through my actions, not just saying the right things." />
      </ul>
      <p className="small">Not perfect promises, just things I'm committed to working on.</p>
    </>
  );
}

function P6() {
  const [bits, setBits] = useState([]);
  const counter = useRef(0);
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const send = () => {
    if (bits.length > 12) return;
    const emojis = ['☁️', '🩵', '💗', '☁️', '✨', '🤍'];
    const batch = emojis.map((e, i) => ({
      id: ++counter.current,
      e,
      x: 10 + i * 15 + (counter.current % 3) * 3,
      delay: i * 0.12,
    }));
    const ids = batch.map((b) => b.id);
    setBits((prev) => [...prev, ...batch]);
    timers.current.push(setTimeout(() => setBits((prev) => prev.filter((b) => !ids.includes(b.id))), 3200));
  };

  return (
    <>
      <h2 className="page-title">a tiny pause</h2>
      <div className="pause-stage">
        <div className="bob"><CloudHeart size={150} /></div>
        {bits.map((b) => (
          <span key={b.id} className="float-bit" style={{ left: `${b.x}%`, animationDelay: `${b.delay}s` }} aria-hidden="true">
            {b.e}
          </span>
        ))}
      </div>
      <button type="button" className="tap-btn center" onClick={send}>
        send a little cloud ☁️
      </button>
      <p>No pressure to reply right now. Take all the time you need.</p>
    </>
  );
}

function P7() {
  return (
    <div className="letter">
      <h2 className="page-title">one last little thing</h2>
      <p>I'm sorry for the part I played in making things difficult.</p>
      <p>I care about you, and I want to understand your side better.</p>
      <p>I know a website can't fix everything. What matters most is what I do after this.</p>
      <p>Whenever you're ready, I'd like to listen.</p>
      <span className="letter-heart" aria-hidden="true">🩵</span>
    </div>
  );
}

function P8({ onClose }) {
  return (
    <>
      <div className="art-row duo" aria-hidden="true">
        <Teddy size={104} />
        <Envelope size={76} />
        <span className="tiny-heart">💗</span>
      </div>
      <h2 className="page-title">the final page</h2>
      <p className="hand">no rush, no pressure. just a little reminder that you matter. 🩵</p>
      <p>take care of that lovely heart of yours.</p>
      <button type="button" className="tap-btn center" onClick={onClose}>
        close the book ☁️
      </button>
    </>
  );
}

const PAGES = [P1, P2, P3, P4, P5, P6, P7, P8];
export default PAGES;
