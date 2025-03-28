import Image from "next/image"
import { ChevronDown, ChevronRight, Instagram, Linkedin, Phone } from "lucide-react"
import Menu from "./components/menu"
import Cover from "./components/cover"
import About from "./components/about"
import Experiences from "./components/experiences"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a18] text-white">
      <Menu />
      <Cover />
      <About />
      <Experiences />

      {/* Services Section */}
      <section id="servicos" className="relative bg-[#f5f5f5] text-[#1a1a18] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-light mb-12">Serviços</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                <div className="absolute inset-0 bg-[#3d5a80] bg-opacity-50 z-10"></div>
                <Image
                  src=""
                  alt="Psicoterapia Online"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-semibold text-xl mb-3">Psicoterapia Online</h3>
                <p className="text-sm mb-4">
                  Atendimento psicológico virtual, com a mesma qualidade do presencial. Ideal para quem busca
                  flexibilidade de horários e conforto. Sessões realizadas por videoconferência em ambiente seguro e
                  confidencial.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                <div className="absolute inset-0 bg-[#3d5a80] bg-opacity-50 z-10"></div>
                <Image
                  src=""
                  alt="Adultos e Pacientes Oncológicos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-semibold text-xl mb-3">Adultos e Pacientes Oncológicos</h3>
                <p className="text-sm mb-4">
                  Atendimento especializado para adultos com diversas questões emocionais e psicológicas. Experiência
                  específica no acompanhamento de pacientes oncológicos e seus familiares, oferecendo suporte durante
                  todo o processo.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Diagonal transition to next section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#1a1a18" fillOpacity="1" d="M0,96L1440,32L1440,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative bg-[#1a1a18] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-light mb-12">
            Dúvidas Frequentes
            <br />
            (FAQ)
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="border-b border-gray-700 py-4">
              <details open className="group">
                <summary className="flex justify-between items-center w-full text-left cursor-pointer">
                  <span className="font-medium">Como Funciona a Psicoterapia?</span>
                  <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 text-sm text-gray-300">
                  <p>
                    A psicoterapia é um processo colaborativo entre o terapeuta e o paciente, onde trabalhamos juntos
                    para identificar e compreender padrões de pensamento, comportamento e emoções que podem estar
                    causando sofrimento. As sessões são semanais, com duração de 50 minutos, e o processo terapêutico
                    varia de acordo com as necessidades individuais de cada pessoa.
                  </p>
                </div>
              </details>
            </div>
            <div className="border-b border-gray-700 py-4">
              <details className="group">
                <summary className="flex justify-between items-center w-full text-left cursor-pointer">
                  <span className="font-medium">Como me preparar para o atendimento online?</span>
                  <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 text-sm text-gray-300">
                  <p>
                    Para o atendimento online, recomendo que você esteja em um local tranquilo e privado, onde não haja
                    interrupções. Verifique sua conexão com a internet antes da sessão e tenha fones de ouvido
                    disponíveis para melhor qualidade de áudio. É importante também que você esteja em um ambiente
                    confortável, onde se sinta à vontade para falar sobre suas questões.
                  </p>
                </div>
              </details>
            </div>
            <div className="border-b border-gray-700 py-4">
              <details className="group">
                <summary className="flex justify-between items-center w-full text-left cursor-pointer">
                  <span className="font-medium">Aceita por plano de saúde ou convênio?</span>
                  <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 text-sm text-gray-300">
                  <p>
                    Sim, trabalho com diversos planos de saúde e convênios. Entre eles estão Unimed, Bradesco Saúde,
                    SulAmérica, Amil e outros. Para verificar se seu plano está na lista de convênios aceitos, entre em
                    contato por telefone ou e-mail informando o nome do seu plano e tipo de contrato.
                  </p>
                </div>
              </details>
            </div>
            <div className="border-b border-gray-700 py-4">
              <details className="group">
                <summary className="flex justify-between items-center w-full text-left cursor-pointer">
                  <span className="font-medium">Qual o valor das consultas?</span>
                  <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 text-sm text-gray-300">
                  <p>
                    O valor das consultas varia de acordo com a modalidade de atendimento (presencial ou online) e
                    frequência das sessões. Para informações atualizadas sobre valores, por favor entre em contato
                    diretamente por telefone ou e-mail. Ofereço também opções de pacotes com valores diferenciados para
                    tratamentos contínuos.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        {/* Diagonal transition to next section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#f5f5f5" fillOpacity="1" d="M0,32L1440,96L1440,120L0,120Z"></path>
          </svg>
        </div>
      </section>

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

