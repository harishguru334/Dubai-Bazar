const OFFERS = [
  { pct: '30%',      label: 'OFF on Fashion',     sub: 'Selected brands',    accent: '#c0392b' },
  { pct: '20%',      label: 'OFF on Electronics', sub: 'Weekend only',       accent: '#1a6fa8' },
  { pct: '15%',      label: 'OFF on Perfumes',    sub: 'Min purchase ₹500',  accent: '#6c3483' },
  { pct: 'FLAT ₹500',label: 'OFF on Jewelry',     sub: 'On ₹5000+',          accent: '#b7770d' },
]

export default function Offers() {
  return (
    <section className="py-16 px-6"
      style={{ background: '#0d0d0d', borderTop: '1px solid #1a1505', borderBottom: '1px solid #1a1505' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div className="text-center mb-12">
          <p className="text-xs tracking-widest mb-3" style={{ color: '#a08840', letterSpacing: '0.3em' }}>
            EXCLUSIVE DEALS
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px,4vw,44px)', color: '#f5d78e', fontWeight: 400, letterSpacing: '0.08em' }}>
            Today's Offers
          </h2>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {OFFERS.map(offer => (
            <div key={offer.label}
              className="p-7 rounded-sm cursor-pointer transition-transform hover:-translate-y-1 duration-300"
              style={{
                background: '#121212',
                border: `1px solid ${offer.accent}33`,
                borderLeft: `3px solid ${offer.accent}`,
              }}>
              <div className="font-bold leading-none mb-3"
                style={{ color: offer.accent, fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 42px)' }}>
                {offer.pct}
              </div>
              <div className="text-sm font-bold tracking-wider mb-1"
                style={{ color: '#f0ead6', letterSpacing: '0.08em' }}>
                {offer.label.toUpperCase()}
              </div>
              <div className="text-xs" style={{ color: '#6a5a38' }}>
                {offer.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
