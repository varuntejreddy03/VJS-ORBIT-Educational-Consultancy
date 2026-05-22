import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { timelineSteps } from '../../data/universities'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const leftCardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const rightCardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const circleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

function TimelineCard({ step }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-['Space_Mono'] font-bold text-[#F5A623] uppercase tracking-wider">
          Step {step.step}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#F5A623]/30 to-transparent" />
      </div>
      <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-2 group-hover:text-[#F5A623] transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-[#6B7280] text-sm leading-relaxed font-['DM_Sans']">
        {step.description}
      </p>
    </div>
  )
}

function StepCircle({ number }) {
  return (
    <motion.div
      variants={circleVariants}
      className="relative z-10"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5A623] to-[#F7B84E] flex items-center justify-center shadow-lg shadow-[#F5A623]/25">
        <span className="text-[#0A0F2E] font-bold font-['Space_Mono'] text-sm">
          {String(number).padStart(2, '0')}
        </span>
      </div>
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#F5A623]/20 animate-ping" style={{ animationDuration: '3s' }} />
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FC] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#F5A623]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#00C9A7]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Your Journey to"
          highlight="Success"
          highlightColor="amber"
          subtitle="A proven 6-step process that has helped 500+ students achieve their dreams"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* ===== DESKTOP LAYOUT ===== */}
          <div className="hidden lg:block">
            {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#F5A623] via-[#F5A623]/60 to-[#F5A623]/10 rounded-full" />

            <div className="space-y-12">
              {timelineSteps.map((step, index) => {
                const isOdd = index % 2 === 0 // 0-indexed: first step is index 0 (odd step 1)
                return (
                  <div key={step.step} className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                    {/* Left column */}
                    <div className={isOdd ? '' : ''}>
                      {isOdd ? (
                        <motion.div variants={leftCardVariants}>
                          <TimelineCard step={step} />
                        </motion.div>
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center circle */}
                    <div className="flex justify-center">
                      <StepCircle number={step.step} />
                    </div>

                    {/* Right column */}
                    <div>
                      {!isOdd ? (
                        <motion.div variants={rightCardVariants}>
                          <TimelineCard step={step} />
                        </motion.div>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ===== MOBILE LAYOUT ===== */}
          <div className="lg:hidden relative">
            {/* Vertical line on the left */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F5A623] via-[#F5A623]/60 to-[#F5A623]/10 rounded-full" />

            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={index % 2 === 0 ? leftCardVariants : rightCardVariants}
                  className="flex items-start gap-5 pl-0"
                >
                  {/* Circle */}
                  <div className="flex-shrink-0">
                    <StepCircle number={step.step} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <TimelineCard step={step} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
