import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection() {
  useScrollReveal()

  return (
    <section className="py-28 relative bg-black">
      <div className="absolute inset-0 hero-gradient-bg"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-scale">
        <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
          <span className="section-badge mb-6 inline-block">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready To Start Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">We should talk about your thought.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-white inline-flex items-center gap-2 text-lg px-10 py-4">
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/case-study" className="btn-outline text-lg px-10 py-4">View Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
