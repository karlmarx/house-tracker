import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const { darkMode } = useApp();

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif text-3xl font-bold text-teal-400">Properties</h1>
        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          {properties.length} properties · South Florida
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map(p => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}
