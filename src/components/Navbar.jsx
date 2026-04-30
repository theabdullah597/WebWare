import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services', path: '/services', dropdown: [
        { name: 'Bespoke Software Development', path: '/services/bespoke' },
        { name: 'For Small/Medium Business', path: '/services/smb' },
        { name: 'Hire Dedicated Developers', path: '/services/hire-developers' },
      ]
    },
    { name: 'Case Study', path: '/case-study' },
    { name: 'News & Blog', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/5'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="WebWare Ltd" className="h-14 w-auto object-contain" />
            <span className="text-xl font-display font-bold tracking-tight">

            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(link.path)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {link.name}
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden p-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block px-4 py-3 rounded-lg text-sm transition-all duration-200 ${isActive(item.path)
                              ? 'text-cyan-400 bg-cyan-400/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                          >
                            <span className="flex items-center gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50"></span>
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(link.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="ml-4 btn-primary text-sm text-white">
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-black/98 backdrop-blur-xl border-t border-white/5 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(link.path) ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-60 mt-1' : 'max-h-0'}`}>
                    <div className="pl-4 space-y-1">
                      <Link to={link.path} className="block px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-cyan-400 transition-colors">All Services</Link>
                      {link.dropdown.map((item) => (
                        <Link key={item.name} to={item.path} className="block px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-cyan-400 transition-colors">{item.name}</Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={link.path} className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(link.path) ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}>{link.name}</Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="block btn-primary text-center text-sm text-white mt-4">Get Started</Link>
        </div>
      </div>
    </nav>
  )
}
