import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, FileCheck, PenTool, BookOpen, Award, Plane, CheckCircle2, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

const iconMap = { GraduationCap, FileCheck, PenTool, BookOpen, Award, Plane }

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
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

function ServiceCard({ service, index }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const IconComponent = iconMap[service.icon]
  const isAmber = service.color === 'amber'

  const iconBg = isAmber
    ? 'bg-[#F5A623]/10 text-[#F5A623]'
    : 'bg-[#00C9A7]/10 text-[#00C9A7]'

  const accentBorder = isAmber
    ? 'border-[#F5A623]/20'
    : 'border-[#00C9A7]/20'

  const accentGradient = isAmber
    ? 'from-[#F5A623] to-[#f7c26b]'
    : 'from-[#00C9A7] to-[#34d9b8]'

  const accentText = isAmber ? 'text-[#F5A623]' : 'text-[#00C9A7]'

  return (
    <motion.div
      variants={cardVariants}
      className="group [perspective:1200px] min-h-[300px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full min-h-[300px] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ===== FRONT SIDE ===== */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-7 flex flex-col">
          {/* Decorative gradient line at top */}
          <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${accentGradient}`} />

          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
            {IconComponent && <IconComponent className="w-7 h-7" strokeWidth={1.8} />}
          </div>

          {/* Title */}
          <h3 className="text-xl font-['Syne'] font-bold text-[#1A1A2E] mb-3 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[#6B7280] font-['DM_Sans'] text-[15px] leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Hover hint */}
          <div className={`mt-5 flex items-center gap-2 text-sm font-medium ${accentText} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            <span className="font-['DM_Sans']">Hover to explore</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Bottom decorative dots */}
          <div className="absolute bottom-4 right-4 flex gap-1 opacity-20">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accentGradient}`} />
            ))}
          </div>
        </div>

        {/* ===== BACK SIDE ===== */}
        <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0A0F2E] rounded-2xl shadow-xl p-7 flex flex-col border ${accentBorder}`}>
          {/* Decorative gradient line at top */}
          <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${accentGradient}`} />

          {/* Back header */}
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
              {IconComponent && <IconComponent className="w-5 h-5" strokeWidth={1.8} />}
            </div>
            <h4 className="text-lg font-['Syne'] font-bold text-white">
              {service.title}
            </h4>
          </div>

          {/* Detail items */}
          <ul className="space-y-3 flex-1">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accentText}`}
                  strokeWidth={2}
                />
                <span className="text-gray-300 text-sm font-['DM_Sans'] leading-snug">
                  {detail}
                </span>
              </li>
            ))}
          </ul>

          {/* Learn More link */}
          <Link
            to="/services"
            className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold font-['DM_Sans'] ${accentText} hover:gap-3 transition-all duration-300`}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Decorative background circle */}
          <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${isAmber ? 'bg-[#F5A623]/5' : 'bg-[#00C9A7]/5'} blur-2xl`} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F8FC] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#F5A623]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#00C9A7]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our"
          highlight="Services"
          highlightColor="amber"
          subtitle="Comprehensive support for every step of your study abroad journey"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
