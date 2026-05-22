import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, FileCheck, PenTool, BookOpen, Award, Plane, CheckCircle, ArrowRight, MessageSquare, Clock, Users } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { services } from '../data/services'

const iconMap = { GraduationCap, FileCheck, PenTool, BookOpen, Award, Plane }
const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'Free session to understand your goals, preferences, and academic background', icon: MessageSquare },
  { num: '02', title: 'Planning', desc: 'Custom roadmap with university shortlist, timeline, and document checklist', icon: Clock },
  { num: '03', title: 'Application', desc: 'SOP writing, document prep, and submission management for all universities', icon: FileCheck },
  { num: '04', title: 'Success', desc: 'Visa assistance, pre-departure briefing, and settlement support abroad', icon: Award },
]

export default function ServicesPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 50%, #0D3B6E 100%)' }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00C9A7]">Services</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white mb-6">
            Our <span className="text-gradient-teal">Services</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive study abroad support tailored to your unique journey
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What We" highlight="Offer" highlightColor="amber" subtitle="End-to-end services designed to maximize your chances of success" />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const IconComp = iconMap[service.icon]
              const isAmber = service.color === 'amber'
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${isAmber ? 'bg-gradient-to-r from-[#F5A623] to-[#F7B84E]' : 'bg-gradient-to-r from-[#00C9A7] to-[#00E4BF]'}`} />
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${isAmber ? 'bg-[#F5A623]/10' : 'bg-[#00C9A7]/10'}`}>
                      {IconComp && <IconComp className={isAmber ? 'text-[#F5A623]' : 'text-[#00C9A7]'} size={30} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Syne'] font-bold text-xl text-[#1A1A2E] mb-2">{service.title}</h3>
                      <p className="text-[#6B7280] mb-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    {service.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle className={`flex-shrink-0 ${isAmber ? 'text-[#F5A623]' : 'text-[#00C9A7]'}`} size={16} />
                        <span className="text-sm text-[#6B7280]">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Button to="/contact" variant={isAmber ? 'primary' : 'secondary'} size="sm">
                      Get Started <ArrowRight size={16} />
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our" highlight="Process" highlightColor="teal" subtitle="A proven 4-step approach to your study abroad success" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#F5A623] to-[#F5A623]/20" />
                )}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F5A623] to-[#F7B84E] mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#F5A623]/20">
                  <span className="text-2xl font-['Space_Mono'] font-bold text-[#0A0F2E]">{step.num}</span>
                </div>
                <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7280]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats highlight */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { num: '98%', label: 'Visa Approval Rate', icon: CheckCircle },
              { num: '500+', label: 'Successful Applications', icon: Users },
              { num: '24/7', label: 'Student Support', icon: Clock },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <stat.icon className="text-[#00C9A7] mx-auto mb-3" size={32} />
                <div className="text-4xl font-['Space_Mono'] font-bold text-[#F5A623] mb-2">{stat.num}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-['Syne'] font-bold text-[#1A1A2E] mb-4">
            Let's Get <span className="text-gradient-amber">Started</span>
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-[#6B7280] mb-8">
            Book a free consultation and take the first step toward your dream university
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Button to="/contact" variant="primary" size="lg">Book Free Consultation</Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
