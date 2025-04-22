
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ajk-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(21) 97365-6359</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>ajkacos@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Rua Itapuca 155 B Tomas Coelho - CEP 21370-510</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-ajk-red transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-ajk-red transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-ajk-red transition-colors duration-300 inline-block">Produtos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-ajk-red transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media & Logo */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/ajkacos?igsh=dDhibnU4ZWhoaTd4" target="_blank" rel="noopener noreferrer"  className="bg-white/10 hover:bg-ajk-red/80 hover:text-white transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
            
            <div className="mt-8">
              <img 
                src="/lovable-uploads/8902c672-6cb6-4584-9b25-30e0b71c9029.png" 
                alt="AJK Aços & Metais Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} AJK Aços & Metais Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
