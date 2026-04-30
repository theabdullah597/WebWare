import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import GuaranteeSection from '../components/GuaranteeSection'
import SkillsetBadges from '../components/SkillsetBadges'

export default function SmallBusiness() {
  useScrollReveal()
  const services = [
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Applauz IT Team' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, title: 'Ongoing Application Development' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'SLA Driven Production Support' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>, title: 'Bugs and Problem Tracking' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, title: 'Application Re-engineering' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>, title: 'Application Migration' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, title: 'Security and Compliance Upgrades' },
  ]

  return (
    <>
      <PageHero badge="SMB Solutions" title="For Small & Medium" highlight="Business" description="Custom application development and maintenance services for growing businesses." />

      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal-left">
              <span className="section-badge mb-6 inline-block">App Development</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Custom Application <span className="gradient-text">Development</span></h2>
              <p className="text-gray-500 leading-relaxed mb-6">Our joined custom application improvement and IT support administrations adhere to the most elevated industry guidelines and help private companies access solid, nonstop application upkeep and backing.</p>
              <p className="text-gray-500 leading-relaxed">Webware ltd Application Development and Maintenance Services consolidate application advancement, application upkeep and backing, inheritance modernization, and custom arrangement execution.</p>
            </div>
            <div className="reveal-right">
              <img src="/images/about.png" alt="Development workspace" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection />

      <section className="py-28 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal-left">
              <span className="section-badge mb-6 inline-block">Get In Touch</span>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Would You Like to <span className="gradient-text">Join</span>?</h2>
              <div className="glass-card rounded-2xl p-8"><ContactForm /></div>
            </div>
            <div className="reveal-right">
              <span className="section-badge mb-6 inline-block">Our Services</span>
              <h2 className="text-3xl font-display font-bold text-white mb-8">IT <span className="gradient-text">Services</span></h2>
              <div className="space-y-4">
                {services.map((s, i) => (
                  <div key={s.title} className="glass-card rounded-xl p-5 flex items-center gap-4 group reveal" style={{'--stagger-index': i}}>
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">{s.icon}</div>
                    <span className="text-white font-medium">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillsetBadges />
    </>
  )
}
