import { motion } from 'framer-motion'
import { Globe, GraduationCap, Compass, Plane } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const features = [
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Offices & reach in India, Germany, UK, Canada, Australia',
  },
  {
    icon: GraduationCap,
    title: 'Top Universities',
    description: 'Ivy League, Russell Group, TU9 German universities',
  },
  {
    icon: Compass,
    title: 'Expert Counselors',
    description: 'Certified advisors with deep industry expertise',
  },
  {
    icon: Plane,
    title: 'End-to-End Support',
    description: 'Application to arrival and settlement',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F7F8FC] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="why-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="#0A0F2E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-grid)" />
        </svg>
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F5A623]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose"
          highlight="VJS Abroad"
          highlightColor="teal"
          subtitle="Thousands of students trust us to navigate their global education journey with confidence and clarity."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(245,166,35,0.15)] cursor-default"
              >
                {/* Hover glow ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-[#F5A623]/20" />

                {/* Icon circle */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#F5A623]" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-['Syne'] font-bold text-[#1A1A2E] mb-3 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] font-['DM_Sans'] text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#F5A623]/[0.03] rounded-full group-hover:bg-[#F5A623]/[0.08] transition-colors duration-500" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
