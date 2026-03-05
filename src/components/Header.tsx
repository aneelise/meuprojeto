import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[#FFF8F3]/95 backdrop-blur-sm z-50 border-b border-[#8B4357]/10">
      <nav className="max-w-7xl mx-auto px-7 py-5">
        <div className="flex items-center justify-between">
          <img 
              src="/logo4.svg" 
                 alt="Vellum Logo" 
                 className="h-14 w-auto"
               />

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-center px-5 py-2 bg-[#6B1A3D] text-white rounded-full hover:bg-[#8B4357] transition-all">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-center px-5 py-2 bg-[#6B1A3D] text-white rounded-full hover:bg-[#8B4357] transition-all">
              Serviços
            </button>
            <button onClick={() => scrollToSection('processo')} className="px-5 py-2 bg-[#6B1A3D] text-white rounded-full hover:bg-[#8B4357] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
              Como funciona?
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="px-5 py-2 bg-[#6B1A3D] text-white rounded-full hover:bg-[#8B4357] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contato
            </button>
          </div>

          <button
            className="md:hidden text-[#6B1A3D]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-[#2D2D2D] hover:text-[#8B4357] transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-[#2D2D2D] hover:text-[#8B4357] transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('planos')}
              className="block w-full text-left text-[#2D2D2D] hover:text-[#8B4357] transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('processo')}
              className="block w-full text-left text-[#2D2D2D] hover:text-[#8B4357] transition-colors"
            >
              Como funciona?
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-center px-6 py-2 bg-[#6B1A3D] text-white rounded-full hover:bg-[#8B4357] transition-all"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
