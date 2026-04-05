import { useState } from 'react';
import { useApp } from '../context/AppContext';

const options = [
  { label: 'Classic pool + patio', short: 'Option 1' },
  { label: 'Lap pool + deck', short: 'Option 2' },
  { label: 'Plunge + outdoor kitchen', short: 'Option 3' },
];

const descriptions = [
  { text: "26'×15' pool centered behind the Florida room sliding doors, with a 15'×15' patio on the east side for seating/grill. The pool lines up directly with the impact sliders for a straight indoor-outdoor sightline. Leaves the west side open for dog space and mature palm trees.", cost: "Est: pool ~$55K, patio ~$10K." },
  { text: "40'×16' lap pool spanning nearly the full yard width — big enough for real exercise laps. Full-width pool deck connects to the Florida room, creating one continuous outdoor living surface. Best for fitness use, but eats most of the yard.", cost: "Est: pool ~$70K, deck ~$18K." },
  { text: "Compact 20'×14' plunge/spa pool on the west side + a large 22'×22' covered outdoor kitchen and dining area on the east side. Includes a fenced dog run along the west property line. Best balance of entertaining, cooking, dog space, and a place to cool off.", cost: "Est: pool ~$45K, kitchen/patio ~$25K." },
];

export default function SitePlan3497() {
  const [active, setActive] = useState(0);
  const { darkMode } = useApp();

  const border = darkMode ? '#475569' : '#d1d5db';
  const muted = darkMode ? '#64748b' : '#9ca3af';
  const bg = darkMode ? '#1e293b' : '#f1f5f9';
  const text = darkMode ? '#94a3b8' : '#6b7280';
  const heading = darkMode ? '#e2e8f0' : '#1f2937';

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              active === i
                ? 'border-teal-500 text-teal-400 bg-teal-500/10'
                : darkMode
                  ? 'border-navy-600 text-gray-400 bg-navy-900 hover:border-gray-500'
                  : 'border-gray-200 text-gray-500 bg-gray-50 hover:border-gray-400'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <svg width="100%" viewBox="0 0 680 620" className="rounded-lg">
        <defs>
          <marker id="arrow3497" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke={muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* Lot boundary */}
        <rect x="80" y="40" width="520" height="540" rx="2" fill="none" stroke={border} strokeWidth="1.5" strokeDasharray="6 3" />
        <rect x="82" y="42" width="516" height="536" rx="1" fill="#2d6a4f" opacity=".08" />

        {/* Street */}
        <text x="340" y="598" textAnchor="middle" fill={muted} fontSize="11" fontWeight="500">NE 20th Avenue</text>
        <text x="630" y="60" fill={muted} fontSize="13" fontWeight="600">N ↑</text>

        {/* Circular driveway */}
        <path d="M260 580 Q260 520 340 500 Q420 520 420 580" fill="none" stroke={muted} strokeWidth="1.5" opacity=".4" />
        <text x="340" y="560" textAnchor="middle" fill={muted} fontSize="10">circular drive</text>

        {/* House footprint */}
        <rect x="160" y="300" width="280" height="180" rx="2" fill={bg} stroke={border} strokeWidth="1.5" />

        {/* Garage */}
        <rect x="440" y="360" width="80" height="100" rx="2" fill={bg} stroke={border} strokeWidth="1" />
        <text x="480" y="415" textAnchor="middle" fill={text} fontSize="10">garage</text>

        {/* Florida Room */}
        <rect x="280" y="240" width="160" height="60" rx="2" fill="#d4a373" opacity=".2" stroke="#d4a373" strokeWidth="1" />
        <text x="360" y="275" textAnchor="middle" fill="#8a5a2d" fontSize="11" fontWeight="500">florida room</text>

        {/* Sliding doors */}
        <line x1="290" y1="240" x2="340" y2="240" stroke="#00b4d8" strokeWidth="3" opacity=".6" />
        <line x1="360" y1="240" x2="430" y2="240" stroke="#00b4d8" strokeWidth="3" opacity=".6" />
        <text x="360" y="233" textAnchor="middle" fill="#00b4d8" fontSize="10">impact sliders</text>

        {/* Bedroom slider */}
        <line x1="170" y1="300" x2="240" y2="300" stroke="#00b4d8" strokeWidth="2.5" opacity=".4" />

        {/* House labels */}
        <text x="280" y="370" textAnchor="middle" fill={heading} fontSize="14" fontWeight="600">house</text>
        <text x="280" y="388" textAnchor="middle" fill={text} fontSize="10">1,478 sqft · 3/2</text>

        {/* Primary BR */}
        <text x="200" y="440" textAnchor="middle" fill={muted} fontSize="10">primary BR</text>
        <text x="200" y="454" textAnchor="middle" fill={muted} fontSize="10">(pvt entrance)</text>

        {/* Palm trees */}
        <circle cx="110" cy="180" r="12" fill="#2d6a4f" opacity=".15" stroke="#2d6a4f" strokeWidth=".5" />
        <circle cx="100" cy="280" r="10" fill="#2d6a4f" opacity=".15" stroke="#2d6a4f" strokeWidth=".5" />
        <text x="95" y="320" fill={muted} fontSize="10">palms</text>

        {/* Stepping stones */}
        <g opacity=".25">
          {[0,1,2,3,4].map(i => (
            <g key={i}>
              <rect x={290 + i * 25} y="180" width="20" height="20" rx="1" fill={muted} />
              <rect x={290 + i * 25} y="205" width="20" height="20" rx="1" fill={muted} />
            </g>
          ))}
        </g>

        {/* Pool setback */}
        <rect x="115" y="75" width="450" height="430" rx="2" fill="none" stroke="#00b4d8" strokeWidth=".5" strokeDasharray="3 3" opacity=".3" />
        <text x="555" y="290" fill="#00b4d8" opacity=".4" fontSize="10">5' setback</text>

        {/* Rear line */}
        <text x="340" y="55" textAnchor="middle" fill={muted} fontSize="10">rear property line (~30-35' from house)</text>

        {/* Side labels */}
        <text x="70" y="300" textAnchor="middle" fill={muted} fontSize="10" transform="rotate(-90 70 300)">west neighbor</text>
        <text x="618" y="300" textAnchor="middle" fill={muted} fontSize="10" transform="rotate(90 618 300)">east neighbor (has pool)</text>

        {/* Width */}
        <line x1="80" y1="24" x2="600" y2="24" stroke={muted} strokeWidth=".5" markerStart="url(#arrow3497)" markerEnd="url(#arrow3497)" />
        <text x="340" y="20" textAnchor="middle" fill={muted} fontSize="10">~75'</text>

        {/* Option 1: Classic pool + patio */}
        {active === 0 && (
          <g>
            <rect x="200" y="90" width="180" height="100" rx="8" fill="#00b4d8" opacity=".25" stroke="#00b4d8" strokeWidth="1.5" />
            <text x="290" y="145" textAnchor="middle" fill="#0077b6" fontSize="13" fontWeight="600">pool 26'×15'</text>
            <rect x="400" y="140" width="100" height="100" rx="4" fill="#d4a373" opacity=".2" stroke="#d4a373" strokeWidth="1" />
            <text x="450" y="195" textAnchor="middle" fill="#8a5a2d" fontSize="10">patio 15'×15'</text>
          </g>
        )}

        {/* Option 2: Lap pool + deck */}
        {active === 1 && (
          <g>
            <rect x="150" y="80" width="280" height="110" rx="8" fill="#00b4d8" opacity=".25" stroke="#00b4d8" strokeWidth="1.5" />
            <text x="290" y="140" textAnchor="middle" fill="#0077b6" fontSize="13" fontWeight="600">lap pool 40'×16'</text>
            <rect x="150" y="195" width="370" height="40" rx="4" fill="#d4a373" opacity=".2" stroke="#d4a373" strokeWidth="1" />
            <text x="335" y="220" textAnchor="middle" fill="#8a5a2d" fontSize="10">full-width pool deck → FL room</text>
          </g>
        )}

        {/* Option 3: Plunge + outdoor kitchen */}
        {active === 2 && (
          <g>
            <rect x="150" y="100" width="140" height="100" rx="8" fill="#00b4d8" opacity=".25" stroke="#00b4d8" strokeWidth="1.5" />
            <text x="220" y="155" textAnchor="middle" fill="#0077b6" fontSize="13" fontWeight="600">plunge 20'×14'</text>
            <rect x="320" y="80" width="160" height="155" rx="4" fill="#d4a373" opacity=".2" stroke="#d4a373" strokeWidth="1" />
            <text x="400" y="145" textAnchor="middle" fill="#8a5a2d" fontSize="10">outdoor kitchen</text>
            <text x="400" y="161" textAnchor="middle" fill="#8a5a2d" fontSize="10">+ covered dining</text>
            <text x="400" y="177" textAnchor="middle" fill="#8a5a2d" fontSize="10">22'×22'</text>
            <rect x="120" y="80" width="25" height="150" rx="2" fill="#2d6a4f" opacity=".1" stroke="#2d6a4f" strokeWidth=".75" strokeDasharray="3 2" />
            <text x="132" y="160" textAnchor="middle" fill="#2d6a4f" fontSize="10" transform="rotate(-90 132 160)">dog run</text>
          </g>
        )}
      </svg>

      <div className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{options[active].short}:</span>{' '}
        {descriptions[active].text}{' '}
        <span className="font-semibold text-teal-400">{descriptions[active].cost}</span>
      </div>
    </div>
  );
}
