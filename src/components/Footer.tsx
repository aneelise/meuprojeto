import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6B1A3D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="font-serif text-3xl font-bold mb-4">
            Ane Elise
          </div>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Desenvolvimento web estratégico com elegância e propósito para empreendedores visionários.
          </p>

          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="flex items-center justify-center gap-2 text-white/70 text-sm">
              {currentYear} Ane Elise. Desenvolvido com
              <Heart size={16} className="text-[#C19A6B] fill-current" />
              e estratégia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
