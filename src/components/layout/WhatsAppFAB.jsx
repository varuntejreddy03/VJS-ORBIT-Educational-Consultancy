import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919347988545?text=Hi%20VJS%20Orbit!%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%20me?"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-whatsapp-pulse group"
    >
      <FaWhatsapp size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us! 💬
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
      </span>
    </a>
  )
}
