const NAV_LINKS = ['Home', 'Shops', 'Offers', 'Food Court', 'Gallery', 'Contact']

export default function Footer() {
  return (
    <footer style={{ background: '#060606', borderTop: '1px solid #1a1505' }}>
      <div className="px-6 pt-14 pb-8" style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div className="grid gap-10 mb-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

          {/* Brand */}
          <div>
            <div className="text-xl font-bold tracking-widest mb-3"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f5d78e', letterSpacing: '0.2em' }}>
              DUBAI BAZAAR
            </div>
            <div className="text-xs tracking-widest mb-4" style={{ color: '#a08840', letterSpacing: '0.25em' }}>
              WORLD TRADE PARK · JAIPUR
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#4a3a20', lineHeight: '1.8' }}>
              Jaipur's premier luxury shopping experience, inspired by the grandeur of Dubai's world-famous marketplaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs tracking-widest mb-5" style={{ color: '#5a4a28', letterSpacing: '0.25em' }}>
              QUICK LINKS
            </div>
            {NAV_LINKS.map(link => (
              <div key={link} className="text-sm mb-3 cursor-pointer transition-colors hover:text-yellow-200"
                style={{ color: '#4a3a20', letterSpacing: '0.06em' }}>
                {link}
              </div>
            ))}
          </div>

          {/* Hours */}
          <div>
            <div className="text-xs tracking-widest mb-5" style={{ color: '#5a4a28', letterSpacing: '0.25em' }}>
              OPENING HOURS
            </div>
            <div className="text-sm leading-loose" style={{ color: '#4a3a20', lineHeight: '2' }}>
              Monday – Sunday<br />
              11:00 AM – 10:00 PM<br />
              All days open
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-widest mb-5" style={{ color: '#5a4a28', letterSpacing: '0.25em' }}>
              GET IN TOUCH
            </div>
            <div className="text-sm leading-loose" style={{ color: '#4a3a20', lineHeight: '2.2' }}>
              <a href="tel:09829068540" className="hover:text-yellow-200 transition-colors" style={{ color: '#4a3a20', textDecoration: 'none' }}>
                📞 098290 68540
              </a><br />
              <a href="https://maps.google.com/?q=Dubai+Bazaar+WTP+Jaipur" target="_blank" rel="noopener" className="hover:text-yellow-200 transition-colors" style={{ color: '#4a3a20', textDecoration: 'none' }}>
                📍 Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, #2a2010, transparent)' }} />

        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="text-xs" style={{ color: '#2a2010' }}>
            © 2025 Dubai Bazaar, World Trade Park, Jaipur. All rights reserved.
          </div>
          <div className="text-xs" style={{ color: '#2a2010' }}>
            Designed with luxury in mind ✦
          </div>
        </div>
      </div>
    </footer>
  )
}
