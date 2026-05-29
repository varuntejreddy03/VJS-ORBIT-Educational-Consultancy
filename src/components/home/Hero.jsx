import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

const headingWords = [
  { text: 'Your', highlight: false },
  { text: 'Gateway', highlight: false },
  { text: 'to', highlight: false },
  { text: 'World-Class', highlight: true },
  { text: 'Education', highlight: false },
  { text: 'Abroad', highlight: false },
]

const countryPills = [
  { code: 'DE', flag: '🇩🇪', top: '18%', left: '6%', delay: 0 },
  { code: 'GB', flag: '🇬🇧', top: '28%', right: '5%', delay: 0.8 },
  { code: 'US', flag: '🇺🇸', top: '62%', left: '4%', delay: 1.6 },
  { code: 'CA', flag: '🇨🇦', top: '72%', right: '7%', delay: 0.4 },
  { code: 'AU', flag: '🇦🇺', bottom: '22%', left: '10%', delay: 1.2 },
  { code: 'NZ', flag: '🇳🇿', bottom: '30%', right: '10%', delay: 2.0 },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const pillFloat = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: delay + 1, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 pt-28 pb-28 sm:pt-32 sm:pb-32 lg:pt-36 lg:pb-36">
      {/* ── Gradient Background ─────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F2E] via-[#1B2459] to-[#0D3B6E]" />

      {/* ── Animated Orbs ───────────────────────────────────────── */}
      <div
        className="absolute top-[-5%] left-[-8%] w-[420px] h-[420px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,166,35,0.45) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb-float-1 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[40%] right-[-6%] w-[360px] h-[360px] rounded-full opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,201,167,0.45) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb-float-2 14s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb-float-3 16s ease-in-out infinite',
        }}
      />

      {/* ── Noise Overlay ───────────────────────────────────────── */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[1]" />

      {/* ── Floating Country Pills ──────────────────────────────── */}
      {countryPills.map((pill) => (
        <motion.div
          key={pill.code}
          className="absolute z-10 hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full glass text-white/85 text-xs font-['Space_Mono'] font-bold tracking-wider select-none animate-float-slow"
          style={{
            top: pill.top,
            left: pill.left,
            right: pill.right,
            bottom: pill.bottom,
            animationDelay: `${pill.delay}s`,
          }}
          variants={pillFloat}
          initial="hidden"
          animate="visible"
          custom={pill.delay}
        >
          <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
          <span>{pill.code}</span>
        </motion.div>
      ))}

      {/* ── Main Content ────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5A623]/40 bg-white/[0.06] backdrop-blur-xl text-white/90 text-xs sm:text-sm font-['DM_Sans'] font-semibold tracking-wide shadow-[0_0_20px_rgba(245,166,35,0.12)]">
            ✨ Founders: Gundu Vinay Kumar • Jagadeesh Yeddalapudi • Sai Charan Yenugula
          </span>
        </motion.div>

        {/* VJS Tagline */}
        <motion.p
          className="text-[#F5A623] font-['Space_Mono'] text-sm sm:text-base tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Vision &bull; Journey &bull; Success
        </motion.p>

        {/* Heading — word-by-word stagger */}
        <motion.h1
          aria-label="Your Gateway to World-Class Education Abroad"
          className="font-['Syne'] font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.02] text-white mb-6 flex flex-wrap justify-center gap-x-[0.28em] gap-y-2 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              aria-hidden="true"
              className={word.highlight ? 'text-gradient-amber' : ''}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="max-w-3xl text-base sm:text-lg md:text-xl text-white/72 font-['DM_Sans'] leading-relaxed mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
        >
          From India to the Globe — Study abroad, visa assistance,
          accommodation guidance, and career support for your international journey.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
        >
          <Button to="/contact" variant="primary" size="lg">
            Book Free Consultation
          </Button>
          <Button to="/destinations" variant="outline" size="lg">
            Explore Destinations
          </Button>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-white/40 text-xs font-['DM_Sans'] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#F5A623]/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
