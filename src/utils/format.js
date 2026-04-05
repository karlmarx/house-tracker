export function formatPrice(n) {
  if (n == null) return '—';
  return '$' + n.toLocaleString('en-US');
}

export function formatPriceShort(n) {
  if (n == null) return '—';
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return '$' + Math.round(n / 1000) + 'K';
  return '$' + n;
}

export function verdictColor(verdict) {
  switch (verdict) {
    case 'strong-buy': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    case 'consider': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'watch': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    case 'pass': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
}

export function verdictColorLight(verdict) {
  switch (verdict) {
    case 'strong-buy': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'consider': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'watch': return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'pass': return 'bg-red-100 text-red-700 border-red-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
}

export function verdictLabel(verdict) {
  switch (verdict) {
    case 'strong-buy': return 'Strong Buy';
    case 'consider': return 'Consider';
    case 'watch': return 'Watch';
    case 'pass': return 'Pass';
    default: return verdict;
  }
}
