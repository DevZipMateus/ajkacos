
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-lg p-8">
        <img 
          src="/lovable-uploads/8902c672-6cb6-4584-9b25-30e0b71c9029.png" 
          alt="AJK Aços & Metais Logo" 
          className="h-16 mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-ajk-black">404</h1>
        <p className="text-xl text-gray-600 mb-8">Desculpe, a página que você está procurando não foi encontrada.</p>
        <Link 
          to="/" 
          className="bg-ajk-red hover:bg-red-700 text-white px-6 py-3 rounded-md inline-flex items-center transition-all"
        >
          <ArrowLeft className="mr-2" size={18} />
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
