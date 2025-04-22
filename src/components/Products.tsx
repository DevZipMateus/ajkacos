
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
                  className="inline-flex items-center text-ajk-red hover:text-ajk-black font-medium transition-colors duration-300"
                >
                  Solicitar Informações 
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
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.73-.143l-2.61-.02a.2.2 0 0 0-.221.168 10.26 10.26 0 0 0 .343 2.32c.5 1.577 1.426 3.1 2.714 4.04 1.265.93 2.93 1.55 4.685 1.697a6.74 6.74 0 0 0 2.089-.4.208.208 0 0 0 .154-.2v-2.489a.21.21 0 0 0-.087-.173 5.204 5.204 0 0 1-1.618.22c-.057 0-.194.014-.252.14" />
              <path d="M16.211 2C8.395 2 2 8.395 2 16.211c0 3.09.995 5.952 2.679 8.288l-1.768 5.261 5.392-1.718A14.108 14.108 0 0 0 16.21 30.42c7.817 0 14.211-6.394 14.211-14.21C30.422 8.395 24.028 2 16.211 2m0 27.35c-2.922 0-5.716-.942-8.03-2.713l-.625-.375-5.209 1.656 1.725-5.111-.378-.634a15.073 15.073 0 0 1-2.92-8.962C3.066 9.019 8.99 3.094 16.21 3.094c7.219 0 13.143 5.925 13.143 13.144 0 7.218-5.924 13.143-13.142 13.143" />
            </svg>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
