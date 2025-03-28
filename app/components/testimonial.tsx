import Image from "next/image";
import ContactButton from "./contactButton";

export default function Testimonial() {
  return (
    <div className="w-full flex justify-center mt-12 relative z-10">
      <div className="grid md:grid-cols-2 gap-8 items-center w-9/12">
        <div className="relative md:pr-16 flex items-center justify-center md:justify-end">
          <Image
            src="/images/psicologa-clinica.jpg"
            alt="Profissional de saúde"
            width={400}
            height={500}
            className="object-cover rounded-3xl w-full md:w-auto md:max-w-[400px] md:absolute md:right-0 md:mt-50 md:mr-20 "
          />
        </div>
        <div>
          <p className="text-lg italic mt-30 mb-6">
            Em todos estes contextos pude cuidar de pacientes com os mais diversos tipos de adoecimento e de suas famílias. Mas também profissionais da saúde envolvidos no tratamento dessas pessoas.
          </p>
          <p className="text-lg italic mb-20">
            Atendi nos leitos, nos ambulatórios, nos corredores de todos estes cenários. Aprendi muito com profissionais experientes que me inspiraram a <b>buscar conhecimento para oferecer o melhor suporte emocional àqueles que necessitam</b>.
          </p>
          <ContactButton />
        </div>
      </div>
    </div>
  )
}
