import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Exams', path: '/exams' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Contact Us', path: '/contact' },
]

const destinationLinks = [
  { name: '🇩🇪 Germany', path: '/germany' },
  { name: '🇬🇧 United Kingdom', path: '/destinations' },
  { name: '🇺🇸 United States', path: '/destinations' },
  { name: '🇨🇦 Canada', path: '/destinations' },
  { name: '🇦🇺 Australia', path: '/destinations' },
  { name: '🇪🇺 Europe', path: '/destinations' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0F2E] text-gray-300 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00C9A7]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <circle cx="20" cy="20" r="8" fill="#F5A623" />
                  <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#F5A623" strokeWidth="1.5" opacity="0.6" />
                  <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#00C9A7" strokeWidth="1" opacity="0.4"
                    transform="rotate(60 20 20)" />
                </svg>
              </div>
              <span className="text-white font-[Syne] font-bold text-xl tracking-wider">VJS ORBIT</span>
            </Link>
            <p className="text-[#F5A623] font-[Syne] font-semibold text-sm mb-2">
              Your Global Journey Begins Here 🌍
            </p>
            <p className="text-sm text-gray-400 mb-1 italic">Vision, Journey, Success</p>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Empowering you to achieve your dreams of studying, working, and relocating abroad with personalized guidance and expert support.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623]/30 hover:bg-[#F5A623]/10 transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/vjs_orbit?igsh=MWJ5NjRkdnJrNzFlYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-white text-sm" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623]/30 hover:bg-[#F5A623]/10 transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-[Syne] font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#F5A623] -mb-2" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#F5A623] hover:pl-2 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-[Syne] font-bold text-lg mb-6 relative">
              Study Destinations
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#00C9A7] -mb-2" />
            </h3>
            <ul className="space-y-3">
              {destinationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#00C9A7] hover:pl-2 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-[Syne] font-bold text-lg mb-6 relative">
              Contact Info
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#F5A623] -mb-2" />
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#F5A623] mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <a href="mailto:info@vjsorbit.com" className="text-gray-400 hover:text-[#F5A623] transition-colors block">
                    info@vjsorbit.com
                  </a>
                  <a href="mailto:support@vjsorbit.com" className="text-gray-400 hover:text-[#F5A623] transition-colors block">
                    support@vjsorbit.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#00C9A7] mt-1 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <a href="tel:+4915560001143" className="text-gray-400 hover:text-[#00C9A7] transition-colors block font-semibold text-white">
                    🇩🇪 +49 15560001143 (Primary — Germany)
                  </a>
                  <a href="tel:+916302112623" className="text-gray-400 hover:text-[#00C9A7] transition-colors block">
                    🇮🇳 +91 6302112623 (India)
                  </a>
                  <a href="tel:+4915511015290" className="text-gray-400 hover:text-[#00C9A7] transition-colors block">
                    🇩🇪 +49 15511015290 (Germany)
                  </a>
                  <a href="tel:+4915510861137" className="text-gray-400 hover:text-[#00C9A7] transition-colors block">
                    🇩🇪 +49 15510861137 (Germany)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F5A623] mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/Ramgampeta+Cross+Puthalapattu+Chittoor+517124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors"
                >
                  Ramgampeta Cross, Near Ramgampeta X Cross Junction,<br />
                  Puthalapattu, Chittoor – 517124,<br />
                  Andhra Pradesh, India
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#00C9A7] mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Mon–Fri: 11AM–9PM</p>
                  <p>Sat–Sun: 10AM–1PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 VJS Orbit Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
