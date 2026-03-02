import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F3] via-[#FFF8F3] to-[#F5E6DC] pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgZmlsbD0iIzhCNDM1NyIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KICAgICAgPHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnoiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#8B4357]/20 mb-8 animate-fade-in">
          <Sparkles size={16} className="text-[#C19A6B]" />
          <span className="text-sm text-[#6B1A3D] font-medium">Desenvolvimento Web Personalizado</span>
        </div>

     <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-[#6B1A3D] mb-6 animate-fade-in-up leading-snug">
           Seu negócio merece um site<br />
           que transmita
         <span className="bg-gradient-to-r from-[#6B1A3D] to-[#8B4357] bg-clip-text text-transparent">
            {" "}credibilidade e autoridade
     </span>
      </h1>

        <p className="text-lg md:text-xl text-[#4A4A4A] max-w-3xl mx-auto mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Desenvolvimento de sites profissionais e landing pages estratégicas para empreendedores que desejam elevar sua marca com elegância no digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('contato')}
            className="group px-8 py-4 bg-[#6B1A3D] text-white rounded-full hover:bg-[#8B4357] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
          >
            Solicitar Orçamento
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('processo')}
            className="px-8 py-4 bg-white text-[#6B1A3D] rounded-full hover:bg-[#6B1A3D] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg border-2 border-[#6B1A3D] font-medium"
          >
            Conhecer o Processo
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8B4357] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#8B4357] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
