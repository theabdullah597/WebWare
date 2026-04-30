import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SkillsetBadges() {
  useScrollReveal()

  const skills = [
    'React', 'Angular', 'Vue.js', 'Node.js', 'Java', 'Python',
    '.NET', 'PHP', 'Swift', 'Kotlin', 'TypeScript', 'Go',
    'AWS', 'Azure', 'Docker', 'Kubernetes',
  ]

  return (
    <section className="py-28 relative bg-black">
      <div className="absolute inset-0 mesh-gradient"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <span className="section-badge mb-4 inline-block">Our Skillset</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 reveal">
          {skills.map((skill) => (
            <span key={skill} className="px-5 py-2.5 rounded-xl bg-white/3 border border-white/8 text-gray-400 text-sm font-medium hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
