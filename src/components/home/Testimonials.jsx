import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="min-w-[300px] sm:min-w-[350px] max-w-[400px] snap-center flex-shrink-0">
      <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl hover:border-[#F5A623]/20 transition-all duration-400 group relative overflow-hidden">
        {/* Decorative quote icon */}
        <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <Quote className="w-16 h-16 text-[#F5A623]" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-[#F5A623] fill-[#F5A623]"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="italic text-[#1A1A2E] text-sm leading-relaxed font-['DM_Sans'] flex-1 mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />

        {/* Author info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
            style={{ backgroundColor: testimonial.color + '20', color: testimonial.color }}
          >
            <span className="font-['Syne'] font-bold text-base">
              {testimonial.initial}
            </span>
          </div>

          {/* Name & university */}
          <div className="min-w-0">
            <h4 className="font-['Syne'] font-semibold text-[#1A1A2E] text-sm truncate">
              {testimonial.name}
            </h4>
            <p className="text-[#6B7280] text-xs leading-snug font-['DM_Sans'] truncate">
              {testimonial.university}
            </p>
            <p className="text-[#6B7280] text-xs font-['DM_Sans'] truncate">
              {testimonial.program}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const totalCards = testimonials.length

  const scrollToIndex = useCallback((index) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll('[data-card]')
    if (cards[index]) {
      const cardLeft = cards[index].offsetLeft
      const containerWidth = container.offsetWidth
      const cardWidth = cards[index].offsetWidth
      const scrollPos = cardLeft - (containerWidth / 2) + (cardWidth / 2)
      container.scrollTo({ left: scrollPos, behavior: 'smooth' })
    }
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalCards
        scrollToIndex(next)
        return next
      })
    }, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, totalCards, scrollToIndex])

  // Track scroll position to update active dot
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const cards = container.querySelectorAll('[data-card]')
      const containerCenter = container.scrollLeft + container.offsetWidth / 2
      let closestIndex = 0
      let closestDistance = Infinity

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2
        const distance = Math.abs(containerCenter - cardCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      })

      setActiveIndex(closestIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDotClick = (index) => {
    setActiveIndex(index)
    scrollToIndex(index)
  }

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#00C9A7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our"
            highlight="Students Say"
            highlightColor="teal"
            subtitle="Hear from students who achieved their dreams with VJS Abroad Consultancy"
          />
        </div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Carousel container */}
          <div className="relative">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrollable row */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-8 sm:px-16 lg:px-24 pb-4 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} data-card>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 h-2.5 bg-gradient-to-r from-[#00C9A7] to-[#00E4BF] shadow-sm shadow-[#00C9A7]/30'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
