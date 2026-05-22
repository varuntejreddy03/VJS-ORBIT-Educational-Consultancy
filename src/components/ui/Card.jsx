import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  dark = false,
  padding = 'p-6',
  delay = 0,
  ...props 
}) {
  const baseClasses = glass
    ? dark
      ? 'bg-white/5 backdrop-blur-xl border border-white/10'
      : 'bg-white/70 backdrop-blur-xl border border-white/50'
    : dark
      ? 'bg-[#0A0F2E] border border-white/10'
      : 'bg-white border border-gray-100'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`rounded-2xl ${padding} ${baseClasses} transition-shadow duration-300 ${
        hover ? 'hover:shadow-xl' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
