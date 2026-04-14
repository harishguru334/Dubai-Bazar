import { useEffect, useState } from 'react'

const STATS = [
  { value: '4.3★', label: 'Google Rating' },
  { value: '3,078+', label: 'Reviews' },
  { value: '300+', label: 'Shops' },
  { value: '3', label: 'Floors' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '90vh' }}>

      {/* Layered dark background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, #1a0e00 0%, #0a0a0a 60%), radial-gradient(ellipse at 80% 20%, #0d0800 0%, transparent 50%)' }} />

      {/* Diagonal grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px)' }} />

      {/* Decorative arches */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: 600, height: 300, borderBottom: '1px solid rgba(201,168,76,0.18)', borderLeft: '1px solid rgba(201,168,76,0.18)', borderRight: '1px solid rgba(201,168,76,0.18)', borderRadius: '0 0 300px 300px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: 440, height: 220, borderBottom: '1px solid rgba(201,168,76,0.1)', borderLeft: '1px solid rgba(201,168,76,0.1)', borderRight: '1px solid rgba(201,168,76,0.1)', borderRadius: '0 0 220px 220px' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}>

        <p className="text-xs tracking-widest mb-5" style={{ color: '#a08840', letterSpacing: '0.35em' }}>
          ⬥ JAIPUR'S MOST LUXURIOUS SHOPPING DESTINATION ⬥
        </p>

        <h1 className="font-bold leading-none mb-2"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(52px, 9vw, 100px)', letterSpacing: '0.12em', color: '#f5d78e', textShadow: '0 0 80px rgba(201,168,76,0.25)' }}>
          DUBAI
        </h1>
        <h1 className="font-bold leading-none mb-8"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(52px, 9vw, 100px)', letterSpacing: '0.16em', color: '#ffffff' }}>
          BAZAAR
        </h1>

        <p className="mb-10 mx-auto text-base leading-relaxed"
          style={{ color: '#8a7a58', maxWidth: 540, lineHeight: '1.85' }}>
          Experience the grandeur of Dubai's iconic marketplace — right here in Jaipur.
          Luxury brands, fine jewelry, exotic perfumes &amp; world cuisine under one magnificent roof.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <button className="px-9 py-3.5 text-xs font-bold tracking-widest rounded-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #f5d78e)', color: '#0a0a0a', letterSpacing: '0.14em' }}>
            EXPLORE SHOPS
          </button>
          <button className="px-9 py-3.5 text-xs font-semibold tracking-widest rounded-sm transition-colors hover:bg-white/5"
            style={{ color: '#f5d78e', border: '1px solid #c9a84c', background: 'none', letterSpacing: '0.14em', cursor: 'pointer' }}>
            VIEW OFFERS
          </button>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#f5d78e', fontFamily: 'Cormorant Garamond, serif' }}>{value}</div>
              <div className="text-xs mt-1 tracking-widest uppercase" style={{ color: '#5a4a28', letterSpacing: '0.18em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
    </section>
  )
}
