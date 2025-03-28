import { GraduationCap, Hospital, ScrollText } from "lucide-react"

export default function EducationCards() { 
  const cardContent = [
    {
      icon: () => <GraduationCap className="h-10 w-10" />,
      institution: 'UFSC',
      title: 'Graduação em Psicologia',
      text: 'Sou formada em Psicologia na Universidade Federal de Santa Catarina (UFSC). Durante a graduação fiz estágio profissionalizante nos Hospitais Baía Sul e no Hospital do Centro de Pesquisas Oncológicas (CEPON).',
    },
    {
      icon: () => <ScrollText className="h-10 w-10" />,
      institution: 'USP',
      title: 'Pós-graduação em Psicologia Hospitalar',
      text: 'Assim que me formei, iniciei minha experiência de pós-graduação pela Faculdade de Medicina da USP no Hospital das Clínicas de São Paulo.',
    },
    {
      icon: () => <Hospital className="h-10 w-10" />,
      institution: 'Hospital Sírio-Libanês',
      title: 'Residência Multiprofissional em Oncologia e Cuidados Paliativos',
      text: 'Na sequência, ingressei na Residência do Hospital Sírio-Libanês e durante a formação, pude conhecer, aprender e contribuir com outros cenários de formação.',
    },
  ]
  return(
    <div className="w-full flex justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-9/12">
        {cardContent.map((item) => 
          <div key={item.title} className="bg-[#E9E8E5] text-[#191917] p-6 rounded-4xl drop-shadow-[15px_15px_15px_rgba(0,0,0,0.3)] flex-col flex items-center justify-baseline py-10">
            {item.icon()}
            <h6 className="my-2">{item.institution}</h6>
            <p className="text-center font-semibold mb-2">{item.title}</p>
            <p className="text-sm text-center">
              {item.text}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
