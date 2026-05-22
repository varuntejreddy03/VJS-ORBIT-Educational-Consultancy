import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import { universities } from '../../data/universities'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

function MarqueeRow({ direction = 'left' }) {
  // Double the items for seamless looping
  const items = [...universities, ...universities]

  return (
    <div className="flex whitespace-nowrap">
      <div
        className={direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}
        style={{
          display: 'flex',
          animation: `${direction === 'left' ? 'marquee' : 'marquee-reverse'} 40s linear infinite`
        }}
      >
        {items.map((uni, index) => (
          <span key={index} className="flex items-center flex-shrink-0 mx-2">
            <span className="text-[#F5A623] text-lg mr-2">🎓</span>
            <span className="text-[#6B7280] font-medium font-['DM_Sans'] text-sm sm:text-base">
              {uni}
            </span>
            <span className="text-gray-300 mx-4 text-xs">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function UniversityMarquee() {
  return (
    <section className="py-20 lg:py-24 bg-[#F7F8FC] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #0A0F2E 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Partner"
            highlight="Universities"
            highlightColor="amber"
            centered={true}
          />
        </div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Marquee container */}
          <div className="relative">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-[#F7F8FC] to-transparent z-10 pointer-events-none" />
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-l from-[#F7F8FC] to-transparent z-10 pointer-events-none" />

            {/* Row 1 */}
            <div className="overflow-hidden mb-4">
              <MarqueeRow direction="left" />
            </div>

            {/* Row 2 — opposite direction for visual interest */}
            <div className="overflow-hidden">
              <MarqueeRow direction="right" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Link
              to="/universities"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#F5A623] text-[#F5A623] font-['DM_Sans'] font-semibold text-sm hover:bg-[#F5A623] hover:text-[#0A0F2E] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#F5A623]/20"
            >
              View All Universities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Inline keyframe for reverse marquee */}
      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
