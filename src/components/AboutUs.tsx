
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return <section id="sobre" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-ajk-red/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Trabalhando com aços e metais" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" src="/lovable-uploads/32dbcf7b-6400-4f31-bcb6-a6af439e23c1.png" />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-ajk-red rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade Garantida</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">AJK</div>
                <div className="text-sm text-gray-600">Aços & Metais Ltda</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-ajk-red/10 text-ajk-red font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              AJK Aços e Metais
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Atualmente no <b>mercado</b>, oferecendo produtos de alta qualidade, provenientes das empresas referências no mercado para garantir segurança dos projetos de nossos clientes. Além de vender mercadorias das mais diversas, oferecemos também serviços de corte em chapas de aço.
            </p>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Enfrentando os desafios do crescente mercado de aço inox e metais, estamos focados em atualizações das melhores práticas de trabalho e tecnologia, transformando-se em uma empresa ágil e produtiva para atender às necessidades de seus clientes, parceiros e fornecedores.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              A AJK Aços inicia uma fase de novas conquistas, exercendo, com responsabilidade, os compromissos de uma organização preocupada com o futuro e com a qualidade dos produtos e serviços entregues a seus clientes, mantendo-se sempre à frente para servi-lo melhor.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-ajk-red/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-ajk-red" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Variedade de Materiais</h4>
                  <p className="text-gray-600">Trabalhamos com diversos tipos de metais e aços para cada necessidade</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-ajk-red/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-ajk-red" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Entendemos suas necessidades e oferecemos as melhores soluções</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-ajk-red/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-ajk-red" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Qualidade Garantida</h4>
                  <p className="text-gray-600">Produtos de alta qualidade para seus projetos</p>
                </div>
              </div>
            </div>
            
            <a href="#contato" className="bg-ajk-black hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <span>Fale Conosco</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutUs;
