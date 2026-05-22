import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import WhyChoose from '../components/home/WhyChoose'
import GermanyHighlight from '../components/home/GermanyHighlight'
import Services from '../components/home/Services'
import Destinations from '../components/home/Destinations'
import Timeline from '../components/home/Timeline'
import Testimonials from '../components/home/Testimonials'
import UniversityMarquee from '../components/home/UniversityMarquee'
import CTABanner from '../components/home/CTABanner'
import FAQ from '../components/home/FAQ'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Stats />
      <WhyChoose />
      <GermanyHighlight />
      <Services />
      <Destinations />
      <Timeline />
      <Testimonials />
      <UniversityMarquee />
      <CTABanner />
      <FAQ />
    </motion.div>
  )
}
