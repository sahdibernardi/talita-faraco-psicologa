import Menu from "./components/menu"
import Cover from "./components/cover"
import About from "./components/about"
import Experiences from "./components/experiences"
import Services from "./components/services"
import FAQ from "./components/faq"
import Contact from "./components/contact"
import Footer from "./components/footer"
import WhatsAppButton from "./components/whatsAppButton"
import ForWho from "./components/forWho"
import Statements from "./components/statements"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a18] text-white">
      <Menu />
      <WhatsAppButton />
      <Cover />
      <ForWho />
      <Experiences />
      <Services />
      <FAQ />
      <Statements />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

