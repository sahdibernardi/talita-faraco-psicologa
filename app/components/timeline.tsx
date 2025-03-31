import Image from "next/image"

const institutions = [
  {
    name: 'UFSC',
    logo: '/images/institutions/ufsc.png',
    position: 'graduanda',
  },
  {
    name: 'Hospital Baía Sul',
    logo: '/images/institutions/baia-sul.png',
    position: 'estagiária',
  },
  {
    name: 'Centro de Pesquisas Oncológicas',
    logo: '/images/institutions/cepon.png',
    position: 'estagiária',
  },
  {
    name: 'Hospital das Clínicas',
    logo: '/images/institutions/hospital-clinicas.png',
    position: 'especialista',
  },
  {
    name: 'Hospital Sírio-Libanês',
    logo: '/images/institutions/sirio-libanes.png',
    position: 'residente',
  },
  {
    name: 'Unidade Básica de Saúde',
    logo: '/images/institutions/ubs.jpg',
    position: 'residente',
  },
  {
    name: 'Instituto do Câncer',
    logo: '/images/institutions/instituto-cancer-sp.png',
    position: 'residente',
  },
  {
    name: 'Hospital São Paulo',
    logo: '/images/institutions/hospital-sp.jpeg',
    position: 'residente',
  },
  {
    name: 'Hospital Erasto Gaertner',
    logo: '/images/institutions/erasto-gaetner.jpeg',
    position: 'residente',
  },
]

export default function Timeline() {
  return (
    <div className="w-full flex justify-center mb-20">
      <div className="w-9/12 flex flex-wrap">
        {institutions.map((institution) => (
          <div 
            key={institution.name} 
            className="flex justify-center items-center flex-col gap-4 group"
          >
            <div
              className="
                bg-white
                w-28 h-28 
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
                  w-28
                  h-28
                  rounded-full
                  duration-1000
                "
              />
            </div>
            <div className="text-sm italic capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              {institution.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
