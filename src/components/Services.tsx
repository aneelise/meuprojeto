import { Layout, Rocket, User, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'Uma página criada com um único objetivo: levar seu visitante a tomar uma decisão; seja comprar, agendar ou entrar em contato.',
    benefits: [
      'Ideal para lançamentos e campanhas',
      'Foco total em uma oferta específica',
      'Otimização para vendas',
      'Estrutura pensada para conversão',
      'Suporte na configuração de domínio e hospedagem (contratação por conta do cliente)',
      'Entrega otimizada e performance aprimorada',
      'Integração com redes sociais', 
    
    ]
  },
  {
    icon: Layout,
    title: 'Sites Institucionais Profissionais',
    description: 'Um site completo que apresenta sua marca, seus serviços e seu propósito de forma clara, elegante e confiável, transmitindo autoridade para seus clientes.',
    benefits: [
      'Apresentação completa da empresa e serviços',
      'Design moderno e sofisticado, alinhado à sua identidade',
      'Fácil de atualizar e gerenciar conteúdo',
      'Suporte na configuração de domínio e hospedagem (contratação por conta do cliente)',
      'Entrega otimizada e performance aprimorada',
      'Integração com redes sociais', 
     
    ]
  },
  {
    icon: User,
    title: 'Páginas de Apresentação',
    description: 'Portfólios e páginas pessoais para profissionais autônomos que desejam destacar seus serviços com elegância.',
    benefits: [
      'Mostra quem você é e o que faz de forma clara',
      'Destaque para sua experiência e serviços',
      'Design único e personalizado',
      'Fácil atualização',
      'Suporte na configuração de domínio e hospedagem (contratação por conta do cliente)',
      'Entrega otimizada e performance aprimorada',
      'Integração com redes sociais', 
    
    ]
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-[#FFF8F3] to-[#F5E6DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-[#8B4357]/20 mb-6">
            <span className="text-sm text-[#6B1A3D] font-medium">Serviços</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6B1A3D] mb-6">
            O que desenvolvo <br />
            <span className="bg-gradient-to-r from-[#6B1A3D] to-[#8B4357] bg-clip-text text-transparent">
              para sua marca
            </span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Desenvolvimento web com foco em estratégia, elegância e resultados concretos para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-[#8B4357]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B1A3D] to-[#8B4357] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={32} className="text-white" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#6B1A3D] mb-4">
                {service.title}
              </h3>

              <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C19A6B] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A] text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl border-2 border-[#8B4357]/20 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-[#6B1A3D] mb-4">
            O que você ganha com cada projeto
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-[#C19A6B] font-bold text-lg mb-2">Credibilidade</div>
              <p className="text-sm text-[#4A4A4A]">Profissionalismo que inspira confiança</p>
            </div>
            <div>
              <div className="text-[#C19A6B] font-bold text-lg mb-2">Autoridade Digital</div>
              <p className="text-sm text-[#4A4A4A]">Posicionamento de referência no mercado</p>
            </div>
            <div>
              <div className="text-[#C19A6B] font-bold text-lg mb-2">Presença Profissional</div>
              <p className="text-sm text-[#4A4A4A]">Design que comunica excelência</p>
            </div>
            <div>
              <div className="text-[#C19A6B] font-bold text-lg mb-2">Experiência Otimizada</div>
              <p className="text-sm text-[#4A4A4A]">Navegação intuitiva e fluida</p>
            </div>
          </div>
        </div>
      </div>

               <div className="mt-12 text-center bg-[#FFF8F3] p-6 rounded-2xl border border-[#8B4357]/20 max-w-4xl mx-auto">
          <p className="text-[#4A4A4A] leading-relaxed">
            <span className="font-bold text-[#6B1A3D]">Valores personalizados:</span> Os investimentos são definidos de acordo com a complexidade, funcionalidades específicas e necessidades do seu projeto.<b> A contratação do domínio e hospedagem é realizada pelo cliente, garantindo autonomia, com meu suporte completo na configuração e publicação do site. </b> <br /> Entre em contato para receber uma proposta detalhada.
          </p>
        </div>




    </section>
  );
}
