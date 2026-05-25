import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, Shield, Star, Lightbulb, Users, Globe, Award } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const values = [
  { icon: Shield, title: 'Integrity', description: 'Honest advice and transparent processes in every interaction', color: 'amber' },
  { icon: Star, title: 'Excellence', description: 'Pursuing the highest standards in everything we do', color: 'teal' },
  { icon: Users, title: 'Student-First', description: 'Your success is our success — always putting students first', color: 'amber' },
  { icon: Lightbulb, title: 'Innovation', description: 'Leveraging technology and modern methods for better outcomes', color: 'teal' },
]

const team = [
  { name: 'Gundu Vinay Kumar', role: 'Founder & Director', initial: 'V', color: '#F5A623', bio: 'Co-founder directing strategic partnerships, Germany education, and global career opportunities.' },
  { name: 'Jagadeesh Yeddalapudi', role: 'Founder & Director', initial: 'J', color: '#00C9A7', bio: 'Co-founder directing university compliance, admissions processing, and student visas.' },
  { name: 'Sai Charan Yenugula', role: 'Founder & Director', initial: 'S', color: '#F5A623', bio: 'Co-founder directing student accommodation guidance, career placement, and logistics.' },
]

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 50%, #0D3B6E 100%)' }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F5A623]">About</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white mb-6">
            About <span className="text-gradient-amber">VJS Abroad</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering students and professionals worldwide since 2024 with personalized guidance and comprehensive abroad consultancy support
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-[#F5A623]/10 text-[#F5A623] rounded-full text-sm font-semibold mb-6">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-['Syne'] font-bold text-[#1A1A2E] mb-6">
                From a Vision in <span className="text-gradient-teal">Chittoor</span> to Global Impact
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Founded in 2024, VJS Abroad Consultancy was born from a simple yet powerful belief: every ambitious student and professional deserves access to world-class education, career opportunities, and relocation support abroad, regardless of their background or location.
                </p>
                <p>
                  Starting from our roots in Puthalapattu, Chittoor, Andhra Pradesh, we set out with a laser focus on Germany — offering support not just for tuition-free education at world-renowned universities, but also for career relocation, visa assistance, and accommodation search. Our deep expertise in the German education system, APS process, and student visa requirements quickly set us apart.
                </p>
                <p>
                  Today, our reach extends across the globe — helping individuals secure university admissions, work opportunities, visa approvals, and comfortable accommodations in the UK, USA, Canada, Australia, and Europe. Yet, Germany remains at the heart of everything we do.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative">
                <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 100%)' }}>
                  <h3 className="font-['Syne'] font-bold text-2xl mb-8 text-center">Our Impact So Far</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { number: '500+', label: 'Students Guided' },
                      { number: '15+', label: 'Countries' },
                      { number: '98%', label: 'Visa Success' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-['Space_Mono'] font-bold text-[#F5A623] mb-2">{stat.number}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-400">Trusted by students across India since 2024</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#F5A623]/10 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Mission &" highlight="Vision" highlightColor="amber" subtitle="Driven by purpose, guided by values" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-[#F7F8FC] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-6">
                <Target className="text-[#F5A623]" size={28} />
              </div>
              <h3 className="font-['Syne'] font-bold text-xl text-[#1A1A2E] mb-4">Our Mission</h3>
              <p className="text-[#6B7280] leading-relaxed">
                To democratize access to world-class international education through personalized guidance, transparent processes, and unwavering student support.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }} className="bg-[#F7F8FC] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-6">
                <Eye className="text-[#00C9A7]" size={28} />
              </div>
              <h3 className="font-['Syne'] font-bold text-xl text-[#1A1A2E] mb-4">Our Vision</h3>
              <p className="text-[#6B7280] leading-relaxed">
                To become India's most trusted abroad consultancy, known for integrity, innovation, and an unparalleled commitment to student and career success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Core" highlight="Values" highlightColor="teal" subtitle="The principles that guide everything we do" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${value.color === 'amber' ? 'bg-[#F5A623]/10' : 'bg-[#00C9A7]/10'}`}>
                  <value.icon className={value.color === 'amber' ? 'text-[#F5A623]' : 'text-[#00C9A7]'} size={28} />
                </div>
                <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-2">{value.title}</h3>
                <p className="text-sm text-[#6B7280]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Meet Our Expert" highlight="Team" highlightColor="amber" subtitle="Dedicated professionals committed to your success" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-[#F7F8FC] rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-['Syne'] font-bold" style={{ background: member.color }}>
                  {member.initial}
                </div>
                <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-1">{member.name}</h3>
                <p className="text-sm text-[#F5A623] font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-[#6B7280]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-['Syne'] font-bold text-xl text-[#1A1A2E] mb-3">Connect With Us</h3>
          <p className="text-sm text-gray-500 mb-6">Stay updated with the latest visa guidelines, admissions intakes, and success stories.</p>
          <div className="flex justify-center items-center gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#F5A623] hover:text-[#0A0F2E] transition-all">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/vjs_orbit?igsh=MWJ5NjRkdnJrNzFlYw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform">
              <FaInstagram className="text-white text-sm" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#F5A623] hover:text-[#0A0F2E] transition-all">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #00C9A7 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-['Syne'] font-bold text-white mb-4">
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-gray-300 mb-8">
            Let our expert team guide you toward your dream university, career, and relocation abroad
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Button to="/contact" variant="primary" size="lg">Book Free Consultation</Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
