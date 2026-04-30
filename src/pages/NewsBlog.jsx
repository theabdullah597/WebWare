import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

export default function NewsBlog() {
  useScrollReveal()

  const posts = [
    { title: 'Measuring software development productivity', excerpt: 'The software world gave up too soon on measuring development productivity, deeming it impossible...', slug: 'measuring-productivity', date: 'Oct 15, 2021', tag: 'Productivity', image: '/images/blog-productivity.png' },
    { title: 'How software engineers can learn on company time', excerpt: 'We know from various investigations that learning at work further develops employee satisfaction...', slug: 'learning-on-company-time', date: 'Sep 28, 2021', tag: 'Learning', image: '/images/blog-learning.png' },
    { title: 'Solving 3 of the most typical problems software teams face with issue cycle time', excerpt: 'The unfortunate reality about software development is that if you keep doing what you\'ve been doing...', slug: 'solving-cycle-time-problems', date: 'Sep 10, 2021', tag: 'Engineering', image: '/images/blog-engineering.png' },
  ]

  return (
    <>
      <PageHero badge="News & Blog" title="Latest" highlight="Insights" description="Stay updated with the latest trends in software development." showCTA={false} />

      <section className="py-28 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20 stagger-children">
            {posts.map((post, i) => (
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

      <section className="py-28 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <span className="section-badge mb-6 inline-block">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready To Start Your <span className="gradient-text">Business</span>?</h2>
              <p className="text-gray-500 mb-8">We should talk about your thought.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400"><svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>+44 (0) 147 3922 768</span></div>
                <div className="flex items-center gap-3 text-gray-400"><svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span>info@webwareltd.co.uk</span></div>
                <div className="flex items-start gap-3 text-gray-400"><svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span>Suite RA01 195-197 Wood Street London, E17 3NU</span></div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 reveal-right"><ContactForm /></div>
          </div>
        </div>
      </section>
    </>
  )
}
