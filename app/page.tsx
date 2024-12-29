import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Automation from '@/components/automation'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <Services />
        <Automation />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}