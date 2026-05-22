import { motion } from 'framer-motion'

export default function SectionHeading({ 
  title, 
  highlight, 
  highlightColor = 'amber',
  subtitle, 
  centered = true, 
  light = false,
  className = '' 
}) {
  const highlightClass = highlightColor === 'amber' ? 'text-gradient-amber' : 'text-gradient-teal'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-[Syne] font-bold mb-4 ${light ? 'text-white' : 'text-[#1A1A2E]'}`}>
        {title}{' '}
        {highlight && <span className={highlightClass}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-400' : 'text-[#6B7280]'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
