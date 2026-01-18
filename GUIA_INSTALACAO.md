# 📖 Guia Completo de Instalação - Chapada Digital

Este guia fornece instruções passo a passo para instalar, configurar e executar o site da Chapada Digital em sua máquina local ou servidor.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### 1. **Node.js e npm/pnpm**

**Windows/Mac/Linux:**
- Baixe em: https://nodejs.org/ (versão LTS recomendada)
- Verifique a instalação:
```bash
node --version
npm --version
```

### 2. **Git** (opcional, mas recomendado)
- Baixe em: https://git-scm.com/
- Verifique a instalação:
```bash
git --version
```

### 3. **Editor de Código** (recomendado)
- VS Code: https://code.visualstudio.com/
- WebStorm: https://www.jetbrains.com/webstorm/
- Sublime Text: https://www.sublimetext.com/

---

## 🚀 Instalação Passo a Passo

### Opção 1: Clonar do GitHub

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/chapada-digital.git

# 2. Entre no diretório
cd chapada-digital

# 3. Instale as dependências
pnpm install
# ou
npm install

# 4. Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev

# 5. Abra no navegador
# http://localhost:5173
```

### Opção 2: Download do ZIP

1. Baixe o arquivo `chapada-digital-completo.zip`
2. Extraia em uma pasta de sua escolha
3. Abra o terminal/prompt na pasta
4. Execute os comandos:

```bash
# Instale as dependências
pnpm install
# ou
npm install

# Inicie o desenvolvimento
pnpm dev
# ou
npm run dev
```

---

## ⚙️ Configuração

### 1. **Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Exemplo de variáveis (adicione conforme necessário)
VITE_API_URL=https://api.exemplo.com
VITE_APP_NAME=Chapada Digital
```

### 2. **Atualizar Link do WhatsApp**

Se precisar alterar o link do WhatsApp, edite o arquivo `client/src/pages/Home.tsx`:

```typescript
// Procure por esta linha (linha ~36)
const whatsappLink = 'https://wa.me/message/YOCADKNSILR7D1';

// E substitua pelo seu link
const whatsappLink = 'https://wa.me/seu-numero';
```

### 3. **Atualizar Foto do Founder**

Para trocar a foto do founder:

1. Substitua o arquivo `client/public/images/maelson.jpg` pela sua foto
2. Certifique-se de que o arquivo tem o mesmo nome ou atualize a referência em `Home.tsx`

### 4. **Personalizar Conteúdo**

Edite o arquivo `client/src/pages/Home.tsx` para:
- Alterar textos
- Modificar cores (procure por `#FF5722` para a cor laranja)
- Adicionar/remover seções
- Atualizar informações de contato

---

## 🏃 Executando o Projeto

### Modo Desenvolvimento

```bash
pnpm dev
```

- Abre em: `http://localhost:5173`
- Hot reload automático
- Erros mostrados no console

### Build para Produção

```bash
pnpm build
```

- Cria pasta `dist/` com arquivos otimizados
- Pronto para deploy

### Preview da Build

```bash
pnpm preview
```

- Testa a build de produção localmente
- Útil para verificar antes de fazer deploy

---

## 📦 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento |
| `pnpm build` | Build para produção |
| `pnpm preview` | Preview da build |
| `pnpm check` | Verifica tipos TypeScript |
| `pnpm format` | Formata código com Prettier |

---

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

1. Acesse: https://vercel.com
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Configure:
   - Framework: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
5. Clique em "Deploy"

### Opção 2: Netlify

1. Acesse: https://netlify.com
2. Clique em "New site from Git"
3. Selecione seu repositório
4. Configure:
   - Build Command: `pnpm build`
   - Publish Directory: `dist`
5. Clique em "Deploy"

### Opção 3: GitHub Pages

1. Edite `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/chapada-digital/', // seu repositório
  plugins: [react()],
})
```

2. Execute:
```bash
pnpm build
```

3. Faça push da pasta `dist/` para a branch `gh-pages`

### Opção 4: Servidor Próprio (VPS)

1. Faça SSH no servidor:
```bash
ssh usuario@seu-servidor.com
```

2. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/chapada-digital.git
cd chapada-digital
```

3. Instale dependências:
```bash
pnpm install
```

4. Build:
```bash
pnpm build
```

5. Configure um servidor web (Nginx/Apache):
```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    
    root /home/usuario/chapada-digital/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🐛 Solução de Problemas

### Problema: "Port 5173 already in use"

**Solução:**
```bash
# Use uma porta diferente
pnpm dev -- --port 3000
```

### Problema: "node_modules not found"

**Solução:**
```bash
# Reinstale as dependências
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Problema: Foto não aparece

**Solução:**
1. Verifique se o arquivo está em `client/public/images/maelson.jpg`
2. Verifique o caminho em `Home.tsx`: `/images/maelson.jpg`
3. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Problema: WhatsApp link não funciona

**Solução:**
1. Verifique o formato: `https://wa.me/message/SEU_ID`
2. Teste o link diretamente no navegador
3. Certifique-se de que tem espaços em branco no código

### Problema: Erros de TypeScript

**Solução:**
```bash
# Verifique os tipos
pnpm check

# Corrija os erros mostrados
```

---

## 📚 Estrutura de Pastas Explicada

```
chapada-digital/
│
├── client/                      # Frontend (React)
│   ├── public/
│   │   ├── images/             # Imagens estáticas
│   │   │   └── maelson.jpg     # Foto do founder
│   │   └── index.html          # HTML principal
│   │
│   └── src/
│       ├── pages/
│       │   ├── Home.tsx        # Página principal (EDITAR AQUI)
│       │   └── NotFound.tsx    # Página 404
│       │
│       ├── components/         # Componentes reutilizáveis
│       │   └── ui/            # Componentes shadcn/ui
│       │
│       ├── App.tsx            # Componente raiz
│       ├── main.tsx           # Entry point
│       └── index.css          # Estilos globais
│
├── server/                     # Backend (Express)
│   └── index.ts
│
├── package.json               # Dependências do projeto
├── vite.config.ts            # Configuração do Vite
├── tsconfig.json             # Configuração TypeScript
└── README.md                 # Documentação
```

---

## 🔍 Verificação Final

Após instalar, verifique se tudo está funcionando:

- [ ] Servidor iniciou sem erros
- [ ] Site abre em http://localhost:5173
- [ ] Foto do founder aparece
- [ ] Botão WhatsApp funciona
- [ ] Menu mobile abre/fecha
- [ ] Links de navegação funcionam
- [ ] Cores estão corretas

---

## 📞 Suporte

Se encontrar problemas:

1. **Consulte a documentação oficial:**
   - React: https://react.dev
   - Vite: https://vitejs.dev
   - Tailwind CSS: https://tailwindcss.com

2. **Procure por issues no GitHub:**
   - https://github.com/seu-usuario/chapada-digital/issues

3. **Contate o desenvolvedor:**
   - WhatsApp: https://wa.me/message/YOCADKNSILR7D1

---

## 🎓 Próximos Passos

Após instalar com sucesso:

1. **Personalize o conteúdo** - Edite textos, cores e imagens
2. **Teste em diferentes dispositivos** - Mobile, tablet, desktop
3. **Otimize para SEO** - Adicione meta tags
4. **Configure Analytics** - Google Analytics ou Plausible
5. **Faça deploy** - Escolha uma plataforma acima
6. **Monitore performance** - Use Lighthouse

---

**Desenvolvido com ❤️ para a Chapada Diamantina**

Última atualização: Janeiro de 2026
