import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  {
    name: 'Destinations',
    path: '/destinations',
    dropdown: [
      { name: '🇩🇪 Germany', path: '/germany' },
      { name: '🇬🇧 United Kingdom', path: '/destinations' },
      { name: '🇺🇸 United States', path: '/destinations' },
      { name: '🇨🇦 Canada', path: '/destinations' },
      { name: '🇦🇺 Australia', path: '/destinations' },
      { name: '🇪🇺 Europe', path: '/destinations' },
    ]
  },
  { name: 'Exams', path: '/exams' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F2E]/90 backdrop-blur-xl shadow-lg shadow-[#0A0F2E]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <circle cx="20" cy="20" r="8" fill="#F5A623" />
                <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#F5A623" strokeWidth="1.5" opacity="0.6"
                  className="animate-spin-slow origin-center" />
                <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#00C9A7" strokeWidth="1" opacity="0.4"
                  className="animate-spin-slow origin-center" style={{ animationDirection: 'reverse', animationDuration: '15s' }}
                  transform="rotate(60 20 20)" />
                <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#F5A623" strokeWidth="0.8" opacity="0.3"
                  className="animate-spin-slow origin-center" style={{ animationDuration: '25s' }}
                  transform="rotate(-30 20 20)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-[Syne] font-bold text-xl tracking-wider group-hover:text-[#F5A623] transition-colors">
                VJS ORBIT
              </span>
              <span className="text-[#9CA3AF] text-[10px] tracking-[0.2em] uppercase font-medium hidden sm:block">
                Abroad Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    location.pathname === link.path
                      ? 'text-[#F5A623]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-[#0A0F2E]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden py-2"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#F5A623] hover:bg-white/5 transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#F5A623] to-[#F7B84E] text-[#0A0F2E] font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[#F5A623]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Free Consultation
              </Link>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#0A0F2E] text-white text-xs font-medium rounded-lg shadow-xl border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                Call/WhatsApp: +49 15560001143 📞
              </span>
            </div>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0A0F2E]/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                      >
                        <span className="font-medium">{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-2.5 text-sm text-gray-400 hover:text-[#F5A623] transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                        location.pathname === link.path
                          ? 'text-[#F5A623] bg-[#F5A623]/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#F5A623] to-[#F7B84E] text-[#0A0F2E] font-bold rounded-full"
                >
                  Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
