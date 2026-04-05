import { Link } from 'react-router-dom';
import { Bed, Bath, Ruler, LandPlot, Calendar, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice, verdictColor, verdictColorLight, verdictLabel } from '../utils/format';

export default function PropertyCard({ property }) {
  const { compareIds, toggleCompare, darkMode } = useApp();
  const p = property;
  const isSelected = compareIds.includes(p.id);
  const thumb = p.photos[0]?.src;

  const pills = [];
  if (p.isFlip) pills.push({ label: 'Flip', cls: 'bg-coral-500/20 text-coral-400 border-coral-500/30', clsLight: 'bg-red-100 text-red-700 border-red-200' });
  if (p.listedAsIs) pills.push({ label: 'As-Is', cls: 'bg-amber-500/20 text-amber-400 border-amber-500/30', clsLight: 'bg-amber-100 text-amber-700 border-amber-200' });
  if (p.garage && !p.garage.includes('Carport')) pills.push({ label: 'Garage', cls: 'bg-teal-500/20 text-teal-400 border-teal-500/30', clsLight: 'bg-teal-100 text-teal-700 border-teal-200' });
  if (p.solarPanels) pills.push({ label: 'Solar', cls: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', clsLight: 'bg-emerald-100 text-emerald-700 border-emerald-200' });
  if (p.impactWindows) pills.push({ label: 'Impact', cls: 'bg-sky-500/20 text-sky-400 border-sky-500/30', clsLight: 'bg-sky-100 text-sky-700 border-sky-200' });

  return (
    <div className={`rounded-xl border overflow-hidden transition-all hover:scale-[1.01] ${darkMode ? 'bg-navy-800 border-navy-700 hover:border-teal-500/40' : 'bg-white border-gray-200 hover:border-teal-500/60'}`}>
      <Link to={`/property/${p.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={thumb}
            alt={p.address}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${darkMode ? verdictColor(p.verdict) : verdictColorLight(p.verdict)}`}>
              {verdictLabel(p.verdict)}
            </span>
          </div>
          <div className={`absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t ${darkMode ? 'from-navy-950/90' : 'from-black/60'}`}>
            <div className="text-white font-semibold text-lg leading-tight">{p.address}</div>
            <div className="text-gray-300 text-sm">{p.neighborhood} · {p.city}, {p.state}</div>
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-teal-400">{formatPrice(p.askingPrice)}</span>
            {p.originalPrice !== p.askingPrice && (
              <span className={`ml-2 text-sm line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{formatPrice(p.originalPrice)}</span>
            )}
          </div>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>${p.pricePerSqft}/sqft</span>
        </div>

        <div className={`flex items-center gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <span className="flex items-center gap-1"><Bed size={14} /> {p.beds}</span>
          <span className="flex items-center gap-1"><Bath size={14} /> {p.baths}</span>
          <span className="flex items-center gap-1"><Ruler size={14} /> {p.sqft.toLocaleString()}</span>
          <span className="flex items-center gap-1"><LandPlot size={14} /> {p.lotSqft.toLocaleString()}</span>
        </div>

        {pills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {pills.map(pill => (
              <span key={pill.label} className={`px-2 py-0.5 rounded-full text-xs font-medium border ${darkMode ? pill.cls : pill.clsLight}`}>
                {pill.label}
              </span>
            ))}
          </div>
        )}

        <div className={`rounded-lg p-3 ${darkMode ? 'bg-navy-900' : 'bg-gray-50'}`}>
          <div className={`text-xs font-medium mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Offer Range</div>
          <div className="text-sm font-semibold text-teal-400">
            {formatPrice(p.offerRange[0])} – {formatPrice(p.offerRange[1])}
          </div>
        </div>

        <div className={`flex items-center justify-between text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          <span className="flex items-center gap-1"><Clock size={12} /> {p.daysOnMarket} days on market</span>
          <span className="flex items-center gap-1"><Calendar size={12} /> {p.status}</span>
        </div>

        <label
          className={`flex items-center gap-2 pt-2 border-t cursor-pointer text-sm ${darkMode ? 'border-navy-700 text-gray-400' : 'border-gray-100 text-gray-500'}`}
          onClick={e => e.stopPropagation()}
        >
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleCompare(p.id)}
            className="rounded accent-teal-500"
          />
          Compare
        </label>
      </div>
    </div>
  );
}
