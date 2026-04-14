import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Categories from './components/Categories'
import Offers from './components/Offers'
import FeaturedShops from './components/FeaturedShops'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('Home')

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Marquee />
      <Categories />
      <Offers />
      <FeaturedShops />
      <Reviews />
      <Location />
      <Footer />
    </div>
  )
}
