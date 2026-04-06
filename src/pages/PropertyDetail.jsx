import { useParams, Link } from 'react-router-dom';
import {
  Bed, Bath, Ruler, LandPlot, Calendar, Building, Car, Waves, Wind,
  Sun, Shield, DollarSign, TrendingDown, AlertTriangle, CheckCircle2,
  XCircle, ArrowLeft, MapPin, Footprints, Bike, Bus, Phone, Mail,
  Hammer, TreePine, Droplets,
} from 'lucide-react';
import { properties } from '../data/properties';
import { useApp } from '../context/AppContext';
import { formatPrice, verdictColor, verdictColorLight, verdictLabel } from '../utils/format';
import PhotoGallery from '../components/PhotoGallery';
import SitePlan3497 from '../components/SitePlan3497';
import SitePlan1741 from '../components/SitePlan1741';

const sitePlanComponents = {
  '3497-ne-20th-ave': SitePlan3497,
  '1741-ne-40th-st': SitePlan1741,
};

function Section({ title, icon: Icon, children, darkMode }) {
  return (
    <section className={`rounded-xl border p-5 ${darkMode ? 'bg-navy-800 border-navy-700' : 'bg-white border-gray-200'}`}>
      <h2 className={`font-serif text-xl mb-4 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        {Icon && <Icon size={20} className="text-teal-400" />}
        {title}
      </h2>
      {children}
    </section>
  );
}

function StatBox({ label, value, sub, darkMode }) {
  return (
    <div className={`rounded-lg p-3 ${darkMode ? 'bg-navy-900' : 'bg-gray-50'}`}>
      <div className={`text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
      <div className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{value}</div>
      {sub && <div className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{sub}</div>}
    </div>
  );
}

function PriorityBadge({ priority, darkMode }) {
  const colors = {
    critical: darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700',
    high: darkMode ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700',
    medium: darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700',
    low: darkMode ? 'bg-gray-500/20 text-gray-400' : 'bg-gray-100 text-gray-600',
    optional: darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[priority] || colors.low}`}>
      {priority}
    </span>
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const { darkMode } = useApp();
  const p = properties.find(x => x.id === id);

  if (!p) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-serif text-coral-400">Property not found</h1>
        <Link to="/" className="text-teal-400 hover:underline mt-4 inline-block">Back to dashboard</Link>
      </div>
    );
  }

  const sub = darkMode ? 'text-gray-400' : 'text-gray-500';
  const muted = darkMode ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className="space-y-6 pb-8">
      {/* Back link */}
      <Link to="/" className={`inline-flex items-center gap-1 text-sm hover:text-teal-400 transition-colors ${sub}`}>
        <ArrowLeft size={16} /> Back to properties
      </Link>

      {/* 1. Hero */}
      <div className="relative rounded-xl overflow-hidden aspect-[21/9]">
        <img src={p.photos[0]?.src} alt={p.address} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-6">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mb-3 ${verdictColor(p.verdict)}`}>
            {verdictLabel(p.verdict)}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-white font-bold">{p.address}</h1>
          <p className="text-gray-300 mt-1">{p.neighborhood} · {p.city}, {p.state} {p.zip}</p>
          <div className="flex items-baseline gap-3 mt-2">
            <span className="text-3xl font-bold text-teal-400">{formatPrice(p.askingPrice)}</span>
            {p.originalPrice !== p.askingPrice && (
              <span className="text-lg text-gray-400 line-through">{formatPrice(p.originalPrice)}</span>
            )}
            <span className="text-gray-400">${p.pricePerSqft}/sqft</span>
          </div>
        </div>
      </div>

      {/* Verdict note */}
      <div className={`rounded-xl border p-4 ${darkMode ? 'bg-navy-800 border-teal-500/30' : 'bg-teal-50 border-teal-200'}`}>
        <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{p.verdictNote}</p>
      </div>

      {/* 2. Photo Gallery */}
      <Section title="Photos" icon={null} darkMode={darkMode}>
        <PhotoGallery photos={p.photos} />
      </Section>

      {/* 3. Offer Strategy */}
      <div className={`rounded-xl border-2 p-5 ${darkMode ? 'bg-teal-500/5 border-teal-500/40' : 'bg-teal-50 border-teal-300'}`}>
        <h2 className="font-serif text-xl text-teal-400 mb-2 flex items-center gap-2">
          <DollarSign size={20} /> Offer Strategy
        </h2>
        <div className="flex flex-wrap gap-4 mb-3">
          <div>
            <div className={`text-xs font-medium ${muted}`}>Offer Range</div>
            <div className="text-lg font-bold text-teal-400">{formatPrice(p.offerRange[0])} – {formatPrice(p.offerRange[1])}</div>
          </div>
          <div>
            <div className={`text-xs font-medium ${muted}`}>Days on Market</div>
            <div className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.daysOnMarket}</div>
          </div>
        </div>
        <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{p.strategy}</p>
      </div>

      {/* Equity Analysis */}
      {p.equityAnalysis && (
        <Section title="Equity Analysis" icon={TrendingDown} darkMode={darkMode}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            <StatBox label="Purchase Price" value={formatPrice(p.equityAnalysis.purchasePrice)} darkMode={darkMode} />
            {p.equityAnalysis.renoCost > 0 && <StatBox label="Renovation" value={formatPrice(p.equityAnalysis.renoCost)} darkMode={darkMode} />}
            <StatBox label="Total Investment" value={formatPrice(p.equityAnalysis.totalInvestment)} darkMode={darkMode} />
            <StatBox label="After-Reno Value" value={formatPrice(p.equityAnalysis.afterRenoValue)} darkMode={darkMode} />
          </div>
          <div className={`rounded-lg p-4 border ${p.equityAnalysis.equityPercent >= 15 ? (darkMode ? 'bg-emerald-500/5 border-win-500/30' : 'bg-emerald-50 border-emerald-200') : (darkMode ? 'bg-navy-900 border-navy-700' : 'bg-gray-50 border-gray-200')}`}>
            <div className="flex items-baseline gap-3 mb-1">
              <span className={`text-2xl font-bold ${p.equityAnalysis.equityPercent >= 15 ? 'text-win-400' : darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {formatPrice(p.equityAnalysis.instantEquity)}
              </span>
              <span className={`text-sm font-semibold ${p.equityAnalysis.equityPercent >= 15 ? 'text-win-400' : sub}`}>
                ({p.equityAnalysis.equityPercent}% instant equity)
              </span>
            </div>
            <p className={`text-xs ${muted}`}>{p.equityAnalysis.note}</p>
          </div>
        </Section>
      )}

      {/* Monthly Breakdown */}
      {p.monthlyBreakdown && (
        <Section title="Monthly Cost Estimate" icon={DollarSign} darkMode={darkMode}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            <StatBox label="Mortgage" value={formatPrice(p.monthlyBreakdown.mortgage)} sub="/month" darkMode={darkMode} />
            <StatBox label="Property Tax" value={formatPrice(p.monthlyBreakdown.taxes)} sub="/month" darkMode={darkMode} />
            <StatBox label="Insurance" value={formatPrice(p.monthlyBreakdown.insurance)} sub="/month" darkMode={darkMode} />
            <div className={`rounded-lg p-3 border-2 ${darkMode ? 'bg-teal-500/5 border-teal-500/30' : 'bg-teal-50 border-teal-200'}`}>
              <div className={`text-xs font-medium ${muted}`}>Total Monthly</div>
              <div className="text-lg font-bold text-teal-400 mt-0.5">{formatPrice(p.monthlyBreakdown.total)}</div>
              <div className={`text-xs ${muted}`}>/month</div>
            </div>
          </div>
          <p className={`text-xs ${muted}`}>{p.monthlyBreakdown.note}</p>
        </Section>
      )}

      {/* Flip Profit Analysis (for flips only) */}
      {p.flipProfitAnalysis && (
        <Section title="Flip Profit Breakdown" icon={AlertTriangle} darkMode={darkMode}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
            <StatBox label="Flipper Paid" value={formatPrice(p.flipProfitAnalysis.purchasePrice)} darkMode={darkMode} />
            <StatBox label="Est. Reno Spend" value={formatPrice(p.flipProfitAnalysis.renoEstimate)} darkMode={darkMode} />
            <StatBox label="Flipper's All-In" value={formatPrice(p.flipProfitAnalysis.totalFlipperCost)} darkMode={darkMode} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div className={`rounded-lg p-3 ${darkMode ? 'bg-coral-500/5 border border-coral-500/20' : 'bg-red-50 border border-red-200'}`}>
              <div className={`text-xs font-medium ${muted}`}>At Asking ({formatPrice(p.flipProfitAnalysis.askingPrice)})</div>
              <div className="text-lg font-bold text-coral-400">{formatPrice(p.flipProfitAnalysis.flipperProfit)} profit</div>
            </div>
            <div className={`rounded-lg p-3 ${darkMode ? 'bg-teal-500/5 border border-teal-500/20' : 'bg-teal-50 border border-teal-200'}`}>
              <div className={`text-xs font-medium ${muted}`}>At Your Offer ({formatPrice(p.flipProfitAnalysis.atYourOffer)})</div>
              <div className={`text-lg font-bold ${p.flipProfitAnalysis.flipperProfitAtOffer <= 0 ? 'text-coral-400' : 'text-teal-400'}`}>
                {formatPrice(Math.abs(p.flipProfitAnalysis.flipperProfitAtOffer))} {p.flipProfitAnalysis.flipperProfitAtOffer <= 0 ? 'loss' : 'profit'}
              </div>
            </div>
          </div>
          <p className={`text-xs ${muted}`}>{p.flipProfitAnalysis.note}</p>
        </Section>
      )}

      {/* Recommendation */}
      {p.recommendation && (
        <div className={`rounded-xl border-2 p-5 ${darkMode ? 'bg-emerald-500/5 border-win-500/30' : 'bg-emerald-50 border-emerald-200'}`}>
          <h2 className="font-serif text-xl text-win-400 mb-2 flex items-center gap-2">
            <CheckCircle2 size={20} /> Bottom Line
          </h2>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{p.recommendation}</p>
        </div>
      )}

      {/* 4. Key Stats */}
      <Section title="Key Stats" icon={Building} darkMode={darkMode}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <StatBox label="Beds" value={p.beds} darkMode={darkMode} />
          <StatBox label="Baths" value={p.baths} darkMode={darkMode} />
          <StatBox label="Sqft" value={p.sqft.toLocaleString()} darkMode={darkMode} />
          <StatBox label="Lot" value={p.lotSqft.toLocaleString() + ' sqft'} darkMode={darkMode} />
          <StatBox label="Year Built" value={p.yearBuilt} darkMode={darkMode} />
          <StatBox label="$/Sqft" value={'$' + p.pricePerSqft} darkMode={darkMode} />
          <StatBox label="Garage" value={p.garage || 'None'} darkMode={darkMode} />
          <StatBox label="Roof" value={p.roofType} darkMode={darkMode} />
          <StatBox label="A/C" value={p.acAge} darkMode={darkMode} />
          <StatBox label="Solar" value={p.solarPanels ? 'Yes' : 'No'} sub={p.solarNote} darkMode={darkMode} />
          <StatBox label="Impact Windows" value={p.impactWindows ? 'Yes' : 'No'} sub={p.impactWindowsNote} darkMode={darkMode} />
          <StatBox label="MLS#" value={p.mlsNumber} darkMode={darkMode} />
        </div>
      </Section>

      {/* 5. Price History */}
      <Section title="Price History" icon={TrendingDown} darkMode={darkMode}>
        <div className="relative">
          {p.priceHistory.map((h, i) => (
            <div key={i} className="flex items-start gap-4 mb-4 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${i === p.priceHistory.length - 1 ? 'bg-teal-400' : darkMode ? 'bg-navy-600' : 'bg-gray-300'}`} />
                {i < p.priceHistory.length - 1 && <div className={`w-0.5 h-8 ${darkMode ? 'bg-navy-600' : 'bg-gray-200'}`} />}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <span className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{formatPrice(h.price)}</span>
                  <span className={`text-xs ${muted}`}>{h.date}</span>
                </div>
                <span className={`text-xs ${sub}`}>{h.event}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Flip Analysis */}
      {p.isFlip && (
        <Section title="Flip Analysis" icon={AlertTriangle} darkMode={darkMode}>
          <div className={`rounded-lg p-4 border ${darkMode ? 'bg-coral-500/5 border-coral-500/20' : 'bg-red-50 border-red-200'}`}>
            <div className="flex flex-wrap gap-6 mb-3">
              <div>
                <div className={`text-xs font-medium ${muted}`}>Purchase Price</div>
                <div className="text-lg font-bold text-coral-400">{formatPrice(p.lastSalePrice)}</div>
              </div>
              <div>
                <div className={`text-xs font-medium ${muted}`}>Asking Price</div>
                <div className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{formatPrice(p.askingPrice)}</div>
              </div>
              <div>
                <div className={`text-xs font-medium ${muted}`}>Markup</div>
                <div className="text-lg font-bold text-coral-400">
                  {Math.round(((p.askingPrice - p.lastSalePrice) / p.lastSalePrice) * 100)}%
                </div>
              </div>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{p.flipNote}</p>
          </div>
        </Section>
      )}

      {/* Non-flip note */}
      {!p.isFlip && p.flipNote && (
        <Section title="Ownership History" icon={Building} darkMode={darkMode}>
          <p className={`text-sm ${sub}`}>{p.flipNote}</p>
        </Section>
      )}

      {/* 7. Comps */}
      <Section title="Comparable Sales" icon={DollarSign} darkMode={darkMode}>
        <div className="overflow-x-auto -mx-5 px-5">
          <table className="w-full text-sm">
            <thead>
              <tr className={`text-xs ${muted}`}>
                <th className="text-left pb-2 font-medium">Address</th>
                <th className="text-right pb-2 font-medium">Price</th>
                <th className="text-right pb-2 font-medium">Sqft</th>
                <th className="text-right pb-2 font-medium">$/Sqft</th>
                <th className="text-right pb-2 font-medium">Date</th>
                <th className="text-left pb-2 pl-3 font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              {p.comps.map((c, i) => (
                <tr key={i} className={`border-t ${darkMode ? 'border-navy-700' : 'border-gray-100'}`}>
                  <td className={`py-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{c.address}</td>
                  <td className="py-2 text-right text-teal-400 font-semibold">{formatPrice(c.price)}</td>
                  <td className={`py-2 text-right ${sub}`}>{c.sqft.toLocaleString()}</td>
                  <td className={`py-2 text-right ${sub}`}>${c.ppsf}</td>
                  <td className={`py-2 text-right ${muted}`}>{c.date}</td>
                  <td className={`py-2 pl-3 ${muted}`}>{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 8. Renovation */}
      {p.needsRenovation && p.renoItems.length > 0 && (
        <Section title="Renovation Plan" icon={Hammer} darkMode={darkMode}>
          <div className="flex flex-wrap gap-4 mb-4">
            <div>
              <div className={`text-xs font-medium ${muted}`}>Estimated Cost</div>
              <div className="text-lg font-bold text-coral-400">
                {formatPrice(p.estimatedRenoCost[0])} – {formatPrice(p.estimatedRenoCost[1])}
              </div>
            </div>
            {p.afterRenoValue && (
              <div>
                <div className={`text-xs font-medium ${muted}`}>After-Reno Value</div>
                <div className="text-lg font-bold text-win-400">
                  {formatPrice(p.afterRenoValue[0])} – {formatPrice(p.afterRenoValue[1])}
                </div>
              </div>
            )}
          </div>
          {p.afterRenoValueNote && <p className={`text-xs mb-4 ${muted}`}>{p.afterRenoValueNote}</p>}

          <div className="space-y-2">
            {p.renoItems.map((r, i) => (
              <div key={i} className={`flex items-center justify-between rounded-lg p-3 ${darkMode ? 'bg-navy-900' : 'bg-gray-50'}`}>
                <div className="flex items-center gap-3">
                  <PriorityBadge priority={r.priority} darkMode={darkMode} />
                  <span className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{r.item}</span>
                </div>
                <span className={`text-sm font-medium ${sub}`}>{r.cost}</span>
              </div>
            ))}
          </div>

          {/* Renovation concept renders */}
          {p.renoConcepts?.length > 0 && (
            <div className="mt-6">
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Hammer size={14} className="text-teal-400" /> Renovation Concepts
              </h3>
              <PhotoGallery photos={p.renoConcepts} />
            </div>
          )}
        </Section>
      )}

      {/* Already renovated note */}
      {!p.needsRenovation && p.afterRenoValueNote && (
        <Section title="Renovation Status" icon={Hammer} darkMode={darkMode}>
          <p className={`text-sm ${sub}`}>{p.afterRenoValueNote}</p>
        </Section>
      )}

      {/* 9. Outdoor Space + Site Plan */}
      <Section title="Outdoor Space" icon={TreePine} darkMode={darkMode}>
        <p className={`text-sm mb-4 ${sub}`}>{p.backyardNotes}</p>

        {/* Interactive site plan */}
        {p.hasSitePlan && sitePlanComponents[p.id] && (() => {
          const SitePlan = sitePlanComponents[p.id];
          return (
            <div className="mb-6">
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <MapPin size={14} className="text-teal-400" /> Interactive Site Plan
              </h3>
              <SitePlan />
            </div>
          );
        })()}

        {/* Pool concept renders */}
        {p.poolConcepts?.length > 0 && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <Waves size={14} className="text-teal-400" /> Pool Concept Renders
            </h3>
            <PhotoGallery photos={p.poolConcepts} />
          </div>
        )}

        {p.poolOptions.length > 0 && (
          <>
            <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pool Options Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {p.poolOptions.map((opt, i) => (
                <div key={i} className={`rounded-lg p-4 border ${darkMode ? 'bg-navy-900 border-navy-700' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{opt.name}</div>
                  <div className={`text-xs ${sub}`}>{opt.poolSize} · {opt.cost}</div>
                  <div className={`text-xs mt-1 ${muted}`}>{opt.note}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </Section>

      {/* 10. Financials */}
      <Section title="Financials" icon={DollarSign} darkMode={darkMode}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {p.taxAssessed && <StatBox label="Tax Assessed" value={formatPrice(p.taxAssessed)} darkMode={darkMode} />}
          {p.annualTaxes && <StatBox label="Annual Taxes" value={formatPrice(p.annualTaxes)} darkMode={darkMode} />}
          <StatBox label="Insurance Est." value={p.estimatedInsurance} darkMode={darkMode} />
          <StatBox label="HOA" value={p.hoa ? formatPrice(p.hoa) + '/mo' : 'None'} darkMode={darkMode} />
        </div>

        <div className={`rounded-lg p-3 mb-3 ${darkMode ? 'bg-navy-900' : 'bg-gray-50'}`}>
          <div className={`text-xs font-medium ${muted}`}>Flood Zone</div>
          <div className={`text-sm mt-0.5 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.floodZone}</div>
          {p.floodRiskNote && <div className={`text-xs mt-1 ${p.floodRiskNote.includes('High') || p.floodRiskNote.includes('85%') ? 'text-coral-400' : 'text-win-400'}`}>{p.floodRiskNote}</div>}
        </div>

        {p.financingNote && (
          <p className={`text-sm ${sub}`}>{p.financingNote}</p>
        )}
      </Section>

      {/* 11. Location */}
      <Section title="Location" icon={MapPin} darkMode={darkMode}>
        <div className="flex flex-wrap gap-3 mb-4">
          {p.walkScore && (
            <div className={`flex items-center gap-2 rounded-lg px-4 py-2 ${darkMode ? 'bg-navy-900' : 'bg-gray-50'}`}>
              <Footprints size={16} className="text-teal-400" />
              <div>
                <div className={`text-xs ${muted}`}>Walk</div>
                <div className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.walkScore}</div>
              </div>
            </div>
          )}
          {p.bikeScore && (
            <div className={`flex items-center gap-2 rounded-lg px-4 py-2 ${darkMode ? 'bg-navy-900' : 'bg-gray-50'}`}>
              <Bike size={16} className="text-teal-400" />
              <div>
                <div className={`text-xs ${muted}`}>Bike</div>
                <div className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.bikeScore}</div>
              </div>
            </div>
          )}
          {p.transitScore && (
            <div className={`flex items-center gap-2 rounded-lg px-4 py-2 ${darkMode ? 'bg-navy-900' : 'bg-gray-50'}`}>
              <Bus size={16} className="text-teal-400" />
              <div>
                <div className={`text-xs ${muted}`}>Transit</div>
                <div className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.transitScore}</div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {p.nearbyHighlights.map(h => (
            <span key={h} className={`px-3 py-1.5 rounded-full text-xs ${darkMode ? 'bg-navy-900 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              {h}
            </span>
          ))}
        </div>
      </Section>

      {/* 12. Pros/Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Pros" icon={CheckCircle2} darkMode={darkMode}>
          <ul className="space-y-2">
            {p.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={16} className="text-win-400 mt-0.5 shrink-0" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{pro}</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Cons" icon={XCircle} darkMode={darkMode}>
          <ul className="space-y-2">
            {p.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <XCircle size={16} className="text-coral-400 mt-0.5 shrink-0" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{con}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* 13. Agent */}
      <Section title="Listing Agent" icon={Phone} darkMode={darkMode}>
        <div className="flex flex-wrap gap-4">
          <div className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{p.agent.name}</div>
          {p.agent.phone && (
            <a href={`tel:${p.agent.phone}`} className="flex items-center gap-1 text-sm text-teal-400 hover:underline">
              <Phone size={14} /> {p.agent.phone}
            </a>
          )}
          {p.agent.email && (
            <a href={`mailto:${p.agent.email}`} className="flex items-center gap-1 text-sm text-teal-400 hover:underline">
              <Mail size={14} /> {p.agent.email}
            </a>
          )}
        </div>
      </Section>
    </div>
  );
}
