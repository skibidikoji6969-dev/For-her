// Deterministic "random-looking" values so there is no re-render flicker.
const HEARTS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: (i * 83 + 7) % 96,
  size: 12 + ((i * 5) % 12),
  dur: 14 + ((i * 3) % 10),
  delay: -((i * 2.7) % 16),
}));

export default function FloatingHearts() {
  return (
    <>
      {HEARTS.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{ left: `${h.x}%`, fontSize: h.size, animationDuration: `${h.dur}s`, animationDelay: `${h.delay}s` }}
        >
          {'\u2665\uFE0E'}
        </span>
      ))}
    </>
  );
}
