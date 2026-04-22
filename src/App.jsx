import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-navy">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Partners />
      <Footer />
    </div>
  )
}