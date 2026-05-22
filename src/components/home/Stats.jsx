import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Globe, CheckCircle, Building } from 'lucide-react'

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Students Guided' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries' },
  { icon: CheckCircle, value: 98, suffix: '%', label: 'Visa Success' },
  { icon: Building, value: 50, suffix: '+', label: 'Partner Universities' },
]

function useCountUp(target, isInView, duration = 2000) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    let frameId

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, target, duration])

  return count
}

function StatItem({ icon: Icon, value, suffix, label, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(value, isInView)

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center py-6 px-4"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Icon Circle */}
      <div className="w-14 h-14 rounded-full bg-[#00C9A7]/10 flex items-center justify-center mb-4 ring-1 ring-[#00C9A7]/20">
        <Icon className="w-6 h-6 text-[#00C9A7]" strokeWidth={2} />
      </div>

      {/* Number */}
      <span className="font-['Space_Mono'] text-3xl md:text-4xl font-bold text-[#F5A623] leading-none mb-2 tabular-nums">
        {count}
        {suffix}
      </span>

      {/* Label */}
      <span className="text-[#6B7280] text-sm font-['DM_Sans'] font-medium tracking-wide">
        {label}
      </span>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto -mt-8 md:-mt-12 bg-white rounded-2xl shadow-[0_8px_40px_rgba(10,15,46,0.1)] border border-gray-100/80"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-0 lg:divide-y-0 divide-x-0 lg:divide-x lg:divide-gray-200/70">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${
                i < 2
                  ? 'border-b border-gray-200/70 lg:border-b-0'
                  : ''
              } ${
                i % 2 === 0 ? 'border-r border-gray-200/70 lg:border-r-0' : ''
              }`}
            >
              <StatItem {...stat} index={i} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
