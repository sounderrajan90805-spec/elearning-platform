const colors = {
  1: ['#1f1a4d', '#3b8cff'],
  2: ['#ffd23f', '#ff9f43'],
  3: ['#12c2a4', '#3b8cff'],
  4: ['#0f2a5f', '#12c2a4'],
  5: ['#3a2a8f', '#6c4cf1'],
  6: ['#ff5c8a', '#ff9f43'],
  7: ['#ff9f43', '#ffd23f'],
  8: ['#8a3ffc', '#ff5c8a'],
}

const scenes = {
  // React: atom
  1: (
    <g transform="translate(200 100)" fill="none" stroke="#61dafb" strokeWidth="5">
      <ellipse rx="88" ry="32" />
      <ellipse rx="88" ry="32" transform="rotate(60)" />
      <ellipse rx="88" ry="32" transform="rotate(120)" />
      <circle r="12" fill="#61dafb" stroke="none" />
    </g>
  ),
  // JavaScript
  2: (
    <g>
      <rect x="140" y="42" width="120" height="120" rx="16" fill="#1f1a4d" />
      <text x="200" y="128" textAnchor="middle" fontSize="64" fontWeight="800" fontFamily="Sora, sans-serif" fill="#ffd23f">JS</text>
      <text x="62" y="118" fontSize="46" fontWeight="700" fill="#fff" opacity=".85">{'{ }'}</text>
      <text x="292" y="118" fontSize="46" fontWeight="700" fill="#fff" opacity=".85">{'</>'}</text>
    </g>
  ),
  // CSS layouts: browser window
  3: (
    <g>
      <rect x="85" y="32" width="230" height="140" rx="14" fill="#fff" />
      <rect x="85" y="32" width="230" height="26" rx="14" fill="#1f1a4d" />
      <circle cx="105" cy="45" r="5" fill="#ff5c8a" />
      <circle cx="122" cy="45" r="5" fill="#ffd23f" />
      <circle cx="139" cy="45" r="5" fill="#12c2a4" />
      <rect x="100" y="70" width="80" height="90" rx="8" fill="#6c4cf1" />
      <rect x="190" y="70" width="110" height="38" rx="8" fill="#ff5c8a" />
      <rect x="190" y="118" width="50" height="42" rx="8" fill="#ffd23f" />
      <rect x="250" y="118" width="50" height="42" rx="8" fill="#12c2a4" />
    </g>
  ),
  // Python / data: charts
  4: (
    <g>
      <line x1="95" y1="162" x2="315" y2="162" stroke="#fff" strokeWidth="3" opacity=".7" />
      <rect x="110" y="112" width="32" height="50" rx="5" fill="#ffd23f" />
      <rect x="155" y="88" width="32" height="74" rx="5" fill="#ff5c8a" />
      <rect x="200" y="62" width="32" height="100" rx="5" fill="#12c2a4" />
      <rect x="245" y="96" width="32" height="66" rx="5" fill="#3b8cff" />
      <polyline points="105,100 170,70 215,48 262,82 308,36" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="308" cy="36" r="8" fill="#ffd23f" />
    </g>
  ),
  // SQL: database
  5: (
    <g>
      <rect x="145" y="52" width="110" height="100" fill="#ffd23f" />
      <ellipse cx="200" cy="152" rx="55" ry="18" fill="#ffd23f" />
      <path d="M145 86 A55 18 0 0 0 255 86" fill="none" stroke="#c99a00" strokeWidth="4" />
      <path d="M145 119 A55 18 0 0 0 255 119" fill="none" stroke="#c99a00" strokeWidth="4" />
      <ellipse cx="200" cy="52" rx="55" ry="18" fill="#ffe680" />
      <rect x="70" y="80" width="46" height="8" rx="4" fill="#fff" opacity=".6" />
      <rect x="284" y="110" width="46" height="8" rx="4" fill="#fff" opacity=".6" />
    </g>
  ),
  // Figma / design
  6: (
    <g>
      <rect x="105" y="48" width="84" height="104" rx="14" fill="#fff" />
      <circle cx="245" cy="78" r="34" fill="#6c4cf1" />
      <circle cx="245" cy="140" r="26" fill="#12c2a4" />
      <circle cx="147" cy="100" r="22" fill="#ffd23f" />
      <polygon points="285,110 285,160 300,148 312,172 322,167 310,144 330,142" fill="#1f1a4d" />
    </g>
  ),
  // Marketing: megaphone
  7: (
    <g>
      <rect x="100" y="86" width="36" height="32" rx="7" fill="#1f1a4d" />
      <polygon points="134,84 240,42 240,160 134,118" fill="#1f1a4d" />
      <rect x="150" y="116" width="22" height="40" rx="6" fill="#ff5c8a" />
      <path d="M258 78 Q286 101 258 124" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      <path d="M278 58 Q326 101 278 144" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
    </g>
  ),
  // Spoken English: chat bubbles
  8: (
    <g fontFamily="Sora, sans-serif" fontWeight="700" fontSize="24">
      <rect x="62" y="34" width="165" height="74" rx="20" fill="#fff" />
      <polygon points="92,106 120,106 90,134" fill="#fff" />
      <text x="144" y="82" textAnchor="middle" fill="#6c4cf1">Hello!</text>
      <rect x="172" y="100" width="168" height="74" rx="20" fill="#ffd23f" />
      <polygon points="300,172 326,172 328,194" fill="#ffd23f" />
      <text x="256" y="148" textAnchor="middle" fill="#1f1a4d">Hi there!</text>
    </g>
  ),
}

export default function CourseArt({ id }) {
  const [a, b] = colors[id] || colors[1]
  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill={`url(#g${id})`} />
      <circle cx="355" cy="25" r="48" fill="#fff" opacity=".13" />
      <circle cx="30" cy="185" r="55" fill="#fff" opacity=".1" />
      {scenes[id]}
    </svg>
  )
}