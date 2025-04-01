import Image from "next/image";

const allServices = [
  { imageSrc: '/images/services/psico-online.png',
    title: 'Psicoterapia Online',
    description: 'O processo psicoterapêutico se dá no encontro periódico da pessoa com seu psicólogo que através de questionamentos, escuta ativa e acolhedora e um bom vínculo terapêutico contribui para a aproximação do sujeito consigo mesmo, encontrando dentro de si respostas e sentidos para suas questões.',
    details: () => null,
  },
  { imageSrc: '/images/services/palestra.jpg',
    title: 'Aulas e Palestras',
    description: 'Serviço voltado para empresas, instituições, organizações, ligas acadêmicas e grupos de estudo que procuram saber mais sobre temáticas relevantes e complexas tais quais:',
    details: () => <ul className="text-md">
              <li>- comunicação de más notícias</li>
              <li>- trabalho multidisciplinar</li>
              <li>- acolhimento para profissionais da saúde e psicologia hospitalar</li>
              <li>- psico-oncologia e luto.</li>
            </ul>,
  },
  { imageSrc: '/images/services/consultoria.png',
    title: 'Consultoria para profissionais da saúde',
    description: 'Você que é profissional da saúde e cuida de pacientes acometidos por adoecimentos dos mais diversos tipos e possui dúvidas, inseguranças ou dificuldades para manejar e cuidar, conte comigo para trocas e orientações sobre os cuidados psicossociais necessários para uma melhor condução do seu trabalho.',
    details: () => null,
  },
]

export default function Services() {
  return(
    <section id="servicos" className="relative bg-[#E9E8E5] text-[#143C6B] py-16 md:py-24">
    <div className="container mx-auto my-30 px-4 md:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl text-center uppercase my-20">Serviços</h2>
      <div className="space-y-8 w-full flex flex-col items-center justify-center">
        { allServices.map((service) => 
          <div key={service.title} className="bg-white rounded-4xl drop-shadow-xl overflow-hidden flex flex-col md:flex-row w-2/3 p-8 items-center">
            <div className="relative w-50 h-50 mb-5 md:mb-0">
              <div className="absolute rounded-4xl inset-0 bg-[#143C6B] mix-blend-multiply opacity-70 z-10"></div>
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover rounded-4xl"
              />
            </div>
            <div className="pl-6 md:w-3/4">
              <p className="font-bold text-xl mb-4">{service.title}</p>
              <p className="text-md mb-1">
                {service.description}
              </p>
              {service.details()}
            </div>
          </div>
        )}
      </div>
    </div>
    {/* Diagonal transition to next section */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
        <path fill="#1a1a18" fillOpacity="1" d="M0,96L1440,32L1440,120L0,120Z"></path>
      </svg>
    </div>
  </section>
  )
}
