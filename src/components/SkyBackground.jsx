import FloatingHearts from './FloatingHearts.jsx';

const CLOUDS = [
  { t: '6%', w: 150, d: 90, dl: -20 },
  { t: '22%', w: 110, d: 120, dl: -70 },
  { t: '48%', w: 170, d: 110, dl: -40 },
  { t: '70%', w: 130, d: 100, dl: -90 },
  { t: '86%', w: 190, d: 140, dl: -10 },
];
const STARS = [[10, 12], [82, 9], [68, 30], [20, 38], [90, 55], [8, 66], [55, 80], [35, 92], [78, 88]];

export default function SkyBackground() {
  return (
    <div className="sky" aria-hidden="true">
      {CLOUDS.map((c, i) => (
        <span
          key={`c${i}`}
          className="bg-cloud"
          style={{ '--t': c.t, '--w': `${c.w}px`, '--d': `${c.d}s`, '--dl': `${c.dl}s` }}
        />
      ))}
      {STARS.map(([x, y], i) => (
        <span key={`s${i}`} className="star" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.7}s` }}>
          ✦
        </span>
      ))}
      <FloatingHearts />
    </div>
  );
}
