import { MapPin, Clock, Phone, Layers } from 'lucide-react'

const INFO = [
  { Icon: MapPin, label: 'Location', value: '3rd Floor, World Trade Park,\nJLN Marg, Malviya Nagar,\nJaipur, Rajasthan 302017' },
  { Icon: Clock,  label: 'Hours',    value: 'Open Daily  11:00 AM – 10:00 PM\nAll days including weekends' },
  { Icon: Phone,  label: 'Phone',    value: '098290 68540' },
  { Icon: Layers, label: 'Floors',   value: 'Ground · 1st · 2nd · 3rd Floor' },
]

export default function Location() {
  return (
    <section className="py-20 px-6" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div className="grid gap-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

        {/* Info column */}
        <div>
          <p className="text-xs tracking-widest mb-4" style={{ color: '#a08840', letterSpacing: '0.3em' }}>
            VISIT US
          </p>
          <h2 className="mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px,4vw,40px)', color: '#f5d78e', fontWeight: 400, letterSpacing: '0.08em' }}>
            Find Your Way Here
          </h2>

          <div className="space-y-6">
            {INFO.map(({ Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <Icon size={16} style={{ color: '#c9a84c' }} />
                </div>
                <div>
                  <div className="text-xs tracking-widest mb-1.5"
                    style={{ color: '#5a4a28', letterSpacing: '0.18em' }}>
                    {label.toUpperCase()}
                  </div>
                  <div className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: '#c0b080', lineHeight: '1.7' }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="https://maps.google.com/?q=Dubai+Bazaar+World+Trade+Park+Jaipur" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 text-xs font-bold tracking-widest rounded-sm transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #f5d78e)', color: '#0a0a0a', letterSpacing: '0.14em', cursor: 'pointer', border: 'none' }}>
                GET DIRECTIONS
              </button>
            </a>
            <a href="tel:09829068540">
              <button className="px-6 py-3 text-xs font-semibold tracking-widest rounded-sm transition-colors hover:bg-white/5"
                style={{ color: '#c9a84c', border: '1px solid #c9a84c', background: 'none', letterSpacing: '0.14em', cursor: 'pointer' }}>
                CALL NOW
              </button>
            </a>
          </div>
        </div>

        {/* Map embed */}
        <div className="rounded-sm overflow-hidden" style={{ border: '1px solid #2a2010', minHeight: 360 }}>
          <iframe
            title="Dubai Bazaar – World Trade Park Jaipur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1!2d75.8189!3d26.8717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a0e4b7f9b7%3A0x9bc3e9f8c3a6e0e0!2sWorld%20Trade%20Park%20Jaipur!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: 360 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}
