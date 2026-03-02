import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Briefing',
    description: 'Conversamos sobre seus objetivos, sua marca e o que você deseja comunicar ao seu público.'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Planejamento',
    description: 'Estruturo a estratégia visual e funcional do projeto, definindo arquitetura e design.'
  },
  {
    icon: Code,
    number: '03',
    title: 'Desenvolvimento',
    description: 'Transformo a estratégia em código, com atenção aos detalhes e performance otimizada.'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Entrega',
    description: 'Apresento o projeto finalizado e faço o lançamento da sua presença digital.'
  },
  {
    icon: CheckCircle2,
    number: '05',
    title: 'Ajustes Finais',
    description: 'Realizamos os refinamentos necessários para garantir sua total satisfação com o resultado.'
  }
];

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-gradient-to-br from-[#6B1A3D] to-[#8B4357] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KICAgICAgPHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnoiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium">Como funciona o processo?</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Do conceito à execução, < br />  cada detalhe pensado < br /> para destacar sua marca
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Um processo personalizado, estratégico que combina estratégia e design para criar resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <step.icon size={28} className="text-[#6B1A3D]" />
                  </div>

                  <div className="text-[#C19A6B] font-bold text-sm mb-2">{step.number}</div>

                  <h3 className="font-serif text-xl font-bold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-white/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold mb-4">
            Transparência em cada etapa
          </h3>
          <p className="text-white/90 leading-relaxed">
            Você acompanha todo o desenvolvimento e tem total clareza sobre prazos, entregas e investimento. Comunicação constante e alinhamento são prioridades em cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
