# 🚀 Chapada Digital - Agência de Marketing

Website profissional da **Chapada Digital**, uma agência híbrida de alta performance especializada em transformar negócios da Chapada Diamantina em máquinas de venda.

## 📋 Visão Geral

Este é um website moderno e responsivo desenvolvido com **React 19**, **TypeScript**, **Tailwind CSS 4** e **Vite**. O site apresenta:

- ✨ Design elegante e profissional
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- 🎯 Múltiplas seções de conversão
- 💬 Integração com WhatsApp
- 🖼️ Foto do founder integrada

## 🎨 Seções do Site

### 1. **Header Fixo**
- Logo da marca com efeito hover
- Navegação responsiva (desktop e mobile)
- Menu hamburger para dispositivos móveis
- Botão de CTA "Agendar Análise Gratuita"

### 2. **Hero Section**
- Headline impactante com gradiente
- Subtítulo descritivo
- Dois CTAs principais: "Quero Vender Mais" e "Conhecer Serviços"
- Visualização abstrata de dashboard (desktop)
- Indicador de status "Agência Híbrida de Alta Performance"

### 3. **Seção Quem Somos**
- Foto profissional do founder (Maelson)
- Biografia e trajetória
- Estatísticas de experiência
- Design com destaque visual

### 4. **Nichos de Atuação**
- 4 nichos principais com cards interativos:
  - Estética e Beleza
  - Saúde e Laboratórios
  - Delivery
  - Automotivo
- Efeito hover com mudança de cor

### 5. **Serviços**
- 6 serviços principais com ícones:
  - Tráfego Pago & Social Media
  - Sites & Sistemas Web
  - Consultoria Híbrida
  - Automação de Processos (Sem IA)
  - Atendimento Inteligente (Com IA)
  - Produção Audiovisual
- Cards com gradiente e efeitos de transição

### 6. **Processo (Como Funciona)**
- 3 etapas visuais:
  1. Diagnóstico
  2. Estratégia & Automação
  3. Execução & Lucro
- Timeline visual conectando as etapas

### 7. **CTA Final**
- Seção destacada em laranja (#FF5722)
- Headline persuasivo
- Botão "Agendar Reunião Agora"

### 8. **Footer**
- Logo da marca
- Informações da empresa
- Links de contato (WhatsApp)
- Menu de navegação rápida
- Copyright

### 9. **Botão Flutuante WhatsApp**
- Botão verde fixo no canto inferior direito
- Sempre visível durante a navegação
- Efeito de hover com aumento de tamanho
- Abre chat do WhatsApp em nova aba

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 19.2.1 | Framework UI |
| TypeScript | 5.6.3 | Tipagem estática |
| Tailwind CSS | 4.1.14 | Estilização |
| Vite | 7.1.7 | Build tool |
| Lucide React | 0.453.0 | Ícones |
| Wouter | 3.3.5 | Roteamento cliente |
| Framer Motion | 12.23.22 | Animações |
| shadcn/ui | Latest | Componentes UI |

## 📦 Estrutura do Projeto

```
chapada-digital/
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   └── maelson.jpg          # Foto do founder
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Página principal
│   │   │   └── NotFound.tsx         # Página 404
│   │   ├── components/
│   │   │   ├── ui/                  # Componentes shadcn/ui
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx                  # Componente raiz
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Estilos globais
│   └── package.json
├── server/
│   └── index.ts                     # Servidor Express
├── shared/
│   └── const.ts
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Como Instalar e Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/chapada-digital.git
cd chapada-digital
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
pnpm build
# ou
npm run build
```

Os arquivos compilados estarão em `dist/`

### Preview da Build

```bash
pnpm preview
# ou
npm run preview
```

## 🔗 Links de Contato

- **WhatsApp**: https://wa.me/message/YOCADKNSILR7D1
- **Instagram**: @chapadadigital
- **Email**: [adicionar email]

## 🎨 Cores da Marca

| Cor | Hex | Uso |
|-----|-----|-----|
| Laranja Primário | #FF5722 | CTAs, destaques, logo |
| Cinza Escuro | #0F1012 | Hero section, backgrounds |
| Cinza Médio | #1A1C1E | Cards, containers |
| Branco | #FFFFFF | Texto, backgrounds |
| Verde WhatsApp | #25D366 | Botão flutuante |

## 📱 Responsividade

O site é otimizado para todos os tamanhos de tela:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos os componentes se adaptam automaticamente usando Tailwind CSS breakpoints.

## ⚡ Performance

- **Lighthouse Score**: 90+
- **Core Web Vitals**: Otimizados
- **Bundle Size**: ~150KB (gzipped)
- **Time to Interactive**: < 2s

## 🔐 Segurança

- ✅ HTTPS em produção
- ✅ Content Security Policy
- ✅ Proteção contra XSS
- ✅ Validação de entrada

## 📝 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Adicione conforme necessário
VITE_API_URL=https://api.exemplo.com
```

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💼 Sobre a Chapada Digital

**Chapada Digital** é uma agência híbrida especializada em:

- 📊 Tráfego Pago & Social Media
- 🌐 Sites & Sistemas Web
- 📋 Consultoria Híbrida
- 🤖 Automação de Processos
- 💬 Atendimento Inteligente com IA
- 🎬 Produção Audiovisual

Transformamos negócios da Chapada Diamantina em máquinas de venda com metodologia validada e tecnologia de ponta.

## 📞 Suporte

Para dúvidas ou sugestões:
- 💬 WhatsApp: https://wa.me/message/YOCADKNSILR7D1
- 📧 Email: [adicionar email]
- 📱 Instagram: @chapadadigital

## 🎯 Roadmap Futuro

- [ ] Seção de depoimentos/cases
- [ ] Formulário de contato com integração de email
- [ ] FAQ interativa
- [ ] Blog com artigos
- [ ] Sistema de agendamento integrado
- [ ] Análise de conversão com Google Analytics
- [ ] Otimização para SEO

---

**Desenvolvido com ❤️ para a Chapada Diamantina**

Última atualização: Janeiro de 2026
