import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CTASection from '../components/CTASection'

export default function Home() {
  useScrollReveal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="absolute inset-0 hero-gradient-bg"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8 animate-fade-in">
            <span className="glow-dot"></span>
            Premium Software Development Partner
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1] animate-slide-up">
            We assemble incredible<br/>
            <span className="gradient-text">Software</span> with remarkable<br/>
            <span className="gradient-text">Developers</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Trusted by 1500+ organizations worldwide. Building exceptional software solutions since 2001.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link to="/contact" className="btn-primary text-white inline-flex items-center gap-2 text-lg px-10 py-4">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/case-study" className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4">View Case Studies</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 animate-slide-up" style={{animationDelay: '0.6s'}}>
            {[
              { number: '1500+', label: 'Clients Worldwide' },
              { number: '5+', label: 'Years Experience' },
              { number: '150+', label: 'Projects Completed' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Right */}
      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-badge mb-4 inline-block">Our Approach</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              What We Do <span className="gradient-text">Right</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
                title: 'Tailor Made',
                desc: 'Top-notch execution plans made to meet your prerequisites, with dynamic deft headway runs.',
                color: 'cyan'
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: 'Available in Your Timezone',
                desc: 'With offices all over the planet, we are available to you 24/7, and compliant with local laws and regulations.',
                color: 'blue'
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: 'Quickly Go To Market',
                desc: 'Utilizing current agile procedures and flexible agreements, our developers can deliver your project at rocket-quick rates.',
                color: 'purple'
              },
            ].map((item, i) => (
              <div key={item.title} className="glass-card rounded-2xl p-8 group reveal" style={{'--stagger-index': i}}>
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${
                  item.color === 'cyan' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' :
                  item.color === 'blue' ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20' :
                  'bg-purple-400/10 text-purple-400 border border-purple-400/20'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-28 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-badge mb-4 inline-block">Case Study</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Expanding Productivity by Collaborating with a<br className="hidden md:block"/>
              <span className="gradient-text">Distant Java Development Team</span>
            </h2>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-16 reveal">
            <div className="glass-card rounded-2xl p-8 md:p-12 relative">
              <svg className="absolute top-6 left-6 w-12 h-12 text-cyan-400/15" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/></svg>
              <blockquote className="relative z-10">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic mb-8 pl-8">
                  "Fast reactions to asks for and solid hard-working attitude are valued. Great correspondence is crucial for result-centered IT advancement and in this, the Webware ltd designers dominate. Certainty and inward feeling of harmony are the outcomes. I energetically suggest Webware Ltd as a re-appropriating arrangement."
                </p>
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

          {/* Challenge / Solution / Results */}
          <div className="grid md:grid-cols-3 gap-8 mb-10 stagger-children">
            {[
              { label: 'The Challenge', text: 'Collect a group of Java advancement specialists to supplement the customer\'s IT groups, explicitly for Java improvement endeavors; keep usefulness and productivity at manageable and agreeable levels.', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>, color: 'red' },
              { label: 'The Solution', text: 'Steadily bring more Java improvement specialists and have more modest groups under one objective; keep up with Agile systems and practices.', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, color: 'cyan' },
              { label: 'The Results', text: 'Extraordinarily expanded usefulness and proficiency; the groups have created more than 60 Java-based deliveries; full straightforwardness in correspondence; high designer maintenance.', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, color: 'green' },
            ].map((item, i) => (
              <div key={item.label} className="glass-card rounded-2xl p-8 reveal" style={{'--stagger-index': i}}>
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  item.color === 'red' ? 'bg-red-400/10 text-red-400 border border-red-400/20' :
                  item.color === 'cyan' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' :
                  'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                }`}>{item.icon}</div>
                <h3 className="text-lg font-display font-bold text-white mb-3">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link to="/case-study" className="btn-outline inline-flex items-center gap-2">
              Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0">
          <img src="/images/services-bg.png" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-black/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-badge mb-4 inline-block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              What <span className="gradient-text">Services</span> We Provide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              { title: 'Hire Dedicated Developers', desc: 'We comprehend that to have a useful and glad engineer in your group, they need to pick you first. This special methodology is our \'mystery ingredient\'.', link: '/services/hire-developers', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
              { title: 'For Small/Medium Business', desc: 'Our joined custom application advancement and IT support administrations observe the most elevated industry guidelines and help independent ventures.', link: '/services/smb', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
              { title: 'Bespoke Software Development', desc: 'Webware ltd versatile and committed improvement groups build fitted programming for your one-of-a-kind business issues.', link: '/services/bespoke', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
            ].map((service, i) => (
              <div key={service.title} className="glass-card rounded-2xl p-8 flex flex-col group reveal" style={{'--stagger-index': i}}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:gap-3 transition-all">
                  Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">What We <span className="gradient-text">Deliver</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              { title: 'Web Application', desc: 'Webware ltd can direct you through the advanced excursion and fabricate web applications customized to your requirements.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>, color: 'from-cyan-500/15 to-cyan-600/5' },
              { title: 'Mobile App', desc: 'Webware ltd portable advancement habitats offer a one-stop administration from client experience technique to custom development.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, color: 'from-blue-500/15 to-blue-600/5' },
              { title: 'Client Relationship Management', desc: 'Utilizing a customized CRM framework can assist organizations with moving how they cooperate with their clients.', icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, color: 'from-purple-500/15 to-purple-600/5' },
            ].map((item, i) => (
              <div key={item.title} className="glass-card rounded-2xl p-8 text-center group reveal" style={{'--stagger-index': i}}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform border border-white/5`}>{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Latest News - with real images */}
      <section className="py-28 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-badge mb-4 inline-block">Latest Updates</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Read Our <span className="gradient-text">Latest News</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              { title: 'Measuring software development productivity', excerpt: 'The software world gave up too soon on measuring development productivity, deeming it impossible...', slug: 'measuring-productivity', date: 'Oct 15, 2021', tag: 'Productivity', image: '/images/blog-productivity.png' },
              { title: 'How software engineers can learn on company time', excerpt: 'We know from various investigations that learning at work further develops employee satisfaction...', slug: 'learning-on-company-time', date: 'Sep 28, 2021', tag: 'Learning', image: '/images/blog-learning.png' },
              { title: 'Solving 3 of the most typical problems software teams face', excerpt: 'The unfortunate reality about software development is that if you keep doing what you\'ve been doing...', slug: 'solving-cycle-time-problems', date: 'Sep 10, 2021', tag: 'Engineering', image: '/images/blog-engineering.png' },
            ].map((post, i) => (
              <Link key={post.slug} to={`/news/${post.slug}`} className="glass-card rounded-2xl overflow-hidden group reveal" style={{'--stagger-index': i}}>
                <div className="h-52 relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-xs font-medium border border-cyan-400/20 backdrop-blur-sm">{post.tag}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-xs mb-3">{post.date}</p>
                  <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
