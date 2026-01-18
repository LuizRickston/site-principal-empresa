import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  TrendingUp, 
  Monitor, 
  Users, 
  Video, 
  CheckCircle, 
  ArrowRight,
  Instagram,
  MessageCircle,
  Stethoscope,
  Car,
  ShoppingBag,
  Activity,
  Bot, 
  Workflow,
  MessageSquare,
  Eye,
  ShoppingCart,
  Heart,
  Home as HomeIcon,
  Sparkles,
  Calendar
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito de scroll para mudar o header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const whatsappLink = 'https://wa.me/message/YOCADKNSILR7D1';

  // Dados dos Nichos
  const niches = [
    { title: "Estética e Beleza", icon: <Sparkles size={32} />, desc: "Estratégias para lotar agenda e vender procedimentos de alto valor." },
    { title: "Saúde e Laboratórios", icon: <Stethoscope size={32} />, desc: "Autoridade médica e captação ética de pacientes particulares." },
    { title: "Delivery", icon: <ShoppingBag size={32} />, desc: "Aumente o LTV e pare de depender apenas das taxas dos apps." },
    { title: "Automotivo", icon: <Car size={32} />, desc: "Leads qualificados para venda de veículos novos e seminovos." },
    { title: "Imobiliário", icon: <HomeIcon size={32} />, desc: "Qualificação de leads e aceleração do ciclo de venda de imóveis." },
    { title: "Corretora de Seguros/Financiamento", icon: <TrendingUp size={32} />, desc: "Prospecção qualificada e fechamento de seguros e operações financeiras." },
  ];

  // Dados dos Serviços
  const services = [
    { 
      title: "Tráfego Pago & Social Media", 
      icon: <TrendingUp className="text-white" size={24} />, 
      desc: "Anúncios estratégicos que colocam dinheiro no seu bolso e clientes na sua porta." 
    },
    { 
      title: "Site & Aplicativos Web", 
      icon: <Monitor className="text-white" size={24} />, 
      desc: "Sua empresa aberta 24h. Landing pages de alta conversão, dashboards e Web Apps." 
    },
    { 
      title: "Consultoria Híbrida", 
      icon: <Users className="text-white" size={24} />, 
      desc: "Nós desenhamos a estratégia. Você escolhe se executa ou se deixa tudo com a gente." 
    },
    { 
      title: "Automação de Processos", 
      icon: <Workflow className="text-white" size={24} />, 
      desc: "Otimização de fluxos internos, organização de CRM e automação de tarefas repetitivas da equipe." 
    },
    { 
      title: "Atendimento Inteligente (Com IA)", 
      icon: <Bot className="text-white" size={24} />, 
      desc: "Chatbots avançados com Inteligência Artificial para atender, qualificar e vender 24/7 no WhatsApp." 
    },
    { 
      title: "Produção Audiovisual", 
      icon: <Video className="text-white" size={24} />, 
      desc: "Design e vídeo de alto padrão. Sua marca precisa transmitir autoridade visual." 
    },
  ];

  return (
    <div className="font-sans text-gray-900 bg-white antialiased selection:bg-[#FF5722] selection:text-white">
      
      {/* HEADER */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0F1012]/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer group">
            {/* Logo corrigida: sem filtro de cor e com proteção anti-erro */}
            <img 
              src="https://drive.google.com/uc?export=download&id=1JNCPCcQPpa3qXXK6P0c5W5A7LQv2mTqE" 
              alt="Chapada Digital Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
            />
            
            <span className="text-white">
              Chapada<span className="text-[#FF5722]">Digital</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Serviços', 'Sobre', 'Nichos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-200 hover:text-[#FF5722] transition-colors"
              >
                {item}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#FF5722] text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/30 text-sm inline-block">
              Agendar Análise Gratuita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-[#FF5722]">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            {['Serviços', 'Sobre', 'Nichos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-[#FF5722]"
              >
                {item}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] text-white py-3 rounded-lg font-bold block text-center">
              Agendar Análise
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0F1012] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF5722] opacity-5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FF5722] text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722]"></span>
              </span>
              Agência Híbrida de Alta Performance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Transformamos Negócios da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-orange-400">Chapada Diamantina</span> em Máquinas de Venda.
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Pare de depender apenas do "boca a boca". Atraia clientes, organize seus processos internos e automatize o atendimento com nossa metodologia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#FF5722] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all hover:translate-y-[-2px] shadow-lg shadow-orange-500/40 flex items-center justify-center gap-2 group inline-flex">
                Quero Vender Mais
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle size={16} className="text-[#FF5722]" />
              Metodologia validada em diversos nichos
            </p>
          </div>
          
          {/* CICLO DE VIDA DO CLIENTE */}
          <div className="hidden lg:flex items-center justify-center relative w-[500px] h-[500px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5722]/20 to-transparent rounded-full blur-3xl"></div>
            
            {/* Ciclo Principal */}
            <div className="relative w-80 h-80">
              {/* Círculo Externo Animado */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <defs>
                  <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FF5722', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#FFA726', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                {/* Círculo animado */}
                <circle cx="160" cy="160" r="140" fill="none" stroke="url(#cycleGradient)" strokeWidth="2" opacity="0.3" />
                <circle cx="160" cy="160" r="140" fill="none" stroke="url(#cycleGradient)" strokeWidth="2" strokeDasharray="880" strokeDashoffset="0" opacity="0.6" className="animate-spin" style={{animationDuration: '20s'}} />
              </svg>
              
              {/* Etapas do Ciclo */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Etapa 1: Atração */}
                <div className="absolute top-4 flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[#FF5722] flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
                    <Eye size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-white text-center w-16">Atração</span>
                </div>
                
                {/* Etapa 2: Engajamento */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-white text-center w-16">Engajamento</span>
                </div>
                
                {/* Etapa 3: Conversão */}
                <div className="absolute bottom-4 flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/50">
                    <ShoppingCart size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-white text-center w-16">Conversão</span>
                </div>
                
                {/* Etapa 4: Retenção */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[#FF5722] flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <Heart size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-white text-center w-16">Retenção</span>
                </div>
              </div>
              
              {/* Centro com Texto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-[#FF5722] mb-1">4 Etapas</div>
                  <div className="text-xs text-gray-400">Jornada do Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS - LUIZ RICKSTON */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Espaço da Foto */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#FF5722] rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
              <div className="relative aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
                
                {/* AQUI ESTÁ A LÓGICA DA FOTO:
                   1. Carrega 'maelson.jpg' da pasta de imagens públicas.
                   2. Se não encontrar, mostra o placeholder.
                */}
                <img 
                  src="/images/maelson.jpg" 
                  alt="Maelson" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextElement = target.nextSibling as HTMLElement | null;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }} 
                />

                {/* Placeholder que aparece se a foto não carregar */}
                <div className="hidden absolute inset-0 w-full h-full bg-gray-100 flex-col items-center justify-center text-center p-6">
                    <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                        <Users className="text-gray-500" />
                    </div>
                    <p className="text-gray-500 font-medium">Foto não encontrada</p>
                    <p className="text-xs text-gray-400 mt-2">Certifique-se que o arquivo está na pasta de imagens.</p>
                </div>

              </div>
            </div>

            {/* Conteúdo Texto */}
            <div>
              <h4 className="text-[#FF5722] font-bold uppercase tracking-wider mb-2 text-sm">A Mente por trás da Chapada Digital</h4>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Luiz Rickston</h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Minha jornada não começou em um escritório com ar-condicionado, mas no asfalto quente da feira de Itaberaba. <strong className="text-gray-900">Aos 10 anos, vendendo coentro ao lado da minha avó, Dona Xica</strong>, aprendi a lição mais valiosa de todas: Ajudar pessoas
                </p>
                <p>
                  Essa base sólida me levou a atuar por 7 anos na maior barbearia da Chapada Diamantina. Lá, não fui apenas barbeiro; fui gerente de marketing e vivenciei na pele as dores de um negócio local que precisa crescer.
                </p>
                <p>
                  Hoje, pai de primeira viagem e estrategista, combinei essa experiência "chão de loja" com um <strong className="text-gray-900">investimento de mais de R$ 10 mil nas tecnologias e cursos mais avançados do mercado digital</strong>.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">+7 Anos</h3>
                  <p className="text-sm text-gray-500">Experiência de Mercado</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">High Tech</h3>
                  <p className="text-sm text-gray-500">Tecnologia de Ponta</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NICHOS DE ATUAÇÃO */}
      <section id="nichos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Soluções Especializadas para o Seu Setor</h2>
            <p className="text-gray-600">Não somos generalistas que "fazem de tudo". Desenvolvemos estratégias validadas para nichos específicos.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {niches.map((niche, idx) => (
              <div key={idx} className="group bg-white border border-gray-100 p-8 rounded-2xl hover:border-[#FF5722] hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-[#FF5722] transform translate-x-4 -translate-y-4">
                  {niche.icon}
                </div>
                <div className="w-12 h-12 bg-orange-50 text-[#FF5722] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
                  {niche.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{niche.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{niche.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ENTREGAMOS (SERVIÇOS) */}
      <section id="servicos" className="py-20 bg-[#1A1C1E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Mais do que Serviços,<br/> Entregamos <span className="text-[#FF5722]">Resultados de Negócio</span>.</h2>
              <p className="text-gray-400">Esqueça o "sobrinho" que faz post. Aqui entregamos estrutura de empresa grande.</p>
            </div>
          </div>

          {/* Grid de Serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 hover:border-[#FF5722]/30">
                <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF5722] to-orange-700 rounded-xl flex items-center justify-center shadow-lg shadow-orange-900/50">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botão Centralizado */}
          <div className="flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#FF5722] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all hover:translate-y-[-2px] shadow-lg shadow-orange-500/40 inline-flex items-center gap-2 group">
              Quero Saber Mais
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESSO (COMO FUNCIONA) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-16">Como transformamos seu negócio</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Diagnóstico", desc: "Análise profunda das falhas, processos manuais e oportunidades." },
                { step: "02", title: "Elaboração de Estratégia", desc: "Plano personalizado da resolução do problema identificado" },
                { step: "03", title: "Implementação", desc: "Implementação de estrategia e ferramentas para obtenção de resultados desejados" },
                { step: "04", title: "Análise e Otimização", desc: "Acompanhamento de resultados e melhoria continua através de dados reais do negocio" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-gray-200">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL / FOOTER */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="bg-[#FF5722] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden mb-20 shadow-2xl shadow-orange-900/50">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <h2 className="relative text-3xl md:text-5xl font-bold mb-6">Pronto para escalar seu negócio?</h2>
             <p className="relative text-white/90 text-lg mb-8 max-w-2xl mx-auto">Sua empresa merece o posicionamento digital que a Chapada Digital entrega. Vamos conversar?</p>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative bg-white text-[#FF5722] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl inline-block">
               Agendar Reunião Agora
             </a>
          </div>

          <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-6">
                
                {/* Logo no Footer corrigida */}
                <img 
                  src="https://drive.google.com/uc?export=download&id=1JNCPCcQPpa3qXXK6P0c5W5A7LQv2mTqE" 
                  alt="Chapada Digital Logo" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />

                <span>Chapada<span className="text-[#FF5722]">Digital</span></span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Transformando a comunicação e vendas das empresas da Chapada Diamantina com tecnologia e estratégia.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#FF5722] transition-colors">
                    <MessageCircle size={18} /> +55 (75) 99119-8502
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/chapadadigital.br?igsh=MWNsZWg5NzA1aWJoYg==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#FF5722] transition-colors">
                    <Instagram size={18} /> @chapadadigital
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sobre" className="hover:text-[#FF5722]">Quem Somos</a></li>
                <li><a href="#servicos" className="hover:text-[#FF5722]">Serviços</a></li>
                <li><a href="#nichos" className="hover:text-[#FF5722]">Nichos</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Chapada Digital. Todos os direitos reservados. Design estratégico.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        title="Envie uma mensagem no WhatsApp"
      >
        <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default Home;
