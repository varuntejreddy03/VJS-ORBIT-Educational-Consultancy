import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: BookOpen,
    title: 'Free / Low Tuition',
    description: 'Public universities charge minimal administrative fees',
  },
  {
    icon: ShieldCheck,
    title: 'APS Guidance',
    description: 'Expert support through the Akademische Prüfstelle process',
  },
  {
    icon: TrendingUp,
    title: 'High ROI Careers',
    description: "Access to Europe's largest economy post-graduation",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const globeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5,
    },
  },
}

export default function GermanyHighlight() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0F2E] overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F5A623]/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00C9A7]/[0.04] blur-[130px]" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="de-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#de-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column — Heading & Description */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-sm font-['DM_Sans'] font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              Featured Destination
            </motion.span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white leading-[1.1] mb-6">
              Study in
              <br />
              <span className="text-gradient-amber">Germany</span>{' '}
              <span className="text-5xl lg:text-6xl" role="img" aria-label="Germany flag">
                🇩🇪
              </span>
            </h2>

            <p className="text-gray-400 font-['DM_Sans'] text-lg leading-relaxed max-w-lg mb-10">
              Germany offers world-class, tuition-free education at its renowned public universities.
              With a thriving economy, cutting-edge research, and a rich cultural landscape, it is one
              of the most rewarding destinations for international students.
            </p>

            {/* CTA Button */}
            <Link to="/germany">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#E8951D] text-[#0A0F2E] font-['Syne'] font-bold text-lg shadow-[0_8px_32px_rgba(245,166,35,0.3)] hover:shadow-[0_12px_40px_rgba(245,166,35,0.45)] transition-shadow duration-300"
              >
                Explore Germany
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column — Benefit Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-5"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  variants={cardVariants}
                  className="group relative bg-white/[0.05] backdrop-blur-md rounded-2xl p-6 lg:p-7 border border-white/[0.08] hover:border-[#00C9A7]/30 transition-all duration-500 hover:bg-white/[0.08]"
                >
                  <div className="flex items-start gap-5">
                    {/* Teal icon circle */}
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#00C9A7]/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#00C9A7]" strokeWidth={1.8} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg lg:text-xl font-['Syne'] font-bold text-white mb-1.5 tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 font-['DM_Sans'] text-sm lg:text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(0,201,167,0.05)]" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Animated Abstract Globe */}
        <motion.div
          variants={globeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-20 lg:mt-28 flex justify-center"
        >
          <div className="relative w-full max-w-3xl aspect-[3/1]">
            <svg
              viewBox="0 0 800 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <radialGradient id="globe-bg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0A0F2E" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="germany-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F5A623" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#F5A623" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="line-grad" x1="0" y1="0" x2="800" y2="0">
                  <stop offset="0%" stopColor="#00C9A7" stopOpacity="0" />
                  <stop offset="30%" stopColor="#00C9A7" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#F5A623" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#00C9A7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00C9A7" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Globe base shape */}
              <ellipse cx="400" cy="130" rx="350" ry="120" fill="url(#globe-bg)" />

              {/* Latitude lines */}
              {[70, 100, 130, 160, 190].map((y, i) => (
                <ellipse
                  key={`lat-${i}`}
                  cx="400"
                  cy="130"
                  rx={320 - Math.abs(y - 130) * 1.5}
                  ry={8}
                  stroke="#00C9A7"
                  strokeOpacity="0.08"
                  strokeWidth="0.8"
                  fill="none"
                  transform={`translate(0, ${y - 130})`}
                />
              ))}

              {/* Longitude arcs */}
              {[300, 350, 400, 450, 500].map((x, i) => (
                <ellipse
                  key={`lon-${i}`}
                  cx={x}
                  cy="130"
                  rx="12"
                  ry="110"
                  stroke="#00C9A7"
                  strokeOpacity="0.06"
                  strokeWidth="0.8"
                  fill="none"
                />
              ))}

              {/* Continents as abstract dots — Europe region */}
              {/* Scattered dots representing landmasses */}
              {[
                { cx: 350, cy: 90, r: 3, o: 0.15 },
                { cx: 365, cy: 95, r: 2.5, o: 0.12 },
                { cx: 380, cy: 88, r: 4, o: 0.1 },
                { cx: 340, cy: 105, r: 3, o: 0.1 },
                { cx: 355, cy: 100, r: 2, o: 0.12 },
                { cx: 395, cy: 92, r: 3, o: 0.12 },
                /* Asia */
                { cx: 480, cy: 95, r: 5, o: 0.08 },
                { cx: 500, cy: 100, r: 4, o: 0.08 },
                { cx: 520, cy: 90, r: 3, o: 0.06 },
                { cx: 510, cy: 110, r: 4, o: 0.07 },
                /* Americas */
                { cx: 200, cy: 100, r: 4, o: 0.08 },
                { cx: 220, cy: 110, r: 3, o: 0.07 },
                { cx: 210, cy: 130, r: 5, o: 0.06 },
                { cx: 230, cy: 145, r: 3, o: 0.05 },
                /* Africa */
                { cx: 390, cy: 140, r: 4, o: 0.06 },
                { cx: 400, cy: 155, r: 3, o: 0.06 },
                { cx: 380, cy: 150, r: 3.5, o: 0.05 },
                /* Australia */
                { cx: 570, cy: 160, r: 4, o: 0.06 },
                { cx: 585, cy: 165, r: 3, o: 0.05 },
              ].map((dot, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  fill="#00C9A7"
                  fillOpacity={dot.o}
                />
              ))}

              {/* Germany highlight — amber glow */}
              <circle cx="375" cy="93" r="28" fill="url(#germany-glow)" />
              <circle cx="375" cy="93" r="6" fill="#F5A623" fillOpacity="0.7">
                <animate
                  attributeName="r"
                  values="5;8;5"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fillOpacity"
                  values="0.7;0.4;0.7"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="375" cy="93" r="3" fill="#F5A623" fillOpacity="0.9" />

              {/* Pulse rings around Germany */}
              <circle cx="375" cy="93" r="14" stroke="#F5A623" strokeWidth="0.8" fill="none" strokeOpacity="0.3">
                <animate
                  attributeName="r"
                  values="14;30;14"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="strokeOpacity"
                  values="0.3;0;0.3"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Connection lines from Germany to other regions */}
              <line x1="375" y1="93" x2="210" y2="115" stroke="#F5A623" strokeOpacity="0.1" strokeWidth="0.6" strokeDasharray="4 4">
                <animate attributeName="strokeOpacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="375" y1="93" x2="500" y2="100" stroke="#F5A623" strokeOpacity="0.1" strokeWidth="0.6" strokeDasharray="4 4">
                <animate attributeName="strokeOpacity" values="0.1;0.25;0.1" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="375" y1="93" x2="570" y2="160" stroke="#F5A623" strokeOpacity="0.1" strokeWidth="0.6" strokeDasharray="4 4">
                <animate attributeName="strokeOpacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
              </line>

              {/* Horizon line */}
              <line x1="50" y1="230" x2="750" y2="230" stroke="url(#line-grad)" strokeWidth="1" />

              {/* "Germany" label */}
              <text x="375" y="60" textAnchor="middle" fill="#F5A623" fillOpacity="0.6" fontSize="11" fontFamily="Syne, sans-serif" fontWeight="600" letterSpacing="2">
                GERMANY
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
