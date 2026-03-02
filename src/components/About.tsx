import { Heart, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#FFF8F3] rounded-full border border-[#8B4357]/20">
              <span className="text-sm text-[#6B1A3D] font-medium">Sobre Mim</span>
            </div>

            <h2 className="font-serif text-4xl md:text-3xl font-semibold text-[#6B1A3D] leading-tight">
              Transformo sua ideia em um site profissional, estruturado para gerar confiança.
            </h2>

            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Sou desenvolvedora frontend especializada em criar experiências digitais que superam o visual. Um site profissional é muito mais do que código e design, é uma ferramenta estratégica de posicionamento.
            </p>

            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Trabalho com empreendedores que valorizam uma presença digital sofisticada e desejam comunicar autoridade e propósito em cada detalhe.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6B1A3D] mb-2">+</div>
                <div className="text-sm text-[#4A4A4A]"> Qualidade </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6B1A3D] mb-2">100%</div>
                <div className="text-sm text-[#4A4A4A]"> Atendimento<br /> personalizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6B1A3D] mb-2">+</div>
                <div className="text-sm text-[#4A4A4A]">Estrutura <br /> estratégica</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#FFF8F3] to-white p-8 rounded-2xl border border-[#8B4357]/10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#6B1A3D] rounded-full flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#6B1A3D] mb-3">Visão Estratégica</h3>
              <p className="text-[#4A4A4A]">
                  Seu site não é apenas presença digital, é posicionamento.
                </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF8F3] to-white p-8 rounded-2xl border border-[#8B4357]/10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#6B1A3D] rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#6B1A3D] mb-3">Elegância & Propósito</h3>
              <p className="text-[#4A4A4A]">
                  Cada detalhe é pensado para fortalecer o posicionamento da sua marca.              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF8F3] to-white p-8 rounded-2xl border border-[#8B4357]/10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#6B1A3D] rounded-full flex items-center justify-center mb-4">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#6B1A3D] mb-3">Performance Otimizada</h3>
              <p className="text-[#4A4A4A]">
                Sites rápidos, responsivos e otimizados para todos os dispositivos, garantindo a melhor experiência do usuário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
