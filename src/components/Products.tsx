
import React from 'react';
import { ArrowRight } from 'lucide-react';

const whatsappImg = "/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png";

const products = [
  {
    id: 1,
    title: 'Metais',
    description: 'Latão - Cobre - Bronze - Alumínio: Tarugos, redondo, sextavado, quadrado. Barras: chatas, redondas e eletrolíticas. Cantoneiras, chapas lisas e xadrez, bobinas, papel metal, arames, verguinhas para solda, tubos, buchas, latão naval, perfis, telhas e acessórios.',
    image: '/lovable-uploads/metais.png',
    delay: '0s'
  },
  {
    id: 2,
    title: 'Aço Inoxidável',
    description: '301 - 302 - 304 - 304l - 310 - 314 - 316 - 316l - 321 - 410 - 416 - 420: Chapas, barras, cantoneiras, tubos padrão Schedule, OD, tubos mecânicos e capilares. Arames mole e duro, materiais "cortados", plasma, perfis especiais, discos e anéis.',
    image: '/lovable-uploads/inox.jpeg',
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Aço Carbono e Construção Mecânica',
    description: '1010 - 1020 - 1045 - A36 - 4140 - 4340 - 8620 - 8640: Barras: redondas, quadradas, sextavadas, trefilados, mecânicos e laminados. Barras chatas, cantoneiras, telhas galvanizadas, trapezoidais e ondulados. Chapas lisa, galvanizadas e xadrez. Bobinas, perfis estruturais I e U, vigas I, U e H, Ferro T e trilhos. Tubos: Schedule, redondos, quadrados, eletrodutos e galvanizados. Materiais "cortados plasma", perfis especiais, discos e anéis.',
    image: '/lovable-uploads/tubos.png',
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Materiais Diversos',
    description: 'Zinco: Lingote. Chumbo: Lingotes, anodos (com antimônio e estanho), tubos e chapas (lençol). Níquel: Anodos. Diversos: Aço, prata, metal patente, teflon, nylon, PVC, policarbonatos, acrílicos e grafite.',
    image: '/lovable-uploads/diversos.png',
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Itens Diversos',
    description: 'Parafusos, conexões: (Schedule 40/80, OD), eletrodos, disco de corte e soldas.',
    image: '/lovable-uploads/Parafusos.png',
    delay: '0.4s'
  }
];

const Products = () => {
  return (
    <section id="produtos" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-ajk-red/10 text-ajk-red font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Encontre o produto ideal para o seu projeto
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos uma ampla variedade de produtos em aços e metais para atender às suas necessidades específicas.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="product-card overflow-hidden animate-fade-in"
              style={{ animationDelay: product.delay }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {product.description}
                </p>
                <a 
                  href="https://wa.me/5521973656359" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-ajk-red hover:text-ajk-black font-medium transition-colors duration-300 gap-2"
                >
                  <img 
                    src={whatsappImg}
                    alt="WhatsApp"
                    className="w-5 h-5 object-contain"
                    loading="lazy"
                  />
                  <span>Solicitar Informações</span>
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5521973656359" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ajk-black hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <img 
              src={whatsappImg}
              alt="WhatsApp"
              className="w-5 h-5 object-contain"
              loading="lazy"
            />
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

