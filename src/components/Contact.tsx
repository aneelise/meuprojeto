import { Mail, MessageCircle, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
  const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
  const project = (form.elements.namedItem("project") as HTMLSelectElement)?.value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

  const text = `
Olá, Ane! Vim pelo site, gostaria de saber mais sobre seu trabalho.

Nome: ${name}
WhatsApp: ${phone}
Projeto: ${project}

Mensagem:
${message}
  `;

  const whatsappNumber = "5543998231510"; // número com DDI + DDD

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-[#FFF8F3] to-[#F5E6DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white rounded-full border border-[#8B4357]/20 mb-6">
              <span className="text-sm text-[#6B1A3D] font-medium">Contato</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6B1A3D] mb-6">
              Vamos transformar sua<br />
              <span className="bg-gradient-to-r from-[#6B1A3D] to-[#8B4357] bg-clip-text text-transparent">
                presença online?
              </span>
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Entre em contato e descubra como podemos elevar sua marca juntos.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-[#8B4357]/10">
          
            <form onSubmit={handleSubmit} className="space-y-6">
      
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#6B1A3D] mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#8B4357]/20 focus:border-[#6B1A3D] focus:ring-2 focus:ring-[#6B1A3D]/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#6B1A3D] mb-2">
                    WhatsApp
                  </label>
                  <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-[#8B4357]/20 focus:border-[#6B1A3D] focus:ring-2 focus:ring-[#6B1A3D]/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-[#6B1A3D] mb-2">
                  Tipo de projeto
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 rounded-lg border border-[#8B4357]/20 focus:border-[#6B1A3D] focus:ring-2 focus:ring-[#6B1A3D]/20 outline-none transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="landing">Landing Page</option>
                  <option value="site">Site Institucional</option>
                  <option value="portfolio">Página de Apresentação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#6B1A3D] mb-2">
                  Conte-me sobre seu projeto
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-[#8B4357]/20 focus:border-[#6B1A3D] focus:ring-2 focus:ring-[#6B1A3D]/20 outline-none transition-all resize-none"
                  placeholder="Descreva seus objetivos, o que você precisa e qualquer informação relevante sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#6B1A3D] to-[#8B4357] text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

          

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <a
              href="mailto:aneelise117@gmail.com"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#8B4357]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#6B1A3D] to-[#8B4357] rounded-full flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-[#4A4A4A]">E-mail</div>
                <div className="font-medium text-[#6B1A3D]">aneelise117@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/5543998231510"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#8B4357]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#6B1A3D] to-[#8B4357] rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-[#4A4A4A]">WhatsApp</div>
                <div className="font-medium text-[#6B1A3D]">(43) 99823-1510</div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#8B4357]/10">
              <div className="flex gap-3 w-full justify-center">
                <a
                  href="https://instagram.com/ane_soares1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-[#6B1A3D] to-[#8B4357] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram size={20} className="text-white" />
                </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
