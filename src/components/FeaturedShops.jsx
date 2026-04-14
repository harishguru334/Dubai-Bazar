import { useState } from 'react'
import { MapPin, Star } from 'lucide-react'

const SHOPS = [
  { name: 'Arabian Perfumes', tag: 'Bestseller', desc: 'Exclusive oud & attar collections imported directly from Dubai and the Middle East.', floor: 'Ground Floor', rating: 4.8, tagColor: '#c9a84c' },
  { name: 'Gold Souk',        tag: 'Premium',    desc: '22K & 24K gold jewelry with traditional Rajasthani & modern designer styles.', floor: '1st Floor',    rating: 4.7, tagColor: '#e6a817' },
  { name: 'Trends Fashion',   tag: 'New Arrival',desc: 'Latest international fashion brands, designer wear and seasonal collections.', floor: '2nd Floor',    rating: 4.6, tagColor: '#6c3483' },
  { name: 'Tech Zone',        tag: 'Hot Deals',  desc: 'Smartphones, laptops, gadgets & accessories at the most competitive prices.', floor: 'Ground Floor', rating: 4.5, tagColor: '#c0392b' },
]

function ShopCard({ shop }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="p-7 rounded-sm cursor-pointer transition-all duration-300"
      style={{
        background: '#121212',
        border: `1px solid ${hovered ? '#c9a84c' : '#2a2010'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold tracking-widest px-2.5 py-1 rounded-sm"
          style={{ background: `${shop.tagColor}20`, color: shop.tagColor, letterSpacing: '0.1em' }}>
          {shop.tag.toUpperCase()}
        </span>
        <div className="flex items-center gap-1">
          <Star size={12} fill="#e6a817" stroke="none" />
          <span className="text-sm font-bold" style={{ color: '#e6a817' }}>{shop.rating}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-3"
        style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f5d78e', letterSpacing: '0.05em' }}>
        {shop.name}
      </h3>

      <p className="text-sm leading-relaxed mb-5" style={{ color: '#7a6a48', lineHeight: '1.75' }}>
        {shop.desc}
      </p>

      <div className="flex items-center gap-2 pt-3 text-xs"
        style={{ borderTop: '1px solid #1e1a10', color: '#5a4a28', letterSpacing: '0.05em' }}>
        <MapPin size={12} />
        {shop.floor}
      </div>
    </div>
  )
}

export default function FeaturedShops() {
  return (
    <section className="py-20 px-6" style={{ maxWidth: 1200, margin: '0 auto' }}>

      <div className="text-center mb-14">
        <p className="text-xs tracking-widest mb-3" style={{ color: '#a08840', letterSpacing: '0.3em' }}>
          FEATURED
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px,4vw,44px)', color: '#f5d78e', fontWeight: 400, letterSpacing: '0.08em' }}>
          Spotlight Stores
        </h2>
      </div>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {SHOPS.map(shop => <ShopCard key={shop.name} shop={shop} />)}
      </div>
    </section>
  )
}
