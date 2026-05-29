import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { GraduationCap, Banknote, Briefcase, FlaskConical, FileText, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { germanUniversities } from '../data/destinations'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const whyGermany = [
  { icon: GraduationCap, title: 'Tuition-Free Public Universities', desc: 'Most public universities charge only €150-350 per semester in administrative fees — no tuition!', color: 'amber' },
  { icon: Briefcase, title: 'Strong Economy', desc: "Europe's largest economy with excellent job prospects in engineering, IT, automotive, and more", color: 'teal' },
  { icon: Shield, title: 'Post-Study Work Visa', desc: '18-month residence permit to find employment after graduation — one of the best in Europe', color: 'amber' },
  { icon: FlaskConical, title: 'Research Excellence', desc: 'Home to Max Planck, Fraunhofer, and world-leading research institutes across all disciplines', color: 'teal' },
]

const apsSteps = [
  { step: 1, title: 'Check APS Eligibility', desc: 'Verify if you need an APS certificate based on your nationality and academic background' },
  { step: 2, title: 'Collect Required Documents', desc: 'Gather all academic certificates, transcripts, mark sheets, and supporting documents' },
  { step: 3, title: 'Prepare APS Application', desc: 'Fill out the online application form on the APS India portal with accurate details' },
  { step: 4, title: 'Review & Verify Documents', desc: 'Cross-check all documents for completeness, accuracy, and proper attestation' },
  { step: 5, title: 'Pay APS Fee', desc: 'Complete the payment of the APS processing fee (currently ₹18,000)' },
  { step: 6, title: 'Submit Application', desc: 'Submit your complete application package to the APS office in New Delhi' },
  { step: 7, title: 'Track APS Status', desc: 'Monitor your application status online and respond to any queries promptly' },
  { step: 8, title: 'Receive APS Certificate', desc: 'Get your verified APS certificate within 4-8 weeks of successful processing' },
  { step: 9, title: 'Apply to Universities', desc: 'Use your APS certificate to apply to German universities via uni-assist or directly' },
  { step: 10, title: 'Proceed with Student Visa', desc: 'With university admission and APS in hand, apply for your German student visa' },
]

const livingCosts = [
  { category: 'Rent', range: '€350-500', percent: 55, color: '#F5A623' },
  { category: 'Food', range: '€200-250', percent: 28, color: '#00C9A7' },
  { category: 'Health Insurance', range: '€110', percent: 13, color: '#F5A623' },
  { category: 'Transport', range: '€50-100', percent: 10, color: '#00C9A7' },
  { category: 'Miscellaneous', range: '€100-150', percent: 17, color: '#F5A623' },
]

const visaTypes = [
  { title: 'Student Visa', desc: 'For students with a confirmed university admission letter. Valid for the duration of your program.', badge: 'Most Common' },
  { title: 'Language Course Visa', desc: 'For students enrolled in German language courses as preparation for university studies.', badge: 'Pre-Study' },
  { title: 'Student Applicant Visa', desc: 'For students who need to be in Germany to apply to universities in person.', badge: 'Application Phase' },
]

function CostBar({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="w-36 text-sm font-medium text-[#1A1A2E] text-right">{item.category}</div>
      <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${item.percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
          className="h-full rounded-full flex items-center justify-end pr-3"
          style={{ background: `linear-gradient(90deg, ${item.color}80, ${item.color})`, minWidth: item.percent > 10 ? 'auto' : '60px' }}
        >
          <span className="text-xs font-['Space_Mono'] font-bold text-[#0A0F2E]">{item.range}</span>
        </motion.div>
      </div>
    </div>
  )
}

export default function Germany() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #0D3B6E 50%, #1B2459 100%)' }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#F5A623]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#00C9A7]/8 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-[#F5A623] transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-[#F5A623]">Germany</span>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-7xl mb-6">🇩🇪</motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white mb-6">
            Study in <span className="text-gradient-amber">Germany</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.25 }} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Free Education, World-Class Research, Unlimited Opportunities
          </motion.p>
        </div>
      </section>

      {/* Why Germany */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose" highlight="Germany?" highlightColor="amber" subtitle="Germany offers unmatched value for international students" />
          <div className="grid sm:grid-cols-2 gap-6">
            {whyGermany.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 flex gap-5"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color === 'amber' ? 'bg-[#F5A623]/10' : 'bg-[#00C9A7]/10'}`}>
                  <item.icon className={item.color === 'amber' ? 'text-[#F5A623]' : 'text-[#00C9A7]'} size={28} />
                </div>
                <div>
                  <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-2">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APS Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The APS" highlight="Process" highlightColor="teal" subtitle="A step-by-step guide to Germany's Academic Evaluation Centre" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.div {...fadeInUp} className="bg-[#F7F8FC] rounded-2xl p-8 border border-gray-100 mb-8">
                <h3 className="font-['Syne'] font-bold text-xl text-[#1A1A2E] mb-4">What is APS?</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  APS (Akademische Prüfstelle) is a document verification certificate required by Indian students applying to German universities. It is not an exam — it is a process where you submit your academic documents to the German Embassy's verification center. VJS Orbit Consultancy provides complete end-to-end APS application support, document preparation, and appointment guidance.
                </p>
              </motion.div>
              <motion.div {...fadeInUp} className="bg-[#F7F8FC] rounded-2xl p-8 border border-gray-100">
                <h3 className="font-['Syne'] font-bold text-xl text-[#1A1A2E] mb-4">Required Documents</h3>
                <div className="space-y-2">
                  {['Degree certificates & mark sheets', 'Academic transcripts (all semesters)', 'Valid passport', 'Passport-size photographs', 'CV / Resume', 'Application form (filled online)', 'Fee payment receipt (₹18,000)'].map((doc) => (
                    <div key={doc} className="flex items-center gap-3">
                      <CheckCircle className="text-[#00C9A7] flex-shrink-0" size={16} />
                      <span className="text-sm text-[#6B7280]">{doc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="space-y-4">
              {apsSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5A623] to-[#F7B84E] flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-sm font-['Space_Mono'] font-bold text-[#0A0F2E]">{s.step}</span>
                  </div>
                  <div className="bg-[#F7F8FC] rounded-xl p-5 border border-gray-100 flex-1">
                    <h4 className="font-['Syne'] font-bold text-[#1A1A2E] mb-1">{s.title}</h4>
                    <p className="text-sm text-[#6B7280]">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div {...fadeInUp} className="pt-4">
                <Button to="/contact" variant="primary" size="md">Book APS Consultation</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Top German" highlight="Universities" highlightColor="amber" light={true} subtitle="World-renowned institutions offering excellent programs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanUniversities.map((uni, i) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl overflow-hidden min-h-[220px] relative group cursor-pointer"
                style={{ background: uni.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="inline-block px-3 py-1 bg-[#F5A623]/20 backdrop-blur-sm text-[#F5A623] rounded-full text-xs font-bold mb-2">
                    {uni.ranking}
                  </span>
                  <h3 className="font-['Syne'] font-bold text-xl text-white mb-1">{uni.name}</h3>
                  <p className="text-sm text-gray-300">{uni.location}</p>
                  <p className="text-xs text-gray-400 mt-2">{uni.programs}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Living Costs" highlight="Breakdown" highlightColor="teal" subtitle="Estimated monthly expenses for students in Germany" />
          <div className="bg-[#F7F8FC] rounded-2xl p-8 border border-gray-100 space-y-5">
            {livingCosts.map((item, i) => (
              <CostBar key={item.category} item={item} index={i} />
            ))}
            <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="font-['Syne'] font-bold text-lg text-[#1A1A2E]">Total Estimated</span>
              <span className="font-['Space_Mono'] font-bold text-2xl text-[#F5A623]">~€850/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="German Student" highlight="Visa Types" highlightColor="amber" subtitle="Understanding the right visa for your situation" />
          <div className="grid sm:grid-cols-3 gap-6">
            {visaTypes.map((visa, i) => (
              <motion.div
                key={visa.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <span className="inline-block px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] rounded-full text-xs font-bold mb-4">{visa.badge}</span>
                <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-3">{visa.title}</h3>
                <p className="text-sm text-[#6B7280]">{visa.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #00C9A7 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-['Syne'] font-bold text-white mb-4">
            Start Your Germany Journey Today
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-gray-300 mb-8">
            Let our Germany specialists guide you from APS to Ankunft (arrival)
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Button to="/contact" variant="primary" size="lg">Book Free Consultation</Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
