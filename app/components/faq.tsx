import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: 'Você só atende pacientes oncológicos e seus familiares?',
    answer: () => <p>Não! Apesar de possuir especialização neste universo da oncologia, atendo pessoas com outros tipos de adoecimento e indivíduos saudáveis que procuram o acompanhamento psicológico não só para lidar com algum tipo de sofrimento mas para desenvolver seu autoconhecimento, buscando fortalecer seus projetos de vida e cuidar da saúde emocional como um todo.</p>,
  },
  {
    question: 'Como funciona a psicoterapia?',
    answer: () => <p>Os encontros são periódicos, semanais ou  quinzenais. Serão feitos através de vídeo chamada por plataforma segura, e para isso é importante que você possua acesso estável à internet e boas condições de comunicação, como fone de ouvido ou ambiente silencioso. Os atendimentos duram 50 minutos. Os objetivos, motivações e detalhamentos deste processo são alinhados caso a caso com o paciente, naquilo que chamamos de acordo terapêutico: um conjunto de combinados que eu e você iremos nos comprometer a cumprir.</p>,
  },
  {
    question: 'O que preciso para o atendimento online?',
    answer: () => <p>Procure um espaço onde tenha privacidade, onde possa falar livremente e, de preferência, apoiar o dispositivo (celular, notebook ou tablet) para ter mais conforto ao longo da sessão. Se for possível, é importante que o ambiente esteja suficientemente iluminado para que eu possa te ver com clareza!</p>,
  },
  {
    question: 'Atende por plano de saúde ou convênio?',
    answer: () => <p>Atualmente, não realizo atendimento por convênio, mas posso emitir os documentos necessários para que o paciente realize o reembolso através do plano ou convênio de saúde.</p>,
  },
  {
    question: 'Qual o valor dos serviços?',
    answer: () => <p>Os diferentes serviços, possuem valores específicos. No caso, esses valores são apresentados no contato de WhatsApp ou no email disponível, considerando as normativas da <a className="underline" href='https://site.cfp.org.br/wp-content/uploads/2024/12/FENAPSI_TABELA_ATUALIZADA_Maio_2024.pdf' target="_blank">Tabela de Referência Nacional de Honorários do Conselho Federal de Psicologia</a>.</p>,
  },
]

export default function FAQ() {
  return(
    <section id="faq" className="relative bg-[#1a1a18] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl break-words max-w-full md:text-5xl mb-20 text-center uppercase">
          Dúvidas Frequentes
          <br />
          (FAQ)
        </h2>
        <div className="max-w-3xl mx-auto mb-30">
          {questions.map((item) => <div key={item.question} className="border-2 border-[#AFB4BD] p-6 rounded-4xl mb-2">
            <details className="group">
              <summary className="flex justify-between items-center w-full text-left cursor-pointer">
                <span className="font-semibold text-xl">{item.question}</span>
                <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-2 text-md text-gray-300">
                {item.answer()}
              </div>
            </details>
          </div>)}
        </div>
      </div>
      {/* Diagonal transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f5f5f5" fillOpacity="1" d="M0,32L1440,96L1440,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
