import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'

export default function About() {
  useScrollReveal()

  return (
    <>
      <PageHero badge="About Us" title="Building Software" highlight="Since 2001" description="Webware Ltd Software Inc. is a trusted partner and a recognized innovator in providing software development, systems integration, and solution delivery services." showCTA={false} />

      {/* On the Surface */}
      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="section-badge mb-6 inline-block">On the Surface</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">A Trusted <span className="gradient-text">Partner</span></h2>
              <p className="text-gray-500 leading-relaxed mb-6">Webware ltd Software Inc. is a believed accomplice and a perceived innovator in giving programming advancement rethinking, frameworks mix, and arrangement conveyance administrations. We are focused on long-haul participation with clients by giving committed nimble engineers.</p>
              <p className="text-gray-500 leading-relaxed">You can likewise see our "mystery ingredient" to discover more with regards to how we get things done.</p>
            </div>
            <div className="reveal-right">
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src="/images/team.png" alt="Our Team" className="w-full h-64 object-cover rounded-2xl" />
              </div>
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <span className="section-badge mb-4 inline-block">Under the Surface</span>
                <h3 className="text-xl font-display font-bold text-white mb-4">20+ Years of <span className="gradient-text">Excellence</span></h3>
                <p className="text-gray-500 leading-relaxed mb-6">Starting around 2001, we have given premium programming advancement administrations to over 1500+ organizations all over the planet.</p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                  {[{ num: '1500+', label: 'Organizations' }, { num: '20+', label: 'Years' }, { num: '150+', label: 'Projects' }].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-display font-bold gradient-text">{s.num}</div>
                      <div className="text-gray-600 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-28 relative bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-scale">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative">
            <svg className="absolute top-6 left-6 w-12 h-12 text-cyan-400/15" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/></svg>
            <blockquote className="relative z-10">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic mb-8 pl-8">"Fast reactions to asks for and solid hard-working attitude are valued. Great correspondence is vital for result-centered IT advancement and in this, the Webware ltd engineers dominate."</p>
              <footer className="flex items-center gap-4 pl-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">DK</div>
                <div>
                  <cite className="text-white font-semibold not-italic">Dyas Kardinal</cite>
                  <p className="text-gray-500 text-sm">Managing Director, inNovated Leasing</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Great People */}
      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 hero-gradient-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="section-badge mb-6 inline-block">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">"Great software starts with <span className="gradient-text">great people</span>"</h2>
              <p className="text-gray-500 leading-relaxed mb-6">We accept "Incredible programming begins with extraordinary individuals" in light of the fact that our kin is the most basic part of conveying great quality programming.</p>
              <p className="text-gray-500 leading-relaxed">By making a cooperative and moving working society, we spur our group not exclusively to compose better code and carry out incredible programming yet, in addition, to track down answers for customers' business issues.</p>
            </div>
            <div className="reveal-right">
              <img src="/images/about.png" alt="Our workspace" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
