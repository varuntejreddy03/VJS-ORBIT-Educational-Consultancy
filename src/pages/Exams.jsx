import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Target, BookOpen, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { examTypes } from '../data/universities'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const prepTips = [
  { icon: Clock, title: 'Start Early', desc: 'Begin preparation at least 3-4 months before your test date for optimal results', color: 'amber' },
  { icon: Target, title: 'Practice Consistently', desc: 'Dedicate 2-3 hours daily to focused practice with quality materials', color: 'teal' },
  { icon: BookOpen, title: 'Mock Tests', desc: 'Take full-length mock tests regularly to build stamina and test-day confidence', color: 'amber' },
]

const coaching = ['Personalized study plans tailored to your target score', 'Expert instructors with proven track records', 'Comprehensive mock test series with detailed analysis', 'Score improvement guarantee', 'Flexible scheduling — weekday and weekend batches']

export default function Exams() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 50%, #0D3B6E 100%)' }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F5A623]">Exams</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white mb-6">
            Exam <span className="text-gradient-amber">Preparation</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert guidance for IELTS, APS, TOEFL, GRE, and PTE
          </motion.p>
        </div>
      </section>

      {/* Exam Types */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Exam" highlight="Types" highlightColor="teal" subtitle="Comprehensive preparation for all major standardized tests" />
          <div className="space-y-8">
            {examTypes.map((exam, i) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`rounded-2xl p-8 lg:p-10 border shadow-md ${i % 2 === 0 ? 'bg-white border-gray-100' : 'bg-[#FFF9EE] border-[#F5A623]/10'}`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-5xl font-['Syne'] font-bold text-[#1A1A2E]">{exam.name}</h3>
                      {exam.id === 'aps' && (
                        <span className="inline-block px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] rounded-full text-xs font-bold">🇩🇪 Germany Required</span>
                      )}
                    </div>
                    <p className="text-sm text-[#6B7280] mb-2">{exam.fullName}</p>
                    <p className="text-[#6B7280] leading-relaxed">{exam.description}</p>
                  </div>
                  <div className="lg:w-1/3">
                    <h4 className="font-['Syne'] font-bold text-sm text-[#1A1A2E] mb-4 uppercase tracking-wider">Exam Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F7F8FC] rounded-xl p-4">
                        <span className="text-xs text-[#6B7280] block mb-1">Duration</span>
                        <span className="font-['Space_Mono'] font-bold text-sm text-[#1A1A2E]">{exam.duration}</span>
                      </div>
                      <div className="bg-[#F7F8FC] rounded-xl p-4">
                        <span className="text-xs text-[#6B7280] block mb-1">Scoring</span>
                        <span className="font-['Space_Mono'] font-bold text-sm text-[#1A1A2E]">{exam.scoring}</span>
                      </div>
                      <div className="col-span-2 bg-[#F7F8FC] rounded-xl p-4">
                        <span className="text-xs text-[#6B7280] block mb-1">Required Score</span>
                        <span className="font-['Space_Mono'] font-bold text-sm text-[#F5A623]">{exam.requiredScore}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs text-[#6B7280] block mb-2">Sections</span>
                      <div className="flex flex-wrap gap-2">
                        {exam.sections.map((s) => (
                          <span key={s} className="px-3 py-1 bg-[#00C9A7]/10 text-[#00C9A7] rounded-full text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <h4 className="font-['Syne'] font-bold text-sm text-[#1A1A2E] mb-4 uppercase tracking-wider flex items-center gap-2">
                      <Lightbulb size={16} className="text-[#F5A623]" /> Tips
                    </h4>
                    <div className="space-y-2">
                      {exam.tips.map((tip) => (
                        <div key={tip} className="flex items-start gap-2">
                          <CheckCircle className="text-[#00C9A7] flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-sm text-[#6B7280]">{tip}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button to="/contact" variant={i % 2 === 0 ? 'primary' : 'secondary'} size="sm">
                        Start Preparation <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prep Tips */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Preparation" highlight="Strategy" highlightColor="amber" subtitle="Proven strategies to maximize your test scores" />
          <div className="grid sm:grid-cols-3 gap-6">
            {prepTips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-[#F7F8FC] rounded-2xl p-8 border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${tip.color === 'amber' ? 'bg-[#F5A623]/10' : 'bg-[#00C9A7]/10'}`}>
                  <tip.icon className={tip.color === 'amber' ? 'text-[#F5A623]' : 'text-[#00C9A7]'} size={28} />
                </div>
                <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-2">{tip.title}</h3>
                <p className="text-sm text-[#6B7280]">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Coaching */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-['Syne'] font-bold text-white mb-4">
              Our <span className="text-gradient-teal">Coaching</span> Advantage
            </h2>
            <p className="text-lg text-gray-400">What makes VJS Orbit's test preparation different</p>
          </motion.div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="space-y-4">
              {coaching.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-[#F5A623]" size={16} />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-['Syne'] font-bold text-[#1A1A2E] mb-4">
            Ready to Ace Your <span className="text-gradient-amber">Exam?</span>
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-[#6B7280] mb-8">
            Enroll in our test preparation program and achieve your target score
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Button to="/contact" variant="primary" size="lg">Enroll in Test Prep</Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
