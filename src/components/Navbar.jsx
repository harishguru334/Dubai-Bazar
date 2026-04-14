import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = ['Home', 'Shops', 'Offers', 'Food Court', 'Gallery', 'Contact']

export default function Navbar({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-500"
      style={{ backgroundColor: 'rgba(10,10,10,0.97)', borderBottom: '1px solid #2a2010' }}>

      {/* Gold top stripe */}
      <div className="h-0.5 w-full"
        style={{ background: 'linear-gradient(90deg, #c9a84c, #f5d78e, #c9a84c, #8b6914, #c9a84c)' }} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #f5d78e)', color: '#0a0a0a' }}>
            DB
          </div>
          <div>
            <div className="text-lg font-bold tracking-widest" style={{ color: '#f5d78e', fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.2em' }}>
              DUBAI BAZAAR
            </div>
            <div className="text-xs tracking-widest" style={{ color: '#a08840', letterSpacing: '0.3em' }}>
              WORLD TRADE PARK · JAIPUR
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => setActiveSection(link)}
              className="text-xs tracking-widest transition-colors duration-200 pb-0.5 border-b"
              style={{
                color: activeSection === link ? '#f5d78e' : '#6a5a38',
                borderColor: activeSection === link ? '#c9a84c' : 'transparent',
                fontWeight: activeSection === link ? 600 : 400,
                background: 'none',
                border: 'none',
                borderBottom: activeSection === link ? '1.5px solid #c9a84c' : '1.5px solid transparent',
                cursor: 'pointer',
                letterSpacing: '0.12em',
              }}
            >
              {link.toUpperCase()}
            </button>
          ))}
          <a href="tel:09829068540">
            <button className="flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest rounded-sm transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #f5d78e)', color: '#0a0a0a', letterSpacing: '0.12em' }}>
              <Phone size={12} />
              VISIT NOW
            </button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#f5d78e', background: 'none', border: 'none', cursor: 'pointer' }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t py-4 px-6 space-y-4"
          style={{ borderColor: '#2a2010', backgroundColor: '#0d0d0d' }}>
          {NAV_LINKS.map(link => (
            <button key={link}
              onClick={() => { setActiveSection(link); setMenuOpen(false) }}
              className="block w-full text-left text-sm tracking-widest py-2"
              style={{ color: '#c0b080', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em' }}>
              {link.toUpperCase()}
            </button>
          ))}
          <a href="tel:09829068540" className="block">
            <button className="w-full py-2.5 text-sm font-bold tracking-widest rounded-sm"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #f5d78e)', color: '#0a0a0a', letterSpacing: '0.12em' }}>
              CALL US NOW
            </button>
          </a>
        </div>
      )}
    </nav>
  )
}
