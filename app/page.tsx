import Image from "next/image"
import { ChevronDown, ChevronRight, Instagram, Linkedin, Phone } from "lucide-react"
import Menu from "./components/menu"
import Cover from "./components/cover"
import About from "./components/about"
import Experiences from "./components/experiences"
import Services from "./components/services"
import FAQ from "./components/faq"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a18] text-white">
      <Menu />
      <Cover />
      <About />
      <Experiences />
      <Services />
      <FAQ />

      {/* Contact Section */}
      <section id="contato" className="relative bg-[#f5f5f5] text-[#1a1a18] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Fale Comigo</h2>
              <p className="text-sm mb-8">
                Entre em contato para agendar uma consulta ou tirar dúvidas sobre os atendimentos. Estou disponível para
                ajudar você a iniciar sua jornada terapêutica.
              </p>
              <div className="flex items-center mb-4">
                <Instagram className="h-5 w-5 mr-3" />
                <span>@carolina.psi</span>
              </div>
              <div className="flex items-center mb-4">
                <Linkedin className="h-5 w-5 mr-3" />
                <span>carolina-psi</span>
              </div>
              <div className="flex items-center mb-8">
                <Phone className="h-5 w-5 mr-3" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <button className="bg-[#3d5a80] text-white px-6 py-3 rounded-md flex items-center">
                <span className="mr-2">ENTRAR EM CONTATO</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div>
              <Image
                src="/images/psicologa-talita.jpg"
                alt="Profissional de saúde"
                width={400}
                height={500}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a18] text-gray-400 py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Carolina Gallo - Todos os direitos reservados</p>
            <p>Desenvolvido por Studio Design</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

