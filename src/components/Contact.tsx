
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contato" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-ajk-red/10 text-ajk-red font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-neutral-600 text-lg">
            Estamos prontos para atender às suas necessidades através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-green-500 p-6 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-16 h-16 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.73-.143l-2.61-.02a.2.2 0 0 0-.221.168 10.26 10.26 0 0 0 .343 2.32c.5 1.577 1.426 3.1 2.714 4.04 1.265.93 2.93 1.55 4.685 1.697a6.74 6.74 0 0 0 2.089-.4.208.208 0 0 0 .154-.2v-2.489a.21.21 0 0 0-.087-.173 5.204 5.204 0 0 1-1.618.22c-.057 0-.194.014-.252.14" />
                <path d="M16.211 2C8.395 2 2 8.395 2 16.211c0 3.09.995 5.952 2.679 8.288l-1.768 5.261 5.392-1.718A14.108 14.108 0 0 0 16.21 30.42c7.817 0 14.211-6.394 14.211-14.21C30.422 8.395 24.028 2 16.211 2m0 27.35c-2.922 0-5.716-.942-8.03-2.713l-.625-.375-5.209 1.656 1.725-5.111-.378-.634a15.073 15.073 0 0 1-2.92-8.962C3.066 9.019 8.99 3.094 16.21 3.094c7.219 0 13.143 5.925 13.143 13.144 0 7.218-5.924 13.143-13.142 13.143" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5521973656359" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ajk-black hover:bg-neutral-800 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span className="mr-1">(21) 97365-6359</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-ajk-red p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Telefone</h3>
              <p className="text-neutral-600 mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+5521973656359"
                className="bg-ajk-black hover:bg-neutral-800 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>(21) 97365-6359</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-neutral-800 p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">E-mail</h3>
              <p className="text-neutral-600 mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:ajkacos@gmail.com"
                className="bg-ajk-black hover:bg-neutral-800 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>ajkacos@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-ajk-red" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Endereço</h4>
                <p className="text-neutral-600">Rua Itapuca 155 B Tomas Coelho - CEP 21370-510</p>
              </div>
            </div>
            
            <div className="w-full h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.08754372514!2d-43.33599959015!3d-22.831756979305034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99786cc5b52cad%3A0x8b1e6d9a83d40e8!2sR.%20Itapuca%2C%20155%20-%20Tom%C3%A1s%20Coelho%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021371-510!5e0!3m2!1spt-BR!2sbr!4v1713639850476!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AJK Aços & Metais"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
