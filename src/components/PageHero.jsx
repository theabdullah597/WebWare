import { Link } from 'react-router-dom'

export default function PageHero({ badge, title, highlight, description, showCTA = true }) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black"></div>
      </div>
      <div className="absolute inset-0 hero-gradient-bg"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-badge mb-6 inline-flex items-center gap-2 animate-fade-in">
          <span className="glow-dot" style={{width: '6px', height: '6px'}}></span>
          {badge}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] animate-slide-up">
          {title}{' '}
          <span className="gradient-text">{highlight}</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-slide-up" style={{animationDelay: '0.15s'}}>
          {description}
        </p>
        {showCTA && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <Link to="/contact" className="btn-primary text-white inline-flex items-center gap-2">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/services" className="btn-outline">Our Services</Link>
          </div>
        )}
      </div>
    </section>
  )
}
