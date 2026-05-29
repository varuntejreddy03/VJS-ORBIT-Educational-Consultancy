import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { faqs } from '../../data/universities'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const answerVariants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.25, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.15 },
    },
  },
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FC] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(245,166,35,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,201,167,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked"
          highlight="Questions"
          highlightColor="amber"
          subtitle="Everything you need to know about your international journey with VJS Orbit Consultancy"
        />

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id
              const isLast = index === faqs.length - 1

              return (
                <motion.div
                  key={faq.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={!isLast ? 'border-b border-gray-100' : ''}
                >
                  <div
                    className={`transition-all duration-300 ${
                      isOpen ? 'border-l-4 border-[#F5A623] pl-4 sm:pl-5' : 'border-l-4 border-transparent pl-4 sm:pl-5'
                    }`}
                  >
                    {/* Question button */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between py-5 sm:py-6 text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-['Syne'] font-semibold text-base sm:text-lg pr-4 transition-colors duration-300 ${
                          isOpen ? 'text-[#0A0F2E]' : 'text-[#1A1A2E] group-hover:text-[#0A0F2E]'
                        }`}
                      >
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#F5A623]/10 text-[#F5A623]'
                            : 'bg-gray-100 text-[#6B7280] group-hover:bg-[#F5A623]/10 group-hover:text-[#F5A623]'
                        }`}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    {/* Answer with AnimatePresence */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`answer-${faq.id}`}
                          variants={answerVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="overflow-hidden"
                        >
                          <p className="text-[#6B7280] text-sm sm:text-base font-['DM_Sans'] leading-relaxed pb-5 sm:pb-6 pr-10">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom helper text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-8 text-[#6B7280] text-sm font-['DM_Sans']"
          >
            Still have questions?{' '}
            <a
              href="/contact"
              className="text-[#F5A623] font-semibold hover:underline underline-offset-2 transition-colors"
            >
              Get in touch with us
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
