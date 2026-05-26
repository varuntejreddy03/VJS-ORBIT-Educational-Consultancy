import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { destinations } from '../../data/destinations'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
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

function DestinationCard({ destination }) {
  const isFeatured = destination.featured

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative rounded-2xl overflow-hidden min-h-[300px] cursor-pointer ${
        isFeatured
          ? 'md:col-span-2 border-2 border-[#F5A623] shadow-[0_0_30px_rgba(245,166,35,0.15)]'
          : 'border border-white/10'
      }`}
      style={{ minWidth: isFeatured ? '320px' : '280px' }}
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ background: destination.gradient }}
      />

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Animated shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full min-h-[300px] p-6 sm:p-7 flex flex-col justify-between">
        {/* Top row: Featured badge + Flag */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            {isFeatured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623] text-[#0A0F2E] text-xs font-bold font-['DM_Sans'] uppercase tracking-wider shadow-lg shadow-[#F5A623]/20 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0F2E] animate-pulse" />
                Featured
              </span>
            )}
          </div>
          <span className="text-3xl drop-shadow-lg select-none" role="img" aria-label={`${destination.name} flag`}>
            {destination.flag}
          </span>
        </div>

        {/* Bottom content */}
        <div className="mt-auto">
          {/* Country name */}
          <h3 className={`font-['Syne'] font-bold text-white leading-tight mb-2 ${
            isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}>
            {destination.name}
          </h3>

          {/* University count */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-white/60" strokeWidth={1.8} />
            <span className="text-white/70 text-sm font-['Space_Mono']">
              {destination.universities} Universities
            </span>
          </div>

          {/* Description (featured only) */}
          {isFeatured && (
            <p className="text-white/60 text-sm font-['DM_Sans'] leading-relaxed mb-4 max-w-md">
              {destination.description}
            </p>
          )}

          {/* Stats row for featured */}
          {isFeatured && destination.stats && (
            <div className="flex flex-wrap gap-3 mb-4">
              {Object.entries(destination.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <span className="text-white/50 text-[10px] font-['DM_Sans'] uppercase tracking-wider block">
                    {key === 'avgCost' ? 'Avg Cost' : key === 'workPermit' ? 'Work Permit' : 'Programs'}
                  </span>
                  <span className="text-white text-xs font-['Space_Mono'] font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Highlight tag + View Details */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span
              className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium font-['DM_Sans'] ${
                isFeatured
                  ? 'bg-[#F5A623]/20 text-[#F5A623] border border-[#F5A623]/30'
                  : 'bg-white/10 text-white/80 border border-white/10'
              }`}
            >
              {destination.highlight}
            </span>

            <Link
              to={destination.slug || '/destinations'}
              className="inline-flex items-center gap-1.5 text-sm font-semibold font-['DM_Sans'] text-white/80 hover:text-white group/link transition-colors duration-300"
            >
              View Details
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hover border glow effect */}
      {!isFeatured && (
        <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
      )}
    </motion.div>
  )
}

export default function Destinations() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0F2E] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#00C9A7]/3 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5A623]/3 rounded-full blur-[100px]" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Where Our Students"
          highlight="Study"
          highlightColor="teal"
          light={true}
          subtitle="Countries where we've successfully placed students"
        />

        {/* Student Placement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
        >
          {[
            { flag: '🇩🇪', country: 'Germany', count: '120+' },
            { flag: '🇬🇧', country: 'UK', count: '45+' },
            { flag: '🇺🇸', country: 'USA', count: '40+' },
            { flag: '🇨🇦', country: 'Canada', count: '35+' },
            { flag: '🇦🇺', country: 'Australia', count: '30+' },
            { flag: '🇳🇿', country: 'New Zealand', count: '30+' },
            { flag: '🇪🇺', country: 'Europe', count: '40+' },
          ].map((item) => (
            <div
              key={item.country}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="text-lg">{item.flag}</span>
              <span className="text-white/80 text-sm font-['DM_Sans'] font-medium">{item.country}</span>
              <span className="text-[#F5A623] text-sm font-['Space_Mono'] font-bold">{item.count}</span>
            </div>
          ))}
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              className="snap-start flex-shrink-0"
              style={{ width: destination.featured ? '320px' : '280px' }}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator for mobile */}
        <div className="md:hidden flex justify-center mt-4 gap-1">
          {destinations.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === 0 ? 'w-6 bg-[#00C9A7]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#00b396] text-white font-['DM_Sans'] font-semibold text-base hover:shadow-lg hover:shadow-[#00C9A7]/25 hover:gap-3.5 transition-all duration-300 group"
          >
            Explore All Destinations
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
