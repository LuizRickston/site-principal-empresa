# 🎨 Guia de Personalização - Chapada Digital

Este guia mostra como personalizar o site de acordo com suas necessidades.

---

## 📝 Alterando Textos

### 1. Headline Principal (Hero)

**Arquivo:** `client/src/pages/Home.tsx` (linha ~162)

```typescript
// Antes
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
  Transformamos Negócios da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-orange-400">Chapada</span> em Máquinas de Venda.
</h1>

// Depois
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
  Seu Novo Título Aqui <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-orange-400">com Destaque</span>
</h1>
```

### 2. Subtítulo

**Arquivo:** `client/src/pages/Home.tsx` (linha ~165)

```typescript
<p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
  Seu novo subtítulo aqui. Pode ter várias linhas.
</p>
```

### 3. Seção "Quem Somos"

**Arquivo:** `client/src/pages/Home.tsx` (linha ~254-266)

```typescript
<h4 className="text-[#FF5722] font-bold uppercase tracking-wider mb-2 text-sm">
  Seu Subtítulo
</h4>
<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
  Seu Nome
</h2>

<div className="space-y-4 text-gray-600 text-lg leading-relaxed">
  <p>Seu primeiro parágrafo aqui...</p>
  <p>Seu segundo parágrafo aqui...</p>
  <p>Seu terceiro parágrafo aqui...</p>
</div>
```

---

## 🎨 Alterando Cores

### 1. Cor Primária (Laranja)

**Arquivo:** `client/src/pages/Home.tsx`

Procure por `#FF5722` e substitua:

```typescript
// Exemplo: Mudar para azul
#FF5722  →  #0066FF

// Lugares onde aparece:
// - Botões
// - Links
// - Destaques
// - Logo
```

**Dica:** Use Ctrl+H (Find and Replace) para substituir todas as ocorrências.

### 2. Cor de Fundo

**Arquivo:** `client/src/pages/Home.tsx`

```typescript
// Hero section (linha ~146)
<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0F1012] overflow-hidden">
  {/* Mude #0F1012 para sua cor */}
</section>

// Serviços (linha ~310)
<section id="servicos" className="py-20 bg-[#1A1C1E] text-white">
  {/* Mude #1A1C1E para sua cor */}
</section>
```

### 3. Cores em Tailwind

**Arquivo:** `client/src/index.css`

```css
:root {
  /* Altere estas variáveis */
  --primary: #FF5722;
  --secondary: #0F1012;
  --accent: #25D366;
}
```

---

## 🖼️ Alterando Imagens

### 1. Foto do Founder

**Passo 1:** Prepare sua foto
- Tamanho: 400x500px (proporção 4:5)
- Formato: JPG ou PNG
- Qualidade: Alta resolução

**Passo 2:** Substitua o arquivo
```
client/public/images/maelson.jpg  →  Sua foto aqui
```

**Passo 3:** Se usar outro nome, atualize em `Home.tsx`
```typescript
// Linha ~230
<img 
  src="/images/sua-foto.jpg"  // Mude o nome aqui
  alt="Seu Nome" 
  className="w-full h-full object-cover"
/>
```

### 2. Logo da Marca

**Arquivo:** `client/src/pages/Home.tsx` (linhas ~91 e ~388)

```typescript
// Antes (Google Drive)
<img 
  src="https://drive.google.com/uc?export=download&id=1JNCPCcQPpa3qXXK6P0c5W5A7LQv2mTqE" 
  alt="Chapada Digital Logo" 
/>

// Depois (Arquivo local)
<img 
  src="/images/seu-logo.png" 
  alt="Seu Logo" 
/>
```

---

## 🔗 Alterando Links

### 1. Link do WhatsApp

**Arquivo:** `client/src/pages/Home.tsx` (linha ~36)

```typescript
// Antes
const whatsappLink = 'https://wa.me/message/YOCADKNSILR7D1';

// Depois
const whatsappLink = 'https://wa.me/message/SEU_ID_AQUI';

// Ou com número de telefone
const whatsappLink = 'https://wa.me/5585988888888';
```

### 2. Links de Redes Sociais

**Arquivo:** `client/src/pages/Home.tsx` (linha ~408-410)

```typescript
// Instagram
<li className="flex items-center gap-3 hover:text-[#FF5722] cursor-pointer transition-colors">
  <Instagram size={18} /> @seu-instagram
</li>

// Ou como link
<a href="https://instagram.com/seu-instagram" target="_blank">
  <Instagram size={18} /> @seu-instagram
</a>
```

---

## 📱 Alterando Nichos

**Arquivo:** `client/src/pages/Home.tsx` (linha ~39-42)

```typescript
const niches = [
  { 
    title: "Seu Nicho 1", 
    icon: <Activity size={32} />,  // Mude o ícone
    desc: "Descrição do seu nicho..." 
  },
  { 
    title: "Seu Nicho 2", 
    icon: <ShoppingBag size={32} />,
    desc: "Descrição do seu nicho..." 
  },
  // Adicione mais nichos conforme necessário
];
```

**Ícones disponíveis:**
- `Activity` - Saúde
- `ShoppingBag` - Compras
- `Car` - Automotivo
- `Stethoscope` - Médico
- `Users` - Pessoas
- `Monitor` - Tecnologia
- `Video` - Vídeo
- `TrendingUp` - Crescimento
- `Bot` - Automação
- `Workflow` - Processos

---

## 🛠️ Alterando Serviços

**Arquivo:** `client/src/pages/Home.tsx` (linha ~45-76)

```typescript
const services = [
  { 
    title: "Seu Serviço 1", 
    icon: <TrendingUp className="text-white" size={24} />,
    desc: "Descrição do seu serviço..." 
  },
  { 
    title: "Seu Serviço 2", 
    icon: <Monitor className="text-white" size={24} />,
    desc: "Descrição do seu serviço..." 
  },
  // Adicione mais serviços
];
```

---

## 📊 Alterando Processo

**Arquivo:** `client/src/pages/Home.tsx` (linha ~348-360)

```typescript
{[
  { 
    step: "01", 
    title: "Seu Passo 1", 
    desc: "Descrição do passo 1" 
  },
  { 
    step: "02", 
    title: "Seu Passo 2", 
    desc: "Descrição do passo 2" 
  },
  { 
    step: "03", 
    title: "Seu Passo 3", 
    desc: "Descrição do passo 3" 
  },
].map((item, i) => (...))}
```

---

## 🎯 Alterando CTAs (Call to Action)

### 1. Botão Principal

**Arquivo:** `client/src/pages/Home.tsx` (linha ~172)

```typescript
// Antes
<a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
   className="bg-[#FF5722] text-white px-8 py-4 rounded-lg font-bold text-lg ...">
  Quero Vender Mais
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</a>

// Depois
<a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
   className="bg-[#FF5722] text-white px-8 py-4 rounded-lg font-bold text-lg ...">
  Seu Texto Aqui
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</a>
```

### 2. Botão Secundário

**Arquivo:** `client/src/pages/Home.tsx` (linha ~176)

```typescript
<button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
  Seu Texto Aqui
</button>
```

---

## 🏷️ Alterando Informações de Contato

**Arquivo:** `client/src/pages/Home.tsx` (linha ~404-410)

```typescript
<div>
  <h4 className="font-bold text-lg mb-6">Contato</h4>
  <ul className="space-y-4 text-gray-400">
    <li>
      <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" 
         className="flex items-center gap-3 hover:text-[#FF5722] transition-colors">
        <MessageCircle size={18} /> Seu WhatsApp
      </a>
    </li>
    <li className="flex items-center gap-3 hover:text-[#FF5722] cursor-pointer transition-colors">
      <Instagram size={18} /> @seu-instagram
    </li>
  </ul>
</div>
```

---

## 🎬 Adicionando Animações

### 1. Animação de Entrada

```typescript
<div className="animate-in slide-in-from-top-5 duration-500">
  Conteúdo com animação
</div>
```

**Opções de animação:**
- `animate-in` - Entrada
- `animate-out` - Saída
- `slide-in-from-top` - Desliza de cima
- `fade-in` - Desvanece
- `zoom-in` - Zoom

### 2. Animação de Hover

```typescript
<div className="hover:scale-110 hover:shadow-lg transition-all duration-300">
  Conteúdo com hover
</div>
```

---

## 📱 Alterando Layout Mobile

### 1. Esconder Elemento em Mobile

```typescript
// Esconde em mobile, mostra em desktop
<div className="hidden lg:block">
  Visível apenas em desktop
</div>
```

### 2. Mostrar Elemento em Mobile

```typescript
// Mostra em mobile, esconde em desktop
<div className="lg:hidden">
  Visível apenas em mobile
</div>
```

### 3. Alterar Tamanho em Mobile

```typescript
// Pequeno em mobile, grande em desktop
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  Título responsivo
</h1>
```

---

## 🔤 Alterando Tipografia

**Arquivo:** `client/src/index.css`

```css
/* Tamanhos de fonte */
h1: text-6xl (3.75rem)
h2: text-4xl (2.25rem)
h3: text-xl (1.25rem)
p: text-lg (1.125rem)
small: text-sm (0.875rem)

/* Pesos de fonte */
font-light: 300
font-normal: 400
font-semibold: 600
font-bold: 700
font-extrabold: 800
```

---

## 🔍 Alterando Meta Tags (SEO)

**Arquivo:** `client/index.html`

```html
<head>
  <title>Chapada Digital - Agência de Marketing</title>
  <meta name="description" content="Sua descrição aqui">
  <meta name="keywords" content="marketing, digital, chapada">
  <meta name="author" content="Seu Nome">
  <meta property="og:title" content="Chapada Digital">
  <meta property="og:description" content="Sua descrição">
  <meta property="og:image" content="https://seu-site.com/imagem.jpg">
</head>
```

---

## 🚀 Adicionando Novas Seções

### 1. Criar Nova Seção

```typescript
// Em Home.tsx, adicione:
<section id="sua-secao" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
      Título da Seção
    </h2>
    
    {/* Seu conteúdo aqui */}
  </div>
</section>
```

### 2. Adicionar ao Menu

```typescript
// Linha ~105
{['Serviços', 'Sobre', 'Nichos', 'Sua Seção'].map((item) => (
  <a 
    key={item} 
    href={`#${item.toLowerCase()}`}
    className="font-medium text-gray-200 hover:text-[#FF5722] transition-colors"
  >
    {item}
  </a>
))}
```

---

## 📋 Checklist de Personalização

- [ ] Alterar headline principal
- [ ] Alterar subtítulo
- [ ] Alterar foto do founder
- [ ] Alterar nome e biografia
- [ ] Alterar nichos
- [ ] Alterar serviços
- [ ] Alterar processo
- [ ] Alterar link do WhatsApp
- [ ] Alterar redes sociais
- [ ] Alterar cores da marca
- [ ] Alterar logo
- [ ] Alterar meta tags
- [ ] Testar em mobile
- [ ] Testar em desktop
- [ ] Testar links

---

## 💡 Dicas Importantes

1. **Sempre fazer backup** antes de alterar
2. **Testar em mobile** após mudanças
3. **Verificar links** antes de publicar
4. **Usar cores consistentes** com a marca
5. **Manter textos concisos** e impactantes
6. **Usar imagens de alta qualidade**
7. **Testar em diferentes navegadores**

---

## 🆘 Problemas Comuns

### Problema: Texto não aparece
- Verifique a cor (pode estar branco em fundo branco)
- Verifique se o elemento não está escondido com `hidden`

### Problema: Imagem não carrega
- Verifique o caminho do arquivo
- Verifique se o arquivo existe em `client/public/images/`
- Limpe o cache (Ctrl+Shift+Delete)

### Problema: Link não funciona
- Verifique o URL
- Certifique-se de que tem `https://`
- Teste o link em um navegador novo

---

**Desenvolvido com ❤️ para a Chapada Diamantina**

Última atualização: Janeiro de 2026
