import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF8F3] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
         <img 
              src="/logo1.svg" 
              alt="Vellum Logo" 
                className="h-14 w-auto flex intems-center justify-center mx-auto mb-6"
          />
          <p className="text-[#6B1A3D] mb-6 max-w-md mx-auto">
            Desenvolvimento web estratégico com elegância e propósito para empreendedores.
          </p>

          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="flex items-center justify-center gap-2 text-[#6B1A3D] text-sm">
              {currentYear} Ane Elise. Desenvolvido com
              <Heart size={16} className="text-[#C19A6B] fill-current" />
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
