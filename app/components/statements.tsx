'use client'
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: 'Mylena Cisne',
    statement: 'Talita é incrível! Uma profissional muito acolhedora e extremamente capacitada',
    rating: 5,
    image: '/images/testimonials/MylenaCisne.png',
  },
  {
    name: 'Jullia Bell',
    statement: 'Conheço o trabalho da Talita de perto e posso dizer com tranquilidade: ela é uma profissional séria, sensível e comprometida com o que faz. Sua escuta é cuidadosa, acolhedora e ao mesmo tempo ética, sempre respeitando os limites e as necessidades de cada pessoa. Para quem busca um espaço de reflexão com segurança e profundidade, ela é uma excelente escolha.',
    rating: 5,
    image: '/images/testimonials/JulliaBell.png',
  },
  {
    name: 'Mellina França',
    statement: 'Excelente profissional, acolhedora e muito competente.',
    rating: 5,
    image: '/images/testimonials/MellinaFranca.png',
  },
  {
    name: 'Sabrina Franzosi',
    statement: 'Excelente profissional! Recomendo.',
    rating: 5,
    image: null,
  },
];

export default function Statements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slidesToShow = isMobile ? 1 : 3;
  const maxIndex = testimonials.length - slidesToShow;

  const goToSlide = (index : number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  return (
    <section id="sobre" className="relative -mt-1 bg-[#E9E8E5] text-[#143C6B] py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl uppercase md:text-5xl mb-12 text-center">Depoimentos</h2>

        <div className="relative max-w-4xl mx-auto">
            <p className="my-6">
                Todos os depoimentos são verídicos e recebidos de pacientes e profissionais da saúde reais, com suas expressas autorizações por escrito, conforme Nota técnica 01/2022 do Conselho Federal de Psicologia.
            </p>
        
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${(testimonials.length / slidesToShow) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-white/20 text-center h-full">
                    {/* Avatar */}
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-[#143C6B] to-[#2563eb] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-lg">
                        {testimonial.name[0]}
                      </div>
                    )}
                    
                    {/* Statement */}
                    <blockquote className="text-base md:text-lg italic mb-4 md:mb-6 text-gray-700 leading-relaxed line-clamp-3">
                        &rdquo;{testimonial.statement}&rdquo;
                    </blockquote>
                    
                    {/* Rating */}
                    <div className="flex justify-center mb-3 md:mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400 mx-0.5" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-gray-300 mx-0.5" />
                      ))}
                    </div>
                    
                    {/* Name */}
                    <cite className="text-lg md:text-xl font-semibold text-[#143C6B] not-italic">
                      {testimonial.name}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-[#143C6B] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-[#143C6B] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-[#143C6B] scale-125' 
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}