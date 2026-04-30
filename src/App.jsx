import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BespokeDev from './pages/BespokeDev'
import SmallBusiness from './pages/SmallBusiness'
import HireDevelopers from './pages/HireDevelopers'
import CaseStudy from './pages/CaseStudy'
import NewsBlog from './pages/NewsBlog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-600 text-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/bespoke" element={<BespokeDev />} />
          <Route path="/services/smb" element={<SmallBusiness />} />
          <Route path="/services/hire-developers" element={<HireDevelopers />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/news" element={<NewsBlog />} />
          <Route path="/news/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
