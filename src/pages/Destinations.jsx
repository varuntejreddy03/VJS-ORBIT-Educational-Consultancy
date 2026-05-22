import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, BookOpen, Users, Sparkles, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { destinations } from '../data/destinations'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const benefits = [
  { icon: Globe, title: 'Global Career Opportunities', desc: 'Access international job markets and build a worldwide professional network', color: 'amber' },
  { icon: BookOpen, title: 'World-Class Education', desc: 'Learn from top professors and cutting-edge research facilities', color: 'teal' },
  { icon: Sparkles, title: 'Cultural Exposure', desc: 'Immerse yourself in diverse cultures and broaden your worldview', color: 'amber' },
  { icon: Users, title: 'Personal Growth', desc: 'Develop independence, resilience, and lifelong friendships', color: 'teal' },
]

export default function Destinations() {
  const germany = destinations.find(d => d.id === 'germany')
  const otherDestinations = destinations.filter(d => d.id !== 'germany')

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 50%, #0D3B6E 100%)' }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-float">🇩🇪</div>
        <div className="absolute bottom-20 left-10 text-5xl opacity-20 animate-float-slow">🇬🇧</div>
        <div className="absolute top-40 left-1/4 text-4xl opacity-15 animate-float">🇺🇸</div>
        <div className="absolute bottom-10 right-1/4 text-5xl opacity-15 animate-float-slow">🇨🇦</div>
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00C9A7]">Destinations</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white mb-6">
            Study <span className="text-gradient-teal">Destinations</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore world-class education opportunities across 15+ countries
          </motion.p>
        </div>
      </section>

      {/* Featured Germany */}
      {germany && (
        <section className="py-20 bg-[#F7F8FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="rounded-2xl overflow-hidden border-2 border-[#F5A623] shadow-xl shadow-[#F5A623]/10" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 100%)' }}>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-10 lg:p-14">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F5A623]/20 text-[#F5A623] rounded-full text-sm font-bold mb-6">
                    ⭐ Featured Destination
                  </span>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl">🇩🇪</span>
                    <h2 className="text-4xl sm:text-5xl font-['Syne'] font-bold text-white">
                      Study in <span className="text-gradient-amber">Germany</span>
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">{germany.description}</p>
                  <Button to="/germany" variant="primary" size="lg" icon={ArrowRight}>Explore Germany</Button>
                </div>
                <div className="p-10 lg:p-14 bg-white/5 flex items-center">
                  <div className="grid grid-cols-3 gap-6 w-full">
                    <div className="text-center">
                      <div className="text-3xl font-['Space_Mono'] font-bold text-[#F5A623] mb-2">{germany.universities}</div>
                      <div className="text-sm text-gray-400">Universities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-['Space_Mono'] font-bold text-[#00C9A7] mb-2">{germany.stats.avgCost}</div>
                      <div className="text-sm text-gray-400">Avg Cost/Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-['Space_Mono'] font-bold text-[#F5A623] mb-2">{germany.stats.workPermit}</div>
                      <div className="text-sm text-gray-400">Work Permit</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Destinations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Explore All" highlight="Destinations" highlightColor="teal" subtitle="Find the perfect country for your academic journey" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden min-h-[360px] group cursor-pointer"
                style={{ background: dest.gradient }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 text-4xl">{dest.flag}</div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 mb-3">
                    {dest.highlight}
                  </span>
                  <h3 className="font-['Syne'] font-bold text-2xl text-white mb-2">{dest.name}</h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">{dest.description}</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div>
                      <div className="text-sm font-['Space_Mono'] font-bold text-[#F5A623]">{dest.universities}</div>
                      <div className="text-xs text-gray-400">Universities</div>
                    </div>
                    <div>
                      <div className="text-sm font-['Space_Mono'] font-bold text-[#00C9A7]">{dest.stats.avgCost}</div>
                      <div className="text-xs text-gray-400">Avg Cost</div>
                    </div>
                    <div>
                      <div className="text-sm font-['Space_Mono'] font-bold text-white">{dest.stats.programs}</div>
                      <div className="text-xs text-gray-400">Programs</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-[#F5A623] font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Study" highlight="Abroad?" highlightColor="amber" subtitle="Transform your future with an international education" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${b.color === 'amber' ? 'bg-[#F5A623]/10' : 'bg-[#00C9A7]/10'}`}>
                  <b.icon className={b.color === 'amber' ? 'text-[#F5A623]' : 'text-[#00C9A7]'} size={28} />
                </div>
                <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-2">{b.title}</h3>
                <p className="text-sm text-[#6B7280]">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #00C9A7 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-['Syne'] font-bold text-white mb-4">
            Need Help Choosing?
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-gray-300 mb-8">
            Our expert counselors will help you find the perfect destination based on your profile and goals
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Button to="/contact" variant="primary" size="lg">Get Expert Advice</Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
