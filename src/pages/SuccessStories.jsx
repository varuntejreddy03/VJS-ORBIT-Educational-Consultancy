import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Quote, Star, Users, Globe, CheckCircle, ArrowRight, MapPin } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { testimonials } from '../data/testimonials'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const destinationStats = [
  { flag: '🇩🇪', country: 'Germany', students: 120, color: '#00C9A7' },
  { flag: '🇬🇧', country: 'United Kingdom', students: 45, color: '#F5A623' },
  { flag: '🇺🇸', country: 'United States', students: 40, color: '#00C9A7' },
  { flag: '🇨🇦', country: 'Canada', students: 35, color: '#F5A623' },
  { flag: '🇦🇺', country: 'Australia', students: 30, color: '#00C9A7' },
  { flag: '🇳🇿', country: 'New Zealand', students: 30, color: '#F5A623' },
  { flag: '🇪🇺', country: 'Europe', students: 40, color: '#00C9A7' },
]

export default function SuccessStories() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 50%, #0D3B6E 100%)' }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00C9A7]">Success Stories</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white mb-6">
            From India to the <span className="text-gradient-teal">World 🌍</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Real students, real results — hear from those who achieved their global dreams with VJS Abroad Consultancy
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-6">
            {[
              { num: '500+', label: 'Students Placed' },
              { num: '150+', label: 'To Germany', highlight: true },
              { num: '10+', label: 'Cities in India' },
              { num: '98%', label: 'Visa Rate' },
            ].map((stat) => (
              <div key={stat.label} className={`text-center min-w-[120px] p-4 rounded-xl ${stat.highlight ? 'bg-white/10 border border-[#F5A623]/30 px-6 shadow-lg shadow-[#F5A623]/10' : 'bg-white/5'}`}>
                <div className={`text-3xl font-['Space_Mono'] font-bold ${stat.highlight ? 'text-[#F5A623]' : 'text-[#00C9A7]'}`}>{stat.num}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Student" highlight="Testimonials" highlightColor="amber" subtitle="In their own words — hear from our successful students" />
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-gray-100 border-l-4 hover:shadow-xl transition-shadow duration-300"
                style={{ borderLeftColor: t.color }}
              >
                <Quote className="text-[#F5A623] mb-4" size={36} />
                <p className="text-lg lg:text-xl text-[#1A1A2E] italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="text-[#F5A623] fill-[#F5A623]" size={18} />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-['Syne'] font-bold"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-['Syne'] font-bold text-[#1A1A2E]">{t.name}</h4>
                    <p className="text-sm text-[#6B7280]">{t.university}</p>
                    <p className="text-xs text-[#F5A623] font-medium">{t.program}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Stats */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Where Our Students" highlight="Study" highlightColor="teal" subtitle="Countries where we've successfully placed students" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {destinationStats.map((dest, i) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="bg-[#F7F8FC] rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl block mb-3">{dest.flag}</span>
                <h3 className="font-['Syne'] font-bold text-sm text-[#1A1A2E] mb-1">{dest.country}</h3>
                <p className="font-['Space_Mono'] font-bold text-lg" style={{ color: dest.color }}>
                  {dest.students}+
                </p>
                <p className="text-xs text-[#6B7280]">students</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #00C9A7 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-['Syne'] font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-gray-300 mb-8">
            Join 500+ students who've achieved their dreams with VJS Abroad Consultancy
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Button to="/contact" variant="primary" size="lg">Book Free Consultation</Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}


