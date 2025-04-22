
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-ajk-black to-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454329001920-70b4a3de67dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-ajk-red/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-ajk-red/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/lovable-uploads/8902c672-6cb6-4584-9b25-30e0b71c9029.png"
            alt="AJK Aços & Metais Logo" 
            className="h-16 md:h-20 mx-auto mb-8 animate-fade-in"
          />
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            Qualidade em Aços e Metais para o seu Projeto
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Trabalhamos com matéria prima em aços e metais para atender às necessidades da sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a href="https://wa.me/5521973656359" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.73-.143l-2.61-.02a.2.2 0 0 0-.221.168 10.26 10.26 0 0 0 .343 2.32c.5 1.577 1.426 3.1 2.714 4.04 1.265.93 2.93 1.55 4.685 1.697a6.74 6.74 0 0 0 2.089-.4.208.208 0 0 0 .154-.2v-2.489a.21.21 0 0 0-.087-.173 5.204 5.204 0 0 1-1.618.22c-.057 0-.194.014-.252.14" />
                <path d="M16.211 2C8.395 2 2 8.395 2 16.211c0 3.09.995 5.952 2.679 8.288l-1.768 5.261 5.392-1.718A14.108 14.108 0 0 0 16.21 30.42c7.817 0 14.211-6.394 14.211-14.21C30.422 8.395 24.028 2 16.211 2m0 27.35c-2.922 0-5.716-.942-8.03-2.713l-.625-.375-5.209 1.656 1.725-5.111-.378-.634a15.073 15.073 0 0 1-2.92-8.962C3.066 9.019 8.99 3.094 16.21 3.094c7.219 0 13.143 5.925 13.143 13.144 0 7.218-5.924 13.143-13.142 13.143" />
              </svg>
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#produtos" className="btn-secondary">
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
