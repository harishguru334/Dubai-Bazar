const ITEMS = ['FASHION', 'JEWELRY', 'ELECTRONICS', 'PERFUMES', 'FOOD COURT',
  'LIFESTYLE', 'ACCESSORIES', 'FOOTWEAR', 'COSMETICS', 'GIFTS & MORE']

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS]

  return (
    <div className="overflow-hidden py-2.5" style={{ background: '#c9a84c' }}>
      <div className="flex gap-12 whitespace-nowrap animate-marquee"
        style={{ width: 'max-content' }}>
        {repeated.map((item, i) => (
          <span key={i} className="text-xs font-bold tracking-widest"
            style={{ color: '#0a0a0a', letterSpacing: '0.2em' }}>
            ⬥ {item}
          </span>
        ))}
      </div>
    </div>
  )
}
