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
    const phoneNumber = '5511912202166'; 
    const message = 'Olá, gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)] ${backgroundColor} ${textColor} px-10 py-3 rounded-3xl text-lg font-semibold hover:opacity-90 transition-colors duration-300`}
    >
      <Image 
        src="whatsapp.svg"
        alt="Whatsapp logo"
        width={24}
        height={24}
        className={`mr-2 ${iconColor}`}
      />
      QUERO UM ACOMPANHAMENTO PROFISSIONAL
    </button>
  );
}
