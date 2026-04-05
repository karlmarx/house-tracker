import { useState } from 'react';
import { useApp } from '../context/AppContext';

const options = [
  { label: 'Pool + covered patio', short: 'Option 1' },
  { label: 'Resort pool + deck', short: 'Option 2' },
  { label: 'Plunge + work patio + dog yard', short: 'Option 3' },
];

const descriptions = [
  { text: "28'×18' pool centered in the yard with a covered patio extending from the existing concrete pad. The slider opens straight onto patio → pool. Still leaves side yards and rear corners for the dog. Straightforward build on the blank-canvas yard.", cost: "Est: pool ~$58K, covered patio ~$15K." },
  { text: "46'×20' resort-style pool spanning most of the yard width, with a full travertine deck. This is the maximum water area — big enough for exercise laps. Leaves only the edges for landscaping.", cost: "Est: pool ~$80K, deck ~$22K." },
  { text: "Compact 20'×16' plunge pool on the west side + a large 28'×26' covered work patio with outdoor kitchen on the east side. Dedicated dog run along the rear fence. This is the best layout for your lifestyle — a WFH outdoor office, water therapy/cool-off spot, cooking, and dog space all in one yard.", cost: "Est: pool ~$45K, patio/kitchen ~$30K." },
];

export default function SitePlan1741() {
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

      <svg width="100%" viewBox="0 0 680 640" className="rounded-lg">
        <defs>
          <marker id="arrow1741" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke={muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* Lot boundary */}
        <rect x="80" y="30" width="520" height="580" rx="2" fill="none" stroke={border} strokeWidth="1.5" strokeDasharray="6 3" />
        <rect x="82" y="32" width="516" height="576" rx="1" fill="#2d6a4f" opacity=".08" />

        {/* Street */}
        <text x="340" y="628" textAnchor="middle" fill={muted} fontSize="11" fontWeight="500">NE 40th Street</text>
        <text x="630" y="55" fill={muted} fontSize="13" fontWeight="600">N ↑</text>

        {/* Width */}
        <line x1="80" y1="18" x2="600" y2="18" stroke={muted} strokeWidth=".5" markerStart="url(#arrow1741)" markerEnd="url(#arrow1741)" />
        <text x="340" y="14" textAnchor="middle" fill={muted} fontSize="10">~75'</text>

        {/* Driveway + carport */}
        <path d="M140 610 L140 430 L220 430 L220 610" fill="none" stroke={muted} strokeWidth="1" opacity=".3" />
        <rect x="140" y="430" width="80" height="80" rx="2" fill={bg} stroke={border} strokeWidth=".75" strokeDasharray="4 2" />
        <text x="180" y="475" textAnchor="middle" fill={muted} fontSize="10">carport</text>
        <text x="180" y="570" textAnchor="middle" fill={muted} fontSize="10">driveway</text>

        {/* House */}
        <rect x="180" y="340" width="320" height="170" rx="2" fill={bg} stroke={border} strokeWidth="1.5" />

        {/* BR wing */}
        <rect x="400" y="320" width="100" height="80" rx="2" fill={bg} stroke={border} strokeWidth="1" />
        <text x="450" y="365" textAnchor="middle" fill={muted} fontSize="10">BR wing</text>

        {/* House labels */}
        <text x="320" y="410" textAnchor="middle" fill={heading} fontSize="14" fontWeight="600">house</text>
        <text x="320" y="428" textAnchor="middle" fill={text} fontSize="10">1,194 sqft · 2/2</text>

        {/* Solar panels */}
        <g opacity=".2">
          <rect x="220" y="355" width="40" height="20" rx="1" fill="#1a1a2e" stroke="#1a1a2e" strokeWidth=".5" />
          <rect x="265" y="355" width="40" height="20" rx="1" fill="#1a1a2e" stroke="#1a1a2e" strokeWidth=".5" />
          <rect x="310" y="355" width="40" height="20" rx="1" fill="#1a1a2e" stroke="#1a1a2e" strokeWidth=".5" />
        </g>
        <text x="290" y="390" textAnchor="middle" fill={muted} fontSize="10">solar panels</text>

        {/* Existing patio */}
        <rect x="260" y="260" width="120" height="80" rx="2" fill={muted} opacity=".1" stroke={muted} strokeWidth=".75" />
        <text x="320" y="305" textAnchor="middle" fill={muted} fontSize="10">existing patio</text>

        {/* Slider */}
        <line x1="280" y1="340" x2="360" y2="340" stroke="#00b4d8" strokeWidth="3" opacity=".6" />
        <text x="320" y="335" textAnchor="middle" fill="#00b4d8" fontSize="10">slider to yard</text>

        {/* BR windows */}
        <line x1="420" y1="320" x2="470" y2="320" stroke="#00b4d8" strokeWidth="2" opacity=".4" />

        {/* Privacy fences */}
        <line x1="80" y1="30" x2="80" y2="610" stroke={muted} strokeWidth="2" opacity=".3" />
        <text x="90" y="200" fill={muted} fontSize="10" transform="rotate(-90 90 200)">PVC privacy fence (west)</text>
        <line x1="600" y1="30" x2="600" y2="610" stroke={muted} strokeWidth="2" opacity=".25" />
        <text x="592" y="200" fill={muted} fontSize="10" transform="rotate(90 592 200)">wood privacy fence (east)</text>

        {/* Rear fence */}
        <line x1="80" y1="30" x2="600" y2="30" stroke={muted} strokeWidth="2" opacity=".25" />
        <text x="340" y="48" textAnchor="middle" fill={muted} fontSize="10">rear fence (~35-40' from house)</text>

        {/* Pool setback */}
        <rect x="115" y="65" width="450" height="470" rx="2" fill="none" stroke="#00b4d8" strokeWidth=".5" strokeDasharray="3 3" opacity=".25" />

        {/* Depth */}
        <line x1="620" y1="340" x2="620" y2="30" stroke={muted} strokeWidth=".5" markerStart="url(#arrow1741)" markerEnd="url(#arrow1741)" />
        <text x="640" y="185" fill={muted} fontSize="10" transform="rotate(90 640 185)">~35-40' open yard</text>

        {/* Option 1 */}
        {active === 0 && (
          <g>
            <rect x="200" y="100" width="200" height="120" rx="8" fill="#00b4d8" opacity=".25" stroke="#00b4d8" strokeWidth="1.5" />
            <text x="300" y="165" textAnchor="middle" fill="#0077b6" fontSize="13" fontWeight="600">pool 28'×18'</text>
            <rect x="200" y="225" width="240" height="35" rx="4" fill="#d4a373" opacity=".2" stroke="#d4a373" strokeWidth="1" />
            <text x="320" y="247" textAnchor="middle" fill="#8a5a2d" fontSize="10">covered patio from existing pad</text>
          </g>
        )}

        {/* Option 2 */}
        {active === 1 && (
          <g>
            <rect x="150" y="80" width="320" height="140" rx="8" fill="#00b4d8" opacity=".25" stroke="#00b4d8" strokeWidth="1.5" />
            <text x="310" y="155" textAnchor="middle" fill="#0077b6" fontSize="13" fontWeight="600">pool 46'×20'</text>
            <rect x="150" y="225" width="380" height="35" rx="4" fill="#d4a373" opacity=".2" stroke="#d4a373" strokeWidth="1" />
            <text x="340" y="247" textAnchor="middle" fill="#8a5a2d" fontSize="10">full-width travertine pool deck</text>
          </g>
        )}

        {/* Option 3 */}
        {active === 2 && (
          <g>
            <rect x="140" y="110" width="140" height="110" rx="8" fill="#00b4d8" opacity=".25" stroke="#00b4d8" strokeWidth="1.5" />
            <text x="210" y="170" textAnchor="middle" fill="#0077b6" fontSize="13" fontWeight="600">plunge 20'×16'</text>
            <rect x="310" y="80" width="200" height="180" rx="4" fill="#d4a373" opacity=".2" stroke="#d4a373" strokeWidth="1" />
            <text x="410" y="155" textAnchor="middle" fill="#8a5a2d" fontSize="10">covered work patio</text>
            <text x="410" y="171" textAnchor="middle" fill="#8a5a2d" fontSize="10">+ outdoor kitchen</text>
            <text x="410" y="187" textAnchor="middle" fill="#8a5a2d" fontSize="10">28'×26'</text>
            <rect x="120" y="45" width="390" height="55" rx="2" fill="#2d6a4f" opacity=".1" stroke="#2d6a4f" strokeWidth=".75" strokeDasharray="3 2" />
            <text x="315" y="77" textAnchor="middle" fill="#2d6a4f" fontSize="10">fenced dog run along rear</text>
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
