import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'
import GuaranteeSection from '../components/GuaranteeSection'
import SkillsetBadges from '../components/SkillsetBadges'

export default function BespokeDev() {
  useScrollReveal()

  const deliverables = [
    { title: 'Web Application', desc: 'Webware ltd can direct you through the advanced excursion and construct web applications custom fitted to your requirements. By utilizing the most recent advances, we put usefulness, execution, plan and ease of use at the core of your undertaking improvement.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
    { title: 'Mobile App', desc: 'Webware ltd versatile advancement places offer a one-prevent administration from client experience procedure counseling, interface plan to custom turn of events.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { title: 'CRM', desc: 'Utilizing a customized CRM framework can assist organizations with moving how they cooperate with their clients without buying off-the-rack licenses.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { title: 'Internet of Things (IoT)', desc: 'Webware ltd IoT R&D centers around aiding conventional equipment sellers and makers rapidly assemble custom IoT programming.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg> },
    { title: 'Business Data Analysis', desc: 'Through proficient business information examination, Webware ltd helps ventures gather, process and mine data to convert into business esteem.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    { title: 'eCommerce System', desc: 'We have effectively constructed e-business stages from fortune 500 to little new companies across electronic items, FMCG, and more.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg> },
  ]

  return (
    <>
      <PageHero badge="Bespoke Development" title="Bespoke Software Development &" highlight="Dedicated Teams" description="For your unique business needs." />

      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Building Software for Your <span className="gradient-text">Unique Needs</span></h2>
              <p className="text-gray-500 leading-relaxed mb-6">Webware ltd adaptable and committed improvement groups have a common objective to assist with working with positive change inside your business by building fitted programming that will react to your interesting business issues.</p>
              <p className="text-gray-500 leading-relaxed">Webware Ltd offers start to finish arrangements, from idea and system, UX/UI plan, execution, coordination, and backing.</p>
            </div>
            <div className="reveal-right">
              <img src="/images/team.png" alt="Development team" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-badge mb-4 inline-block">Deliverables</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">What We <span className="gradient-text">Deliver</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {deliverables.map((item, i) => (
              <div key={item.title} className="glass-card rounded-2xl p-8 group reveal" style={{'--stagger-index': i}}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
