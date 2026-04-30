import { useParams, Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ContactForm from '../components/ContactForm'

const blogImages = {
  'measuring-productivity': '/images/blog-productivity.png',
  'learning-on-company-time': '/images/blog-learning.png',
  'solving-cycle-time-problems': '/images/blog-engineering.png',
}

const blogData = {
  'measuring-productivity': {
    title: 'Measuring Software Development Productivity',
    date: 'October 15, 2021',
    tag: 'Productivity',
    content: [
      'The software world gave up too soon on measuring development productivity, deeming it impossible. However, modern approaches to measuring software development productivity have evolved significantly, offering new frameworks and metrics that provide meaningful insights without the pitfalls of the past.',
      'Traditional metrics like lines of code (LOC) or function points were quickly dismissed as counterproductive. Developers could game these metrics easily, and they often incentivized the wrong behaviors — writing more code instead of better code, or creating complexity rather than solving problems elegantly.',
      'Today, leading engineering organizations are adopting a more holistic approach to productivity measurement. The DORA metrics — deployment frequency, lead time for changes, change failure rate, and time to restore service — have emerged as industry-standard indicators of software delivery performance.',
      'Beyond DORA metrics, organizations are looking at developer experience (DevEx) as a key productivity indicator. Research from Microsoft and other tech companies shows that developer satisfaction, cognitive load, and flow state directly correlate with team output and code quality.',
      'At Webware Ltd, we believe that the best measure of productivity is the value delivered to our clients. We track metrics that matter — client satisfaction, time-to-market, code quality, and system reliability — to continuously improve our development processes.',
    ]
  },
  'learning-on-company-time': {
    title: 'How Software Engineers Can Learn on Company Time',
    date: 'September 28, 2021',
    tag: 'Learning',
    content: [
      'We know from various investigations that learning at work further develops employee satisfaction, retention, and overall team performance. Yet many software engineers struggle to find time for professional development during work hours.',
      'The technology landscape evolves rapidly, making continuous learning not just beneficial but essential for software engineers. New frameworks, languages, tools, and best practices emerge regularly.',
      'Leading tech companies like Google (with their famous "20% time"), 3M, and Atlassian have long recognized the value of dedicated learning time. These programs have produced innovations like Gmail, Post-it Notes, and numerous marketplace apps.',
      'Proven strategies include: Dedicated Learning Sprints, Brown Bag Sessions, Pair Programming with Purpose, Tech Radar Reviews, and Internal Open Source contributions.',
      'At Webware Ltd, we prioritize continuous learning for our development teams. Our engineers have regular access to training resources, conference attendance, and dedicated learning time.',
    ]
  },
  'solving-cycle-time-problems': {
    title: 'Solving 3 of the Most Typical Problems Software Teams Face with Issue Cycle Time',
    date: 'September 10, 2021',
    tag: 'Engineering',
    content: [
      'The unfortunate reality about software development is that if you keep doing what you\'ve been doing, you\'ll keep getting what you\'ve been getting. Issue cycle time is one of the most telling metrics for software team health.',
      'Problem 1: Work In Progress (WIP) Overload — The most common cause of long cycle times is having too many items in progress simultaneously. Solution: Implement strict WIP limits.',
      'Problem 2: Large Batch Sizes — Teams often group many changes into large releases. Solution: Break work into smaller, independently deployable units. Use feature flags for safe deployment.',
      'Problem 3: Waiting and Handoff Delays — Issues often spend more time waiting than being actively worked on. Solution: Implement asynchronous code review processes with clear SLAs.',
      'At Webware Ltd, we continuously optimize our development processes to minimize cycle times while maintaining high quality standards.',
    ]
  },
}

export default function BlogPost() {
  useScrollReveal()
  const { slug } = useParams()
  const post = blogData[slug]
  const image = blogImages[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/news" className="btn-primary text-white">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <span className="section-badge mb-4 inline-block">{post.tag}</span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{post.title}</h1>
          <p className="text-gray-500">{post.date}</p>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-400 leading-relaxed mb-6 text-lg reveal">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-28 relative bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-badge mb-4 inline-block">Get In Touch</span>
            <h2 className="text-3xl font-display font-bold text-white">Have Questions? <span className="gradient-text">Contact Us</span></h2>
          </div>
          <div className="glass-card rounded-2xl p-8 reveal"><ContactForm /></div>
        </div>
      </section>
    </>
  )
}
