import { Briefcase, Users, Award, Camera } from 'lucide-react';

const targets = [
  {
    icon: Briefcase,
    title: 'Empreendedores',
    description: 'Que desejam posicionar seus negócios com autoridade e profissionalismo no ambiente digital.'
  },
  {
    icon: Users,
    title: 'Pequenos Empresários',
    description: 'Buscando elevar a presença da marca com um site institucional.'
  },
  {
    icon: Award,
    title: 'Profissionais Autônomos',
    description: 'Que precisam destacar seus serviços e especialização com uma apresentação digital.'
  },
  {
    icon: Camera,
    title: 'Criadores de Conteúdo',
    description: 'Que querem centralizar sua presença online e fortalecer sua marca pessoal com estilo.'
  }
];

export default function Target() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#FFF8F3] rounded-full border border-[#8B4357]/20 mb-6">
            <span className="text-sm text-[#6B1A3D] font-medium">Para quem é?</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6B1A3D] mb-6">
            Ideal para quem valoriza<br />
            <span className="bg-gradient-to-r from-[#6B1A3D] to-[#8B4357] bg-clip-text text-transparent">
              qualidade e estratégia
            </span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Trabalho com profissionais que entendem o valor de uma presença digital sofisticada e estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FFF8F3] to-white p-8 rounded-2xl border border-[#8B4357]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B1A3D] to-[#8B4357] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <target.icon size={32} className="text-white" />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#6B1A3D] mb-3">
                {target.title}
              </h3>

              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                {target.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#6B1A3D] to-[#8B4357] p-12 rounded-3xl text-white text-center shadow-2xl">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Se você está aqui, é porque entende
          </h3>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Que um site profissional não é gasto, é <span className="font-bold">investimento estratégico</span>. Que design de qualidade comunica credibilidade. E que sua presença digital deve refletir o nível de excelência que você oferece.
          </p>
        </div>
      </div>
    </section>
  );
}
