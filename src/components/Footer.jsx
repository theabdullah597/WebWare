import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="WebWare Ltd" className="h-9 w-auto object-contain" />
              {/* <span className="text-xl font-display font-bold">

              </span> */}
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Webware Ltd is a leading software development provider in the UK with additional global locations in the US, Canada, Europe, and Australia.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Quick Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Suite RA01 195-197 Wood Street London, E17 3NU</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+441473922768" className="hover:text-cyan-400 transition-colors">+44 (0) 147 3922 768</a>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@webwareltd.co.uk" className="hover:text-cyan-400 transition-colors">info@webwareltd.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Quick Pages
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Case Study', path: '/case-study' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-500 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <svg className="w-3 h-3 text-gray-700 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News & Blog */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              News & Blog
            </h4>
            <ul className="space-y-4">
              {[
                { title: 'Measuring software development productivity', slug: 'measuring-productivity' },
                { title: 'How software engineers can learn on company time', slug: 'learning-on-company-time' },
                { title: 'Solving 3 of the most typical problems software teams face with issue cycle time', slug: 'solving-cycle-time-problems' },
              ].map((post) => (
                <li key={post.slug}>
                  <Link to={`/news/${post.slug}`} className="text-gray-500 text-sm hover:text-cyan-400 transition-colors leading-relaxed block">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-gray-600 text-sm text-center">Copyright 2021 © Webware Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
