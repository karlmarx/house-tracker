import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Minus } from 'lucide-react';
import { properties } from '../data/properties';
import { useApp } from '../context/AppContext';
import { formatPrice, verdictColor, verdictColorLight, verdictLabel } from '../utils/format';

function Winner({ a, b, lower }) {
  if (a == null || b == null) return null;
  if (a === b) return null;
  return lower ? (a < b ? 0 : 1) : (a > b ? 0 : 1);
}

function CompRow({ label, values, winner, darkMode }) {
  return (
    <div className={`grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] border-b ${darkMode ? 'border-navy-700' : 'border-gray-100'}`}>
      <div className={`p-3 text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
      {values.map((v, i) => (
        <div
          key={i}
          className={`p-3 text-sm ${
            winner === i ? 'text-win-400 font-semibold' : darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {v ?? '—'}
        </div>
      ))}
    </div>
  );
}

export default function Compare() {
  const { compareIds, clearCompare, darkMode } = useApp();
  const selected = properties.filter(p => compareIds.includes(p.id));

  if (selected.length < 2) {
    return (
      <div className="text-center py-20">
        <h1 className="font-serif text-2xl text-teal-400 mb-4">Compare Properties</h1>
        <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Select at least 2 properties from the dashboard to compare.
        </p>
        <Link to="/" className="text-teal-400 hover:underline">Back to dashboard</Link>
      </div>
    );
  }

  const [a, b] = selected;

  const rows = [
    { label: 'Price', values: [formatPrice(a.askingPrice), formatPrice(b.askingPrice)], winner: Winner({ a: a.askingPrice, b: b.askingPrice, lower: true }) },
    { label: 'Original Price', values: [formatPrice(a.originalPrice), formatPrice(b.originalPrice)], winner: null },
    { label: '$/Sqft', values: ['$' + a.pricePerSqft, '$' + b.pricePerSqft], winner: Winner({ a: a.pricePerSqft, b: b.pricePerSqft, lower: true }) },
    { label: 'Offer Range', values: [`${formatPrice(a.offerRange[0])} – ${formatPrice(a.offerRange[1])}`, `${formatPrice(b.offerRange[0])} – ${formatPrice(b.offerRange[1])}`], winner: null },
    { label: 'Beds', values: [a.beds, b.beds], winner: Winner({ a: a.beds, b: b.beds, lower: false }) },
    { label: 'Baths', values: [a.baths, b.baths], winner: Winner({ a: a.baths, b: b.baths, lower: false }) },
    { label: 'Sqft', values: [a.sqft.toLocaleString(), b.sqft.toLocaleString()], winner: Winner({ a: a.sqft, b: b.sqft, lower: false }) },
    { label: 'Lot Size', values: [a.lotSqft.toLocaleString() + ' sqft', b.lotSqft.toLocaleString() + ' sqft'], winner: Winner({ a: a.lotSqft, b: b.lotSqft, lower: false }) },
    { label: 'Year Built', values: [a.yearBuilt, b.yearBuilt], winner: null },
    { label: 'Garage', values: [a.garage || 'None', b.garage || 'None'], winner: null },
    { label: 'Roof', values: [a.roofType, b.roofType], winner: null },
    { label: 'A/C', values: [a.acAge, b.acAge], winner: null },
    { label: 'Solar', values: [a.solarPanels ? 'Yes' : 'No', b.solarPanels ? 'Yes' : 'No'], winner: null },
    { label: 'Impact Windows', values: [a.impactWindows ? 'Yes' : 'No', b.impactWindows ? 'Yes' : 'No'], winner: null },
    { label: 'Flip?', values: [a.isFlip ? 'Yes' : 'No', b.isFlip ? 'Yes' : 'No'], winner: null },
    { label: 'Needs Reno?', values: [a.needsRenovation ? 'Yes' : 'No', b.needsRenovation ? 'Yes' : 'No'], winner: null },
    { label: 'Reno Cost', values: [a.needsRenovation ? `${formatPrice(a.estimatedRenoCost[0])} – ${formatPrice(a.estimatedRenoCost[1])}` : 'N/A', b.needsRenovation ? `${formatPrice(b.estimatedRenoCost[0])} – ${formatPrice(b.estimatedRenoCost[1])}` : 'N/A'], winner: null },
    { label: 'After-Reno Value', values: [a.afterRenoValue ? `${formatPrice(a.afterRenoValue[0])} – ${formatPrice(a.afterRenoValue[1])}` : 'N/A', b.afterRenoValue ? `${formatPrice(b.afterRenoValue[0])} – ${formatPrice(b.afterRenoValue[1])}` : 'N/A'], winner: null },
    { label: 'Walk Score', values: [a.walkScore ?? '—', b.walkScore ?? '—'], winner: Winner({ a: a.walkScore, b: b.walkScore, lower: false }) },
    { label: 'Days on Market', values: [a.daysOnMarket, b.daysOnMarket], winner: null },
    { label: 'Flood Risk', values: [a.floodRiskNote || '—', b.floodRiskNote || '—'], winner: null },
    { label: 'Insurance', values: [a.estimatedInsurance, b.estimatedInsurance], winner: null },
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center justify-between">
        <Link to="/" className={`inline-flex items-center gap-1 text-sm hover:text-teal-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <ArrowLeft size={16} /> Back
        </Link>
        <button onClick={clearCompare} className="text-xs text-coral-400 hover:underline">
          Clear selection
        </button>
      </div>

      <h1 className="font-serif text-2xl text-teal-400">Side-by-Side Comparison</h1>

      {/* Photo headers */}
      <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] gap-3">
        <div />
        {[a, b].map(p => (
          <Link key={p.id} to={`/property/${p.id}`} className="block">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-2">
              <img src={p.photos[0]?.src} alt={p.address} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${darkMode ? verdictColor(p.verdict) : verdictColorLight(p.verdict)}`}>
                  {verdictLabel(p.verdict)}
                </span>
              </div>
            </div>
            <div className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.address}</div>
            <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{p.neighborhood}</div>
          </Link>
        ))}
      </div>

      {/* Comparison rows */}
      <div className={`rounded-xl border overflow-hidden ${darkMode ? 'bg-navy-800 border-navy-700' : 'bg-white border-gray-200'}`}>
        {rows.map(row => (
          <CompRow key={row.label} label={row.label} values={row.values} winner={row.winner} darkMode={darkMode} />
        ))}
      </div>

      {/* Pros/Cons side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[a, b].map(p => (
          <div key={p.id} className={`rounded-xl border p-5 ${darkMode ? 'bg-navy-800 border-navy-700' : 'bg-white border-gray-200'}`}>
            <h3 className={`font-serif text-lg mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.address}</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-win-400 text-xs font-semibold mb-2">PROS</h4>
                <ul className="space-y-1.5">
                  {p.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs">
                      <CheckCircle2 size={12} className="text-win-400 mt-0.5 shrink-0" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-coral-400 text-xs font-semibold mb-2">CONS</h4>
                <ul className="space-y-1.5">
                  {p.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs">
                      <XCircle size={12} className="text-coral-400 mt-0.5 shrink-0" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary recommendation */}
      <div className={`rounded-xl border-2 p-5 ${darkMode ? 'bg-teal-500/5 border-teal-500/40' : 'bg-teal-50 border-teal-300'}`}>
        <h2 className="font-serif text-xl text-teal-400 mb-3">Summary</h2>
        {[a, b].map(p => (
          <div key={p.id} className="mb-3 last:mb-0">
            <span className={`font-semibold text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.address}</span>
            <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>— {p.verdictNote}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
