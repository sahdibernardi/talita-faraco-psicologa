import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <Image
          src="/images/psicologa-clinica.jpg"
          alt="Profissional de saúde"
          width={400}
          height={500}
          className="object-cover rounded-3xl"
        />
      </div>
      <div>
        <div className="text-2xl font-serif mb-6"></div>
        <p className="text-lg italic mb-6">
          Acredito que cada pessoa possui dentro de si os recursos necessários para superar desafios e transformar
          sua vida. Meu papel como terapeuta é facilitar esse processo de autoconhecimento e crescimento.
        </p>
        <p className="font-light">
          <span className="block">Carolina Gallo, Psicóloga</span>
          <span className="text-sm text-gray-300">
            Ajudo meus pacientes a desenvolver habilidades para lidar com o sofrimento emocional, superar
            limitações e encontrar significado.
          </span>
        </p>
      </div>
    </div>
  )
}
