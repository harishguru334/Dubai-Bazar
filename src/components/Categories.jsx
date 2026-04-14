const CATEGORIES = [
  { icon: '👗', label: 'Fashion',     count: '120+ Stores' },
  { icon: '💍', label: 'Jewelry',     count: '40+ Stores' },
  { icon: '📱', label: 'Electronics', count: '35+ Stores' },
  { icon: '🌹', label: 'Perfumes',    count: '25+ Stores' },
  { icon: '👠', label: 'Footwear',    count: '30+ Stores' },
  { icon: '🍽️', label: 'Food Court',  count: '50+ Outlets' },
]

export default function Categories() {
  return (
    <section className="py-20 px-6" style={{ maxWidth: 1200, margin: '0 auto' }}>

      <div className="text-center mb-14">
        <p className="text-xs tracking-widest mb-3" style={{ color: '#a08840', letterSpacing: '0.3em' }}>
          SHOP BY CATEGORY
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px,4vw,44px)', color: '#f5d78e', fontWeight: 400, letterSpacing: '0.08em' }}>
          Everything Under One Roof
        </h2>
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
        {CATEGORIES.map(cat => (
          <div key={cat.label}
            className="group text-center py-8 px-4 rounded-sm cursor-pointer transition-all duration-300"
            style={{ background: '#121212', border: '1px solid #2a2010' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2010'}>
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            <div className="text-sm font-bold tracking-widest mb-1"
              style={{ color: '#f0ead6', letterSpacing: '0.12em' }}>
              {cat.label.toUpperCase()}
            </div>
            <div className="text-xs" style={{ color: '#a08840', letterSpacing: '0.08em' }}>
              {cat.count}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
