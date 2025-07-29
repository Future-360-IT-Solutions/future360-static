import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Clients from '@/components/Clients'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import About from '@/components/AboutsUs'
import Achievements from '@/components/Achievements'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Achievements /> 
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}