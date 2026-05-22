import { motion } from 'framer-motion'
import Button from '../ui/Button'

const floatingOrbs = [
  { size: 'w-72 h-72', position: 'top-[-8%] left-[-6%]', opacity: 'opacity-[0.07]', animation: 'animate-[orb-float-1_12s_ease-in-out_infinite]', color: 'bg-[#00C9A7]' },
  { size: 'w-56 h-56', position: 'bottom-[-10%] right-[-4%]', opacity: 'opacity-[0.08]', animation: 'animate-[orb-float-2_14s_ease-in-out_infinite]', color: 'bg-[#F5A623]' },
  { size: 'w-40 h-40', position: 'top-[20%] right-[15%]', opacity: 'opacity-[0.05]', animation: 'animate-[orb-float-3_10s_ease-in-out_infinite]', color: 'bg-white' },
  { size: 'w-24 h-24', position: 'bottom-[15%] left-[10%]', opacity: 'opacity-[0.06]', animation: 'animate-[orb-float-1_16s_ease-in-out_infinite_reverse]', color: 'bg-[#F5A623]' },
  { size: 'w-32 h-32', position: 'top-[50%] left-[40%]', opacity: 'opacity-[0.04]', animation: 'animate-[orb-float-2_18s_ease-in-out_infinite]', color: 'bg-[#00C9A7]' },
  { size: 'w-16 h-16', position: 'top-[10%] left-[55%]', opacity: 'opacity-[0.08]', animation: 'animate-[orb-float-3_8s_ease-in-out_infinite]', color: 'bg-white' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F2E] via-[#1B2459] to-[#00C9A7] animate-gradient-shift" />

      {/* Gradient mesh overlays for extra depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,201,167,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(245,166,35,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(27,36,89,0.4),transparent_70%)]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Floating decorative orbs */}
      {floatingOrbs.map((orb, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-3xl ${orb.size} ${orb.position} ${orb.opacity} ${orb.animation} ${orb.color}`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 py-24 sm:py-28 lg:py-32 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative line */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#F5A623]/50" />
            <span className="text-[#F5A623] font-['DM_Sans'] text-sm font-medium tracking-widest uppercase">
              Take the First Step
            </span>
            <span className="h-px w-8 bg-[#F5A623]/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-['Syne'] font-bold text-white mb-5 leading-tight"
          >
            Ready to Begin Your{' '}
            <span className="text-gradient-teal">Journey?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 font-['DM_Sans'] mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Schedule a complimentary consultation with our expert counselors today
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button variant="primary" size="lg" to="/contact">
              Request Free Session →
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xs sm:text-sm text-gray-400/70 font-['DM_Sans']"
          >
            No commitment required · 100% free · Response within 24 hours
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom decorative gradient edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C9A7]/30 to-transparent" />
    </section>
  )
}
