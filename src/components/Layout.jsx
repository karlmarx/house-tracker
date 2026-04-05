import { Link, Outlet } from 'react-router-dom';
import { Moon, Sun, GitCompareArrows, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Layout() {
  const { compareIds, darkMode, setDarkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-navy-950 text-gray-200' : 'bg-gray-50 text-gray-900'}`}>
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b ${darkMode ? 'bg-navy-900/80 border-navy-700' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
            <Home size={20} />
            <span className="font-serif text-xl">House Tracker</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/compare"
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                compareIds.length > 0
                  ? 'bg-teal-500/20 text-teal-400 hover:bg-teal-500/30'
                  : darkMode
                    ? 'text-gray-500 hover:text-gray-400'
                    : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              <GitCompareArrows size={16} />
              <span className="hidden sm:inline">Compare</span>
              {compareIds.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-teal-500 text-navy-950 text-xs font-bold flex items-center justify-center">
                  {compareIds.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-navy-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className={`border-t py-4 text-center text-xs ${darkMode ? 'border-navy-700 text-gray-600' : 'border-gray-200 text-gray-400'}`}>
        South Florida House Hunting Dashboard
      </footer>
    </div>
  );
}
