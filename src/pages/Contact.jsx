import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useScrollReveal()

  return (
    <>
      <PageHero badge="Contact Us" title="Let's Build Something" highlight="Amazing" description="We should talk about your thought. Get in touch with us today." showCTA={false} />

      <section className="py-28 relative bg-black">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 reveal-left">
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-display font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 reveal-right">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  title: 'Visit Us',
                  lines: ['Suite RA01 195-197', 'Wood Street London', 'E17 3NU'],
                  color: 'cyan',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                  title: 'Call Us',
                  lines: ['+44 (0) 147 3922 768'],
                  href: 'tel:+441473922768',
                  color: 'blue',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  title: 'Email Us',
                  lines: ['info@webwareltd.co.uk'],
                  href: 'mailto:info@webwareltd.co.uk',
                  color: 'purple',
                },
              ].map((info) => (
                <div key={info.title} className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    info.color === 'cyan' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' :
                    info.color === 'blue' ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20' :
                    'bg-purple-400/10 text-purple-400 border border-purple-400/20'
                  }`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      info.href ? (
                        <a key={i} href={info.href} className="block text-gray-500 text-sm hover:text-cyan-400 transition-colors">{line}</a>
                      ) : (
                        <p key={i} className="text-gray-500 text-sm">{line}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
