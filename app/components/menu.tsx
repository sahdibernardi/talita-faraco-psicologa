'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight
      if (window.scrollY > screenHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <Link href="#" className="hover:text-[#77859B]">
            Início
          </Link>
          <Link href="#sobre" className="hover:text-[#77859B]">
            Sobre
          </Link>
          <Link href="#experiencia" className="hover:text-[#77859B]">
            Experiência
          </Link>
          <Link href="#servicos" className="hover:text-[#77859B]">
            Serviços
          </Link>
          <Link href="#faq" className="hover:text-[#77859B]">
            FAQ
          </Link>
          <Link href="#contato" className="hover:text-[#77859B]">
            Contato
          </Link>
        </div>
        <button className="md:hidden">
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
  )
}
