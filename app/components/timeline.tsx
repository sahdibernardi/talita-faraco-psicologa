import Image from "next/image"

const institutions = [
  {
    name: 'UFSC',
    logo: '/images/institutions/ufsc.png',
  },
  {
    name: 'Hospital Baía Sul',
    logo: '/images/institutions/baia-sul.png',
  },
  {
    name: 'Centro de Pesquisas Oncológicas',
    logo: '/images/institutions/cepon.png',
  },
  {
    name: 'Hospital das Clínicas',
    logo: '/images/institutions/hospital-clinicas.png',
  },
  {
    name: 'Hospital Sírio-Libanês',
    logo: '/images/institutions/sirio-libanes.png',
  },
  {
    name: 'Unidade Básica de Saúde',
    logo: '/images/institutions/ubs.jpg',
  },
  {
    name: 'Instituto do Câncer',
    logo: '/images/institutions/instituto-cancer-sp.png',
  },
  {
    name: 'Hospital São Paulo',
    logo: '/images/institutions/hospital-sp.jpeg',
  },
  {
    name: 'Hospital Erasto Gaertner',
    logo: '/images/institutions/erasto-gaetner.jpeg',
  },
]

export default function Timeline() {
  return (
    <div className="w-full flex justify-center mb-20">
      <div className="w-9/12 flex">
        {institutions.map((institution) => <div
          key={institution.name}
          className="
              bg-white
              w-30 h-30 
              rounded-full
              border-2 
              border-gray-200 
              flex 
              items-center 
              justify-center 
              transition-all 
              duration-300 
              grayscale 
              hover:grayscale-0 
              hover:shadow-lg
              mx-1
            "
        >
          <Image
            src={institution.logo}
            alt={`Logo ${institution.name}`}
            width={100}
            height={100}
            className="
                object-contain
                w-30 
                h-30
                rounded-full
                duration-1000
              "
          />
        </div>)}
      </div>
    </div>
  )
}
