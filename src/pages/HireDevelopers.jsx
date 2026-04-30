import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'
import GuaranteeSection from '../components/GuaranteeSection'
import SkillsetBadges from '../components/SkillsetBadges'

export default function HireDevelopers() {
  useScrollReveal()

  const features = [
    { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Dedicated Developers Choose You', desc: 'We comprehend that to have a useful and glad designer in your group, they need to pick you first. To that end, we don\'t compel our designers to chip away at projects where their range of abilities isn\'t reasonable for your requirements.' },
    { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Committed Designers That Deliver', desc: 'To Webware ltd, delivering top-notch programming is the main concern. By zeroing in essentially on the product, our designers can rapidly react to changes and advancement needs.' },
    { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, title: 'Full Confidentiality', desc: 'We at Webware ltd see how important licensed innovation is to you. The NDAs are there to shield your thoughts, information, and code.' },
    { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Fair Compensation', desc: 'Designer maintenance in Webware ltd is high because of reasonable remuneration. They get at minimum 70% of the contracted compensation.' },
  ]

  return (
    <>
      <PageHero badge="Hire Developers" title="Hire Dedicated" highlight="Developers" description="Dedicated developers choose you. Our unique methodology is our 'mystery ingredient'." />

      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card rounded-2xl p-8 group reveal" style={{'--stagger-index': i}}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GuaranteeSection />
      <SkillsetBadges />
    </>
  )
}
