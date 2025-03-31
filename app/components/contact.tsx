import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import ContactButton from "./contactButton";

export default function Contact() {
  return(
    <section id="contato" className="relative bg-[#f5f5f5] text-[#1E1E1E] pt-16 pb-0 md:pt-0 md:pb-0">
      <div className="container w-full flex justify-center items-start mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative grid md:grid-cols-2 items-center w-full max-w-5xl">
          <div className="order-2 md:order-1 z-10">
            <h2 className="text-[#143C6B] text-2xl md:text-5xl uppercase -mt-20 mb-5">Fale Comigo</h2>
            <p className="text-lg mb-8">
              Entre em contato ou clique no botão abaixo para agendar uma consulta ou para mais informações.
            </p>
            <div className="flex items-center mb-4">
              <Instagram className="h-5 w-5 mr-3" />
              <span>@psitalitafc</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 mr-3" />
              <span>psitalitafc@gmail.com</span>
            </div>
            <div className="flex items-center mb-8">
              <Phone className="h-5 w-5 mr-3" />
              <span>+55 (11) 91220-2166</span>
            </div>
            <ContactButton backgroundColor="bg-[#143C6B]"/>
          </div>
          <div className="order-1 md:order-2 flex items-center -mt-30 mb-20 justify-center md:justify-end z-10">
            <Image
              src="/images/psicologa-talita.jpg"
              alt="Profissional de saúde"
              width={400}
              height={400}
              className="object-cover  object-top rounded-3xl h-[500px] w-[400px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
