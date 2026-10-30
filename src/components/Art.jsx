// All illustrations are inline SVG, so nothing can ever fail to load.
const INK = '#24445C';

function CloudBody() {
  return (
    <g fill="#fff">
      <circle cx="58" cy="76" r="32" />
      <circle cx="104" cy="56" r="42" />
      <circle cx="150" cy="78" r="30" />
      <rect x="40" y="74" width="136" height="36" rx="18" />
    </g>
  );
}

function Face() {
  return (
    <g>
      <circle cx="86" cy="82" r="3.6" fill={INK} />
      <circle cx="122" cy="82" r="3.6" fill={INK} />
      <ellipse cx="74" cy="92" rx="7" ry="4.5" fill="#FFB8D3" opacity=".85" />
      <ellipse cx="134" cy="92" rx="7" ry="4.5" fill="#FFB8D3" opacity=".85" />
      <path d="M97 90 Q104 97 111 90" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </g>
  );
}

export function CloudFace({ size = 120 }) {
  return (
    <svg className="art" width={size} height={size * 0.6} viewBox="0 0 200 120" role="img" aria-label="a smiling cloud">
      <CloudBody />
      <Face />
    </svg>
  );
}

export function CloudHeart({ size = 150 }) {
  return (
    <svg className="art" width={size} height={size * 0.72} viewBox="0 0 200 144" role="img" aria-label="a smiling cloud holding a heart">
      <CloudBody />
      <Face />
      <path transform="translate(104 114) scale(.85)" d="M0 -8 C-16 -26 -40 -2 0 28 C40 -2 16 -26 0 -8Z" fill="#FF8FB5" />
    </svg>
  );
}

export function Flower({ size = 80 }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg className="art" width={size} height={size * 1.4} viewBox="0 0 100 140" role="img" aria-label="a tiny flower">
      <path d="M50 62 Q48 100 50 134" stroke="#8FD3B0" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M50 110 Q70 96 82 102 Q68 118 50 114Z" fill="#A8E0C4" />
      <path d="M49 96 Q30 84 18 90 Q32 106 49 100Z" fill="#A8E0C4" />
      <g transform="translate(50 40)">
        {petals.map((a) => (
          <ellipse key={a} cx="0" cy="-20" rx="14" ry="19" fill="#FFB8D3" transform={`rotate(${a})`} />
        ))}
        <circle r="12" fill="#FFE9A8" />
      </g>
    </svg>
  );
}

export function Teddy({ size = 120 }) {
  const fur = '#D8B08A';
  const light = '#F4D9BD';
  return (
    <svg className="art" width={size} height={size * 1.07} viewBox="0 0 140 150" role="img" aria-label="a tiny teddy bear with a bow">
      <circle cx="36" cy="30" r="16" fill={fur} />
      <circle cx="36" cy="30" r="8" fill={light} />
      <circle cx="104" cy="30" r="16" fill={fur} />
      <circle cx="104" cy="30" r="8" fill={light} />
      <ellipse cx="70" cy="112" rx="34" ry="32" fill={fur} />
      <ellipse cx="70" cy="116" rx="20" ry="20" fill={light} />
      <ellipse cx="36" cy="106" rx="11" ry="19" fill={fur} transform="rotate(25 36 106)" />
      <ellipse cx="104" cy="106" rx="11" ry="19" fill={fur} transform="rotate(-25 104 106)" />
      <ellipse cx="50" cy="141" rx="15" ry="9" fill={fur} />
      <ellipse cx="90" cy="141" rx="15" ry="9" fill={fur} />
      <circle cx="70" cy="62" r="40" fill={fur} />
      <ellipse cx="70" cy="74" rx="16" ry="12" fill={light} />
      <circle cx="55" cy="56" r="4" fill={INK} />
      <circle cx="85" cy="56" r="4" fill={INK} />
      <ellipse cx="70" cy="69" rx="5" ry="3.5" fill={INK} />
      <path d="M64 77 Q70 83 76 77" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <ellipse cx="46" cy="70" rx="6" ry="4" fill="#FFB8D3" opacity=".8" />
      <ellipse cx="94" cy="70" rx="6" ry="4" fill="#FFB8D3" opacity=".8" />
      <path d="M70 98 L50 88 L50 108Z M70 98 L90 88 L90 108Z" fill="#FF9EBD" />
      <circle cx="70" cy="98" r="5" fill="#FF7FA8" />
    </svg>
  );
}

export function Envelope({ size = 90 }) {
  return (
    <svg className="art" width={size} height={size * 0.75} viewBox="0 0 120 90" role="img" aria-label="a little envelope">
      <rect x="4" y="10" width="112" height="74" rx="10" fill="#fff" />
      <path d="M8 18 L60 56 L112 18" stroke="#9FD6F7" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <path transform="translate(60 54) scale(.5)" d="M0 -8 C-16 -26 -40 -2 0 28 C40 -2 16 -26 0 -8Z" fill="#FF8FB5" />
    </svg>
  );
}
