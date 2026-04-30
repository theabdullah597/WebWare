import { useScrollReveal } from '../hooks/useScrollReveal'

export default function GuaranteeSection() {
  useScrollReveal()

  return (
    <section className="py-28 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden reveal-scale">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="section-badge mb-4 inline-block">Our Promise</span>
              <h2 className="text-3xl font-display font-bold text-white mb-4">The Webware Ltd <span className="gradient-text">Guarantee</span></h2>
              <p className="text-gray-500 leading-relaxed">Webware ltd will supplant a specialist free of charge on the off chance that they can't perform to the guidelines and assumptions set out.</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
