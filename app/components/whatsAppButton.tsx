import Image from "next/image";
import React from "react";

const WhatsAppButton = () => {
    const phoneNumber = '5511912202166'; 
    const message = 'Olá, gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-bounce fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors  z-[9999]"
      aria-label="Abrir WhatsApp"
    >
      <Image 
        src="whatsapp.svg"
        alt="Whatsapp logo"
        width={24}
        height={24}
        className={`invert`}
      />
    </a>
  );
};

export default WhatsAppButton;
