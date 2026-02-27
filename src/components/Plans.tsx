import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Pacote Landing Page',
    description: 'Ideal para quem quer presença digital rápida e objetiva.',
    features: [
      'Página única',
      'Design responsivo e alinhado à identidade visual',
      'Formulário de contato simples',
      'Entrega otimizada e performance básica',
      'Integração com redes sociais', 
      'Registro de domínio incluso (.com.br)',
      '1 revisão incluída'
    ],
    highlight: false
  },
  {
    name: 'Pacote Profissional',
    description: 'Para quem busca uma presença digital completa e estratégica',
    features: [
      'Até 5 páginas ou mais conforme necessidade',
      'Estrutura estratégica alinhada à sua marca',
      'Formulário de contato avançado',
      'Entrega otimizada e performance aprimorada',
      'Suporte pós-entrega (30 dias)',
      'Integração com WhatsApp e redes sociais',
      'Registro de domínio incluso (.com.br)',
      'Até 2 revisões inclusas'
    ],
    highlight: true
  },
   {
    name: 'Pacote Portfólio',
    description: 'Perfeito para profissionais autônomos que querem mostrar trabalhos e serviços.',
    features: [
      'Até 3 páginas personalizadas',
      'Design alinhado à identidade visual',
      'Galeria ou apresentação de trabalhos',
      'Formulário de contato simples',
      'Entrega otimizada e performance básica',
      'Registro de domínio incluso (.com.br)',
      '1 revisão incluída'
    ],
    highlight: false
  }
];

export default function Plans() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#FFF8F3] rounded-full border border-[#8B4357]/20 mb-6">
            <span className="text-sm text-[#6B1A3D] font-medium">Planos</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6B1A3D] mb-6">
            Escolha a solução ideal<br />
            <span className="bg-gradient-to-r from-[#6B1A3D] to-[#8B4357] bg-clip-text text-transparent">
              para o seu negócio
            </span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Pacotes estruturados para atender diferentes necessidades e objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-[#6B1A3D] to-[#8B4357] border-[#6B1A3D] text-white shadow-2xl'
                  : 'bg-white border-[#8B4357]/20 hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C19A6B] text-white text-sm font-medium rounded-full flex items-center gap-1 shadow-lg">
                  <Sparkles size={14} />
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`font-serif text-3xl font-bold mb-3 ${
                  plan.highlight ? 'text-white' : 'text-[#6B1A3D]'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  plan.highlight ? 'text-white/90' : 'text-[#4A4A4A]'
                }`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-[#C19A6B]' : 'text-[#6B1A3D]'
                      }`}
                    />
                    <span className={plan.highlight ? 'text-white' : 'text-[#4A4A4A]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-[#6B1A3D] hover:bg-[#FFF8F3]'
                    : 'bg-[#6B1A3D] text-white hover:bg-[#8B4357]'
                } shadow-lg hover:shadow-xl`}
              >
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-[#FFF8F3] p-6 rounded-2xl border border-[#8B4357]/20 max-w-4xl mx-auto">
          <p className="text-[#4A4A4A] leading-relaxed">
            <span className="font-bold text-[#6B1A3D]">Valores personalizados:</span> Os investimentos são definidos de acordo com a complexidade, funcionalidades específicas e necessidades do seu projeto. O valor já inclui o registro do domínio (.com.br).<br /> Entre em contato para receber uma proposta detalhada.
          </p>
        </div>
      </div>
    </section>
  );
}
