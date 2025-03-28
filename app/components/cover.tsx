import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Cover() {
  return (
    <section className="relative border-none h-full bg-gradient-to-br from-[#292823] to-[#0f100d]">
    <div className="container mx-auto px-4 pt-[calc(100vw-30%)] md:py-24 md:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-lg uppercase md:text-4xl lg:text-7xl font-light leading-tight mb-6">
            Expandindo as
            <br />
            possibilidades
            <br />
            do cuidado
          </h1>
          <h4 className="text-3xl">
            Atendimento psicológico humanizado, respeitando a singularidade de cada pessoa em sua jornada.
          </h4>
          <div className="mt-8 flex items-center">
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <ChevronDown className="h-4 w-4 text-[#1a1a18]" />
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative w-full h-full ">
          <Image
            src="/images/psicologa-talita-faraco.png"
            alt="Profissional de saúde"
            width={2025}
            height={2531}
            className="object-fit drop-shadow-[40px_40px_30px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>
      </div>
    </div>
    {/* Angled divider at the bottom of hero section */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
        <polygon fill="#E9E8E5" points="0,10 100,0 100,10"/>
      </svg>
    </div>
  </section>
  )
}
