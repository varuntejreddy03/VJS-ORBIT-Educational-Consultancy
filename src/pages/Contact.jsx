import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Send } from 'lucide-react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Button from '../components/ui/Button'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    color: 'amber',
    items: [
      { flag: '🇩🇪', text: '+49 15560001143 (Primary)', href: 'tel:+4915560001143' },
      { flag: '🇮🇳', text: '+91 9347988545', href: 'tel:+919347988545' },
      { flag: '🇩🇪', text: '+49 15511015290', href: 'tel:+4915511015290' },
      { flag: '🇩🇪', text: '+49 15510861137', href: 'tel:+4915510861137' },
    ]
  },
  {
    icon: Mail,
    title: 'Email',
    color: 'teal',
    items: [
      { text: 'info@vjsorbit.com', href: 'mailto:info@vjsorbit.com' },
      { text: 'support@vjsorbit.com', href: 'mailto:support@vjsorbit.com' },
    ]
  },
  {
    icon: MapPin,
    title: 'Office Address',
    color: 'amber',
    items: [
      { text: 'Ramgampeta Cross, Near Ramgampeta X Cross Junction, Puthalapattu, Chittoor – 517124, Andhra Pradesh, India' },
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    color: 'teal',
    items: [
      { text: 'Monday – Friday: 11AM – 9PM' },
      { text: 'Saturday – Sunday: 10AM – 1PM' },
    ]
  },
]

const countries = ['Germany', 'United Kingdom', 'United States', 'Canada', 'Australia', 'New Zealand', 'Other']

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email format'
    if (!formData.phone.trim()) errs.phone = 'Phone is required'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    
    // Simulate submission delay
    await new Promise(r => setTimeout(r, 1200))
    
    // Format the WhatsApp message with form details
    const whatsappMessage = `Hello VJS Abroad Consultancy! 👋

*New Contact Form Inquiry*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🌍 *Country of Interest:* ${formData.country || 'Not specified'}
💬 *Message:* ${formData.message || 'No message provided'}
━━━━━━━━━━━━━━━━━━━━`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/4915560001143?text=${encodedMessage}`;

    // Open WhatsApp in a new tab to send the data
    window.open(whatsappUrl, '_blank');

    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0F2E 0%, #1B2459 50%, #0D3B6E 100%)' }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F5A623]">Contact</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-['Syne'] font-bold text-white mb-6">
            Contact <span className="text-gradient-amber">Us</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our expert counselors for a free consultation
          </motion.p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div {...fadeInUp} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
                <h2 className="font-['Syne'] font-bold text-2xl text-[#1A1A2E] mb-2">Send Us a Message</h2>
                <p className="text-[#6B7280] mb-8">Fill in the form and we'll get back to you within 24 hours</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#00C9A7]/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-[#00C9A7]" size={40} />
                    </div>
                    <h3 className="font-['Syne'] font-bold text-2xl text-[#1A1A2E] mb-3">Thank You!</h3>
                    <p className="text-[#6B7280] max-w-md mx-auto mb-4">
                      Your message has been processed! We have opened WhatsApp to send your inquiry directly to our Germany primary number (+49 15560001143).
                    </p>
                    <p className="text-sm text-[#6B7280] max-w-md mx-auto mb-6">
                      If the WhatsApp window did not open, click the button below to send it manually:
                    </p>
                    <div className="mb-8 flex justify-center">
                      <a
                        href={`https://wa.me/4915560001143?text=${encodeURIComponent(`Hello VJS Abroad Consultancy! 👋

*New Contact Form Inquiry*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🌍 *Country of Interest:* ${formData.country || 'Not specified'}
💬 *Message:* ${formData.message || 'No message provided'}
━━━━━━━━━━━━━━━━━━━━`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-[0_4px_12px_rgba(37,211,102,0.25)] hover:scale-[1.02]"
                      >
                        <FaWhatsapp size={20} />
                        Send via WhatsApp
                      </a>
                    </div>
                    <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', country: '', message: '' }) }} className="text-[#F5A623] font-semibold hover:underline">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-['Syne'] font-medium text-[#1A1A2E] mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className={`w-full px-4 py-3.5 bg-gray-50 rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#F5A623] focus:ring-[#F5A623]'} focus:ring-2 focus:ring-opacity-20 outline-none transition-all`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-['Syne'] font-medium text-[#1A1A2E] mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={e => handleChange('email', e.target.value)}
                          className={`w-full px-4 py-3.5 bg-gray-50 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#F5A623] focus:ring-[#F5A623]'} focus:ring-2 focus:ring-opacity-20 outline-none transition-all`}
                          placeholder="you@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-['Syne'] font-medium text-[#1A1A2E] mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => handleChange('phone', e.target.value)}
                          className={`w-full px-4 py-3.5 bg-gray-50 rounded-xl border ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#F5A623] focus:ring-[#F5A623]'} focus:ring-2 focus:ring-opacity-20 outline-none transition-all`}
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-['Syne'] font-medium text-[#1A1A2E] mb-2">Country of Interest</label>
                      <select
                        value={formData.country}
                        onChange={e => handleChange('country', e.target.value)}
                        className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623] focus:ring-opacity-20 outline-none transition-all text-[#1A1A2E] appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                      >
                        <option value="">Select a country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-['Syne'] font-medium text-[#1A1A2E] mb-2">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={e => handleChange('message', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623] focus:ring-opacity-20 outline-none transition-all resize-none"
                        placeholder="Tell us about your study abroad plans..."
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full sm:w-auto">
                      {loading ? 'Sending...' : 'Send Message'} {!loading && <Send size={18} />}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <div key={info.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${info.color === 'amber' ? 'bg-[#F5A623]/10' : 'bg-[#00C9A7]/10'}`}>
                      <info.icon className={info.color === 'amber' ? 'text-[#F5A623]' : 'text-[#00C9A7]'} size={20} />
                    </div>
                    <h3 className="font-['Syne'] font-bold text-[#1A1A2E]">{info.title}</h3>
                  </div>
                  <div className="space-y-2 pl-13">
                    {info.items.map((item, j) => (
                      <div key={j} className="text-sm text-[#6B7280]">
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.target}
                            rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                            className="hover:text-[#F5A623] transition-colors flex items-center gap-2"
                          >
                            {item.flag && <span>{item.flag}</span>}
                            {item.text}
                          </a>
                        ) : (
                          <span className="flex items-center gap-2">
                            {item.flag && <span>{item.flag}</span>}
                            {item.text}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/4915560001143?text=Hi%20VJS%20Abroad!%20I%27m%20interested%20in%20abroad%20consultancy%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-6 hover:bg-[#20bd5a] transition-colors group"
              >
                <FaWhatsapp size={32} />
                <div>
                  <span className="font-['Syne'] font-bold block">Chat on WhatsApp</span>
                  <span className="text-sm text-white/80">Get instant replies!</span>
                </div>
                <ArrowRight size={20} className="ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Social Links Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h3 className="font-['Syne'] font-bold text-lg text-[#1A1A2E] mb-4">Follow Our Journey</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#F5A623] hover:border-[#F5A623]/30 hover:bg-[#F5A623]/10 transition-all duration-300"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/vjs_orbit?igsh=MWJ5NjRkdnJrNzFlYw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FaInstagram className="text-white text-sm" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#F5A623] hover:border-[#F5A623]/30 hover:bg-[#F5A623]/10 transition-all duration-300"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#F7F8FC] p-8 lg:p-12 text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-[#F5A623]/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-[#F5A623] w-8 h-8" />
            </div>
            <h3 className="font-['Syne'] font-bold text-2xl text-[#1A1A2E] mb-4">Our Office Location</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-['DM_Sans']">
              📍 Ramgampeta Cross, Near Ramgampeta X Cross Junction,<br />
              Puthalapattu, Chittoor – 517124,<br />
              Andhra Pradesh, India
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p {...fadeInUp} className="text-[#6B7280]">
            Prefer a call? Reach us at{' '}
            <a href="tel:+4915560001143" className="text-[#F5A623] font-semibold hover:underline">+49 15560001143</a>
            {' '}or email{' '}
            <a href="mailto:info@vjsorbit.com" className="text-[#F5A623] font-semibold hover:underline">info@vjsorbit.com</a>
          </motion.p>
        </div>
      </section>
    </motion.div>
  )
}
