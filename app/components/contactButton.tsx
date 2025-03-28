'use client'
import Image from "next/image";

interface ContactButtonProps {
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
}

export default function ContactButton({ 
  backgroundColor = 'bg-black', 
  textColor = 'text-white', 
  iconColor = 'invert'
}: ContactButtonProps) {
  const handleClick = () => {
    const phoneNumber = '5548999999999'; 
    const message = 'Olá, gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 drop-shadow-xl ${backgroundColor} ${textColor} px-4 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-colors duration-300`}
    >
      <Image 
        src="whatsapp.svg"
        alt="Whatsapp logo"
        width={24}
        height={24}
        className={`m-1 ${iconColor}`}
      />
      ENTRAR EM CONTATO
    </button>
  );
}
