
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-3' : 'bottom-8 right-8'} z-50`}>
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-3 space-y-reverse space-y-2 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5521973656359" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-black text-white px-4 py-2 rounded-md shadow-lg hover:bg-neutral-800 transition-all duration-300 gap-2 font-medium"
        >
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.73-.143l-2.61-.02a.2.2 0 0 0-.221.168 10.26 10.26 0 0 0 .343 2.32c.5 1.577 1.426 3.1 2.714 4.04 1.265.93 2.93 1.55 4.685 1.697a6.74 6.74 0 0 0 2.089-.4.208.208 0 0 0 .154-.2v-2.489a.21.21 0 0 0-.087-.173 5.204 5.204 0 0 1-1.618.22c-.057 0-.194.014-.252.14" />
            <path d="M16.211 2C8.395 2 2 8.395 2 16.211c0 3.09.995 5.952 2.679 8.288l-1.768 5.261 5.392-1.718A14.108 14.108 0 0 0 16.21 30.42c7.817 0 14.211-6.394 14.211-14.21C30.422 8.395 24.028 2 16.211 2m0 27.35c-2.922 0-5.716-.942-8.03-2.713l-.625-.375-5.209 1.656 1.725-5.111-.378-.634a15.073 15.073 0 0 1-2.92-8.962C3.066 9.019 8.99 3.094 16.21 3.094c7.219 0 13.143 5.925 13.143 13.144 0 7.218-5.924 13.143-13.142 13.143" />
          </svg>
          <span className="mr-1">WhatsApp</span>
        </a>
        
        <a 
          href="tel:+5521973656359" 
          className="flex items-center bg-black text-white px-4 py-2 rounded-md shadow-lg hover:bg-neutral-800 transition-all duration-300 gap-2 font-medium"
        >
          <Phone className="w-5 h-5" />
          <span className="mr-1">Ligar</span>
        </a>
        
        <a 
          href="mailto:ajkacos@gmail.com" 
          className="flex items-center bg-black text-white px-4 py-2 rounded-md shadow-lg hover:bg-neutral-800 transition-all duration-300 gap-2 font-medium"
        >
          <Mail className="w-5 h-5" />
          <span className="mr-1">E-mail</span>
        </a>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`${isMobile ? 'p-3' : 'p-4'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} 
          ${isOpen ? 'text-white' : 'text-white'} 
          ${isPulsing && !isOpen ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg`}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
        style={{
          boxShadow: isOpen 
            ? '0 4px 12px rgba(239, 68, 68, 0.4)' 
            : '0 4px 12px rgba(34, 197, 94, 0.4)'
        }}
      >
        {isOpen ? (
          <X size={isMobile ? 18 : 22} />
        ) : (
          <MessageCircle size={isMobile ? 18 : 22} />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
