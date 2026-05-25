import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, BookOpen, Users, Sparkles, ArrowRight, MapPin, Compass } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { destinations } from '../data/destinations'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#080C1A] min-h-screen text-[var(--text-primary)] selection:bg-[var(--accent-gold)] selection:text-[#080C1A]"
    >
      {/* ── HERO SECTION (Atlas Grid Pattern) ────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-[var(--border-subtle)]">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Radial mesh glow effects */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F5A623]/[0.06] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00C9A7]/[0.04] blur-[100px] pointer-events-none" />

        <div className="absolute top-16 right-20 text-5xl opacity-10 animate-float-slow select-none">🇩🇪</div>
        <div className="absolute bottom-16 left-20 text-5xl opacity-10 animate-float select-none">🇬🇧</div>
        <div className="absolute top-44 left-1/3 text-4xl opacity-5 animate-float-slow select-none">🇺🇸</div>

        <div className="relative z-10 text-center px-4 pt-24 max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] backdrop-blur-xl text-xs font-semibold text-[var(--accent-gold-light)] mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(245,166,35,0.08)]"
          >
            <Compass size={14} className="animate-spin-slow text-[var(--accent-gold)]" />
            Global Academic Explorer
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-['Syne'] font-extrabold text-white leading-none tracking-tight mb-6"
          >
            Study <span className="text-gradient-amber">Destinations</span>
          </motion.h1>
          
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-[var(--text-secondary)] font-['DM_Sans'] leading-relaxed max-w-2xl mx-auto"
          >
            Unlock world-class education and global career opportunities across 15+ top destinations. Your path starts here.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED DESTINATION (Germany Dashboard widget) ────── */}
      {germany && (
        <section className="py-20 relative overflow-hidden bg-[#0A0F22] border-b border-[var(--border-subtle)]">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              {...fadeInUp}
              className="rounded-3xl overflow-hidden border border-[#F5A623]/30 bg-gradient-to-br from-[var(--surface-1)] to-[#0A0F20] shadow-[0_0_50px_rgba(245,166,35,0.12)]"
            >
              <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-subtle)]">
                {/* Left Block */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F5A623]/10 border border-[#F5A623]/20 text-[var(--accent-gold)] rounded-full text-xs font-bold uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-ping" />
                      Featured Destination
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl sm:text-6xl drop-shadow-xl select-none">{germany.flag}</span>
                    <h2 className="text-3xl sm:text-5xl font-['Syne'] font-extrabold text-white">
                      Study in <span className="text-gradient-amber">Germany</span>
                    </h2>
                  </div>
                  <p className="text-[var(--text-secondary)] text-base sm:text-lg mb-8 leading-relaxed font-['DM_Sans']">
                    {germany.description}
                  </p>
                  <Button to="/germany" variant="primary" size="lg" className="w-fit">
                    Explore Germany <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Right Block (Fintech Panel) */}
                <div className="p-8 sm:p-12 lg:p-16 bg-white/[0.01] flex flex-col justify-center gap-8">
                  <h3 className="font-['Syne'] font-bold text-xs uppercase tracking-widest text-[var(--text-muted)]">
                    Germany Operations & Stats Dashboard
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-[var(--surface-2)] p-6 rounded-2xl border border-[var(--border-subtle)] text-center sm:text-left">
                      <span className="text-xs text-[var(--text-muted)] block mb-1.5 uppercase tracking-wider font-semibold">Universities</span>
                      <span className="text-3xl font-mono font-bold text-[var(--accent-gold)]">{germany.universities}</span>
                      <span className="text-[10px] text-gray-500 block mt-1">State & Private</span>
                    </div>

                    <div className="bg-[var(--surface-2)] p-6 rounded-2xl border border-[var(--border-subtle)] text-center sm:text-left">
                      <span className="text-xs text-[var(--text-muted)] block mb-1.5 uppercase tracking-wider font-semibold">Avg Cost</span>
                      <div className="flex items-baseline justify-center sm:justify-start gap-1">
                        <span className="text-3xl font-mono font-bold text-[var(--accent-teal)]">€850</span>
                        <span className="text-xs text-gray-400 font-sans font-medium">/month</span>
                      </div>
                      <span className="text-[10px] text-gray-500 block mt-1">Living expenses</span>
                    </div>

                    <div className="bg-[var(--surface-2)] p-6 rounded-2xl border border-[var(--border-subtle)] text-center sm:text-left">
                      <span className="text-xs text-[var(--text-muted)] block mb-1.5 uppercase tracking-wider font-semibold">Work Permit</span>
                      <div className="flex items-baseline justify-center sm:justify-start gap-1">
                        <span className="text-3xl font-mono font-bold text-white">18</span>
                        <span className="text-xs text-gray-400 font-sans font-medium">Months</span>
                      </div>
                      <span className="text-[10px] text-gray-500 block mt-1">Post-grad residency</span>
                    </div>
                  </div>

                  <div className="bg-[#F5A623]/5 rounded-2xl p-5 border border-[#F5A623]/25 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="text-[var(--accent-gold)]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-['Syne'] font-bold text-sm text-[var(--text-primary)] mb-1">Tuition-Free Policy</h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-['DM_Sans']">
                        Public academic institutions in Germany charge zero tuition for international students, making it one of the most lucrative and highly sought destinations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── ALL DESTINATIONS (Fintech dashboard Cards) ────────────── */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Explore All"
            highlight="Destinations"
            highlightColor="amber"
            light={true}
            subtitle="Find the perfect country for your academic journey and professional relocation"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-between p-6 sm:p-8 bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/40 hover:shadow-[0_0_35px_var(--border-glow)] transition-all duration-500 shadow-xl"
              >
                {/* Custom Glowing Aura Layer (Loads country's unique glow) */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                  style={{ background: dest.gradient }}
                />

                {/* Shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top header row */}
                <div className="flex items-start justify-between relative z-10">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-[var(--surface-2)] text-[var(--accent-gold-light)] border border-[var(--border-subtle)] text-[10px] font-bold tracking-widest uppercase font-['DM_Sans']">
                    {dest.highlight}
                  </span>
                  <span className="text-4xl drop-shadow-xl select-none">{dest.flag}</span>
                </div>

                {/* Card Title & Content */}
                <div className="mt-8 relative z-10">
                  <h3 className="font-['Syne'] font-extrabold text-2xl text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-gold-light)] transition-colors duration-300">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6 line-clamp-2 leading-relaxed font-['DM_Sans']">
                    {dest.description}
                  </p>

                  {/* Tech Data table widget */}
                  <div className="grid grid-cols-3 gap-2 bg-[var(--surface-2)] p-4 rounded-xl border border-[var(--border-subtle)] mb-5">
                    <div>
                      <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">Universities</div>
                      <div className="text-base font-mono font-bold text-[var(--accent-gold)]">{dest.universities}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">Avg Cost</div>
                      <div className="text-base font-mono font-bold text-[var(--accent-teal)] truncate" title={dest.stats.avgCost}>
                        {dest.stats.avgCost.split('/')[0]}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">Programs</div>
                      <div className="text-base font-mono font-bold text-white">{dest.stats.programs}</div>
                    </div>
                  </div>

                  {/* Footer links */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] font-mono">
                      0{i + 1} // CODE
                    </span>
                    <Link
                      to={dest.slug || '/destinations'}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] group-hover:text-[var(--accent-gold-light)] transition-all duration-300 group-hover:gap-3"
                    >
                      LEARN MORE <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY STUDY ABROAD (Fintech Magazine Dashboard layout) ── */}
      <section className="py-24 lg:py-32 bg-[#060A16] border-t border-[var(--border-subtle)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00C9A7]/[0.02] blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Why Study"
            highlight="Abroad?"
            highlightColor="amber"
            light={true}
            subtitle="Transform your academic future, expand your worldview, and launch a global career"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const IconComponent = b.icon
              const isAmber = b.color === 'amber'
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[var(--surface-1)] border border-[var(--border-subtle)] rounded-2xl p-8 hover:border-[var(--accent-gold)]/20 hover:shadow-[0_0_25px_var(--border-glow)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform">
                    {/* Glowing background inside icon box */}
                    <div className={`absolute inset-0 opacity-10 ${isAmber ? 'bg-[var(--accent-gold)]' : 'bg-[var(--accent-teal)]'}`} />
                    <IconComponent className={isAmber ? 'text-[var(--accent-gold)]' : 'text-[var(--accent-teal)]'} size={24} />
                  </div>
                  
                  <h3 className="font-['Syne'] font-bold text-lg text-white mb-3">
                    {b.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-['DM_Sans']">
                    {b.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA PANEL ────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
        {/* Glow backgrounds */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #0E162C 0%, #080C1A 100%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5A623]/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            {...fadeInUp}
            className="text-3xl sm:text-5xl font-['Syne'] font-extrabold text-white mb-4"
          >
            Need Help Choosing?
          </motion.h2>
          
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto font-['DM_Sans']"
          >
            Our expert counselors are ready to help you evaluate your academic profile and select the perfect global destination.
          </motion.p>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Button to="/contact" variant="primary" size="lg" className="shadow-lg shadow-[#F5A623]/10">
              Get Expert Advice <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
