import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

export default function CaseStudy() {
  useScrollReveal()

  const cases = [
    { title: 'E-Commerce Enterprise Solution', desc: 'Webware ltd assembled a brand new eCommerce website leading to a business increase of 300%~400% that very year.', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>, tag: 'eCommerce' },
    { title: 'Track Day Recording iOS APP', desc: 'Webware ltd assembled an element rich iOS application that permits clients to follow, break down, and share their race track execution.', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, tag: 'Mobile' },
    { title: 'IOT Intelligent Farming System', desc: 'Webware ltd constructed a framework to follow ranch hardware and screen climate conditions utilizing NodeJS.', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>, tag: 'IoT' },
  ]

  return (
    <>
      <PageHero badge="Case Studies" title="Featured" highlight="Case Studies" description="We have over 150+ finished projects and anticipate composing new stories!" />

      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20 stagger-children">
            {cases.map((c, i) => (
              <div key={c.title} className="glass-card rounded-2xl overflow-hidden group reveal" style={{'--stagger-index': i}}>
                <div className="h-48 bg-gradient-to-br from-cyan-900/30 via-black to-blue-900/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-xs font-medium border border-cyan-400/20">{c.tag}</span>
                  <span className="text-cyan-400/30 relative z-10">{c.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 reveal-scale">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="section-badge mb-6 inline-block">Featured Project</span>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Mobile App <span className="gradient-text">Requirements</span></h2>
                <p className="text-gray-500 leading-relaxed mb-6">Vanguard Associates Limited required an intelligent, feature rich portable application for race track performance tracking.</p>
                <p className="text-gray-500 leading-relaxed">Webware Ltd UK's experience brought this application from planning phase to the iTunes Store.</p>
              </div>
              <div className="space-y-4">
                {['Built for native iOS using Objective-C, C++ & .NET Core', 'Records real time GPS, G-Force & Acceleration', 'Implemented full in-app purchases (IAP)'].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center reveal">
        <span className="section-badge mb-4 inline-block">Growing</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">We are <span className="gradient-text">Growing</span></h2>
      </section>

      <CTASection />
    </>
  )
}
