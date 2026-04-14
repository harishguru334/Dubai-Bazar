const REVIEWS = [
  { name: 'Akash K.',    role: 'Local Guide · 47 reviews', text: 'Dubai Bazar WTP Jaipur feels like a mini Dubai! The shops, lighting, perfumes and fashion items — everything is so classy and stylish.', stars: 5, ago: '6 months ago' },
  { name: 'Vikash Kumar', role: 'Local Guide · 51 reviews', text: 'Great experience here. Perfect place for shopping, outing, and capturing special moments with kids, friends or family.', stars: 5, ago: '6 months ago' },
  { name: 'Vivek D.',    role: 'Local Guide · 131 reviews', text: 'Ultimate structure and branded shops at one place. Truly a world-class experience right in the heart of Jaipur.', stars: 5, ago: '5 months ago' },
]

function Stars({ count }) {
  return (
    <span style={{ color: '#e6a817', letterSpacing: '0.05em', fontSize: 14 }}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className="py-16 px-6"
      style={{ background: '#0d0d0d', borderTop: '1px solid #1a1505' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div className="text-center mb-12">
          <p className="text-xs tracking-widest mb-3" style={{ color: '#a08840', letterSpacing: '0.3em' }}>
            WHAT PEOPLE SAY
          </p>
          <h2 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px,4vw,44px)', color: '#f5d78e', fontWeight: 400, letterSpacing: '0.08em' }}>
            Visitor Reviews
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span style={{ color: '#e6a817', fontSize: 28 }}>★</span>
            <span className="text-3xl font-bold" style={{ color: '#f5d78e', fontFamily: 'Cormorant Garamond, serif' }}>4.3</span>
            <span className="text-sm" style={{ color: '#6a5a38' }}>based on 3,078 Google reviews</span>
          </div>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {REVIEWS.map(r => (
            <div key={r.name} className="p-7 rounded-sm"
              style={{ background: '#121212', border: '1px solid #2a2010' }}>

              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: '#1e1500', color: '#c9a84c' }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#f0ead6' }}>{r.name}</div>
                    <div className="text-xs" style={{ color: '#5a4a28' }}>{r.role}</div>
                  </div>
                </div>
                <Stars count={r.stars} />
              </div>

              <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#8a7a58', lineHeight: '1.8' }}>
                "{r.text}"
              </p>

              <div className="text-xs" style={{ color: '#3a3020' }}>{r.ago}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
