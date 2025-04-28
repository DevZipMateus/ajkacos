
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const whatsappImg = "/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-20 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-ajk-black to-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454329001920-70b4a3de67dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 min-h-[100%]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-ajk-red/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-ajk-red/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/lovable-uploads/8902c672-6cb6-4584-9b25-30e0b71c9029.png"
            alt="AJK Aços & Metais Logo" 
            className="h-12 md:h-20 mx-auto mb-6 md:mb-8 animate-fade-in"
          />
          
          <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            Qualidade em Aços e Metais para o seu Projeto
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-10 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Trabalhamos com matéria prima em aços e metais para atender às necessidades da sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a href="https://wa.me/5521973656359" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm md:text-base">
              <img 
                src={whatsappImg}
                alt="WhatsApp"
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
                loading="lazy"
              />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#produtos" className="btn-secondary text-sm md:text-base">
              Ver Produtos
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
