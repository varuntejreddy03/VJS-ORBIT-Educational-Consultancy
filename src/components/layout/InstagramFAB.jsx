import { FaInstagram } from 'react-icons/fa'

export default function InstagramFAB() {
  return (
    <a
      href="https://www.instagram.com/vjs_orbit?igsh=MWJ5NjRkdnJrNzFlYw=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
    >
      <FaInstagram size={28} className="text-white group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Follow us! 📸
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
      </span>
    </a>
  )
}
