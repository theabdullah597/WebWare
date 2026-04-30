import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'

export default function Services() {
  useScrollReveal()

  return (
    <>
      <PageHero badge="Our Services" title="What Services We" highlight="Provide" description="We offer comprehensive software development solutions tailored to your unique business needs." />

      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              { title: 'Hire Dedicated Developers', desc: 'We comprehend that to have a useful and glad engineer in your group, they need to pick you first. This special methodology is our \'mystery ingredient\'.', link: '/services/hire-developers', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
              { title: 'For Small/Medium Business', desc: 'Our joined custom application advancement and IT support administrations observe the most elevated industry guidelines.', link: '/services/smb', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
              { title: 'Bespoke Software Development', desc: 'Webware ltd versatile and committed improvement groups build fitted programming for your unique business issues.', link: '/services/bespoke', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
            ].map((s, i) => (
              <div key={s.title} className="glass-card rounded-2xl p-8 flex flex-col group reveal" style={{'--stagger-index': i}}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.desc}</p>
                <Link to={s.link} className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:gap-3 transition-all">Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-28 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-badge mb-4 inline-block">Deliverables</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">What We <span className="gradient-text">Deliver</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              { title: 'Web Application', desc: 'Webware ltd can direct you through the advanced excursion and fabricate web applications customized to your requirements.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
              { title: 'Mobile App', desc: 'Webware ltd portable advancement habitats offer a one-stop administration from client experience to custom development.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
              { title: 'CRM', desc: 'Utilizing a customized CRM framework can assist organizations with moving how they cooperate with their clients.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
            ].map((item, i) => (
              <div key={item.title} className="glass-card rounded-2xl p-8 text-center group reveal" style={{'--stagger-index': i}}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform border border-white/5">{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 hero-gradient-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-badge mb-4 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Customer <span className="gradient-text">Testimonials</span></h2>
            <p className="text-gray-500 text-lg">Read what our valued customers have to say about us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              { quote: "Fast reactions to asks for and solid hard-working attitude are valued. Great correspondence is vital for result-centered IT advancement.", name: 'Dyas Kardinal', role: 'Managing Director, inNovated Leasing', initials: 'DK' },
              { quote: "A strong congrats to the group at Webware ltd for nicely done. They worked intimately with us all through the cycle, remaining focused and on budget.", name: 'Elsa Verina', role: 'General Manager, Sports Equipment Company, UK', initials: 'EV' },
              { quote: "I'm truly intrigued by the nature of administrations I got from Webware ltd. You were exactly on time and conveyed things before time.", name: 'Khairul Payad', role: 'President of Operations, Digital Marketing Company', initials: 'KP' },
            ].map((t, i) => (
              <div key={t.name} className="glass-card rounded-2xl p-8 flex flex-col reveal" style={{'--stagger-index': i}}>
                <svg className="w-8 h-8 text-cyan-400/20 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/></svg>
                <p className="text-gray-400 text-sm leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                  <div><div className="text-white font-semibold text-sm">{t.name}</div><div className="text-gray-600 text-xs">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
