'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      setScrolled(window.scrollY > screenHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    
    if (section) {
      const offset = 100;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className={`
      flex w-full items-center justify-between fixed z-50 md:p-6
      transition-colors duration-300 ease-in-out
      ${scrolled 
        ? 'bg-gradient-to-b from-[#0f100d] via-[#292823]/90 to-transparent via-[80%]' 
        : 'bg-transparent'
      }
    `}>
      <Link href="/" className="text-2xl font-light">
        <Image
          src="/images/logo.png"
          alt="Profissional de saúde"
          width={100}
          height={100}
          className="object-cover"
          priority
        />
      </Link>
      <div className="hidden w-3/4 md:flex justify-evenly text-xl">
        <Link href="#" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#cover")}>
          Início
        </Link>
        <Link href="#experiencia" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#experiencia")}>
          Experiência
        </Link>
        <Link href="#servicos" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#servicos")}>
          Serviços
        </Link>
        <Link href="#faq" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#faq")}>
          FAQ
        </Link>
        <Link href="#depoimentos" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#depoimentos")}>
          Depoimentos
        </Link>
        <Link href="#sobre" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#sobre")}>
          Sobre
        </Link>
        <Link href="#contato" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#contato")}>
          Contato
        </Link>
      </div>
      <button className="md:hidden mr-4" onClick={toggleMenu}>
        <span className="sr-only">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Menu mobile */}
      <div
        className={`md:hidden absolute top-16 right-4 w-64 bg-[#E9E8E5] text-[#0f100d] rounded-lg shadow-lg transform transition-all duration-300 ease-out ${menuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}`}
        style={{ overflow: 'hidden' }}
      >
        <div className="flex flex-col items-center gap-3 py-4 text-lg">
          <Link href="#" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#cover")}>
            Início
          </Link>
          <Link href="#experiencia" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#experiencia")}>
            Experiência
          </Link>
          <Link href="#servicos" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#servicos")}>
            Serviços
          </Link>
          <Link href="#faq" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#faq")}>
            FAQ
          </Link>
          <Link href="#depoimentos" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#depoimentos")}>
            Depoimentos
          </Link>
          <Link href="#sobre" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#sobre")}>
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-[#77859B]" onClick={(e) => handleSmoothScroll(e, "#contato")}>
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
