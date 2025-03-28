import Image from "next/image"
import { ChevronRight, Instagram, Linkedin, Phone } from "lucide-react"
import Menu from "./components/menu"
import Cover from "./components/cover"
import About from "./components/about"
import Experiences from "./components/experiences"
import Services from "./components/services"
import FAQ from "./components/faq"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a18] text-white">
      <Menu />
      <Cover />
      <About />
      <Experiences />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

