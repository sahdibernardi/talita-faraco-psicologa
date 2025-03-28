import EducationCards from "./educationCards";
import Testimonial from "./testimonial";
import Timeline from "./timeline";

export default function Experiences() {
  return(
    <section id="experiencia" className="relative bg-[#3d5a80] text-[#E9E8E5] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-5xl text-center uppercase my-12">Experiência</h2>
        <div className="text-lg w-full flex flex-col items-center justify-center">
          <div className="w-9/12">
            <p className="mb-6">
              Estive <b>dentro dos hospitais desde 2020</b>, onde fiz estágio no Hospital Baía-Sul e no ano seguinte no CEPON (Centro de Pesquisas Oncológicas).
            </p>
            <p className="mb-6">
              De lá, já atuei no Hospital das Clínicas de São Paulo, <b>Hospital Sírio-Libanês</b>, ICESP (Instituto do Câncer do Estado de São Paulo), Hospital São Paulo, Hospital Erasto Gaertner e na atenção primária em UBS. 
            </p>
            <p className="mb-6">
              Durante minha trajetória de formação, atuei em diversos hospitais e serviços de saúde, realizei uma série de cursos complementares, participei de inúmeros congressos e eventos científicos e ministrei aulas e capacitações sobre comunicação, acolhimento, escuta ativa e cuidados psicológicos específicos.
            </p>
            <p className="mb-6">
              Hoje atuo a partir da <b>perspectiva fenomenológica-existencial, cuidando de forma humanizada e sensível, respeitando o ser-humano em sua complexidade e singularidade</b>.
            </p>
            <p className="mb-6 font-bold">
              Acompanhe um pouquinho da minha trajetória profissional abaixo:
            </p>
          </div>
        </div>
        <EducationCards />
        <Timeline />
        <Testimonial />
      </div>
      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 pb- left-0 right-0 h-50 bg-gradient-to-b from-[#3d5a80] to-[#E9E8E5] z-0"></div>
    </section>
  )
}
