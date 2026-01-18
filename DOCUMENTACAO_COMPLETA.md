# 📚 Documentação Completa - Chapada Digital

Bem-vindo à documentação completa do site da Chapada Digital. Este arquivo serve como índice para toda a documentação do projeto.

## 📑 Índice de Documentos

### 1. **README.md** - Visão Geral do Projeto
- Descrição geral do projeto
- Stack tecnológico
- Estrutura de pastas
- Como instalar e executar
- Links de contato
- Roadmap futuro

**Quando ler:** Primeiro documento a ler para entender o projeto

---

### 2. **GUIA_INSTALACAO.md** - Instalação Passo a Passo
- Pré-requisitos
- Instalação em Windows/Mac/Linux
- Configuração de variáveis de ambiente
- Como executar em desenvolvimento
- Como fazer build para produção
- Opções de deploy (Vercel, Netlify, GitHub Pages, VPS)
- Solução de problemas comuns

**Quando ler:** Antes de começar a trabalhar no projeto

---

### 3. **ARQUITETURA.md** - Arquitetura Técnica
- Visão geral da arquitetura
- Decisões arquiteturais
- Estrutura de componentes
- Fluxo de dados
- Sistema de design
- Otimizações de performance
- Padrões e convenções
- Debugging

**Quando ler:** Para entender como o projeto é estruturado

---

### 4. **PERSONALIZACAO.md** - Guia de Personalização
- Como alterar textos
- Como alterar cores
- Como alterar imagens
- Como alterar links
- Como adicionar/modificar nichos
- Como adicionar/modificar serviços
- Como adicionar animações
- Dicas importantes

**Quando ler:** Quando quiser customizar o site

---

## 🎯 Roteiros Rápidos

### Quero começar rápido
1. Leia: **README.md**
2. Siga: **GUIA_INSTALACAO.md**
3. Execute: `pnpm install && pnpm dev`

### Quero entender a arquitetura
1. Leia: **README.md** (seção Stack Tecnológico)
2. Leia: **ARQUITETURA.md**
3. Explore: `client/src/pages/Home.tsx`

### Quero personalizar o site
1. Leia: **PERSONALIZACAO.md**
2. Edite: `client/src/pages/Home.tsx`
3. Teste: `pnpm dev`

### Quero fazer deploy
1. Leia: **GUIA_INSTALACAO.md** (seção Deploy)
2. Escolha uma plataforma
3. Siga as instruções específicas

---

## 📁 Estrutura de Arquivos

```
chapada-digital/
├── README.md                    # Visão geral (COMECE AQUI)
├── GUIA_INSTALACAO.md          # Como instalar
├── ARQUITETURA.md              # Arquitetura técnica
├── PERSONALIZACAO.md           # Como personalizar
├── DOCUMENTACAO_COMPLETA.md    # Este arquivo
├── .gitignore                  # Arquivos a ignorar no Git
│
├── client/                     # Frontend (React)
│   ├── public/
│   │   ├── images/
│   │   │   └── maelson.jpg    # Foto do founder
│   │   └── index.html
│   │
│   └── src/
│       ├── pages/
│       │   └── Home.tsx        # ARQUIVO PRINCIPAL (editar aqui)
│       ├── components/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
├── server/
│   └── index.ts
│
├── package.json                # Dependências
├── vite.config.ts             # Configuração Vite
├── tsconfig.json              # Configuração TypeScript
└── pnpm-lock.yaml             # Lock file
```

---

## 🚀 Primeiros Passos

### 1. Instalação
```bash
# Clone ou extraia o projeto
git clone seu-repositorio

# Entre na pasta
cd chapada-digital

# Instale as dependências
pnpm install

# Inicie o desenvolvimento
pnpm dev
```

### 2. Personalização Básica
- Abra `client/src/pages/Home.tsx`
- Procure por `#FF5722` para alterar a cor laranja
- Procure por "Chapada Digital" para alterar o nome
- Procure por `whatsappLink` para alterar o WhatsApp

### 3. Testar
- Abra http://localhost:5173 no navegador
- Teste em mobile (F12 > Toggle device toolbar)
- Teste os links do WhatsApp

### 4. Deploy
- Faça `pnpm build`
- Escolha uma plataforma (Vercel, Netlify, etc)
- Siga as instruções em **GUIA_INSTALACAO.md**

---

## 🎨 Personalizações Comuns

### Mudar Cor Principal
**Arquivo:** `client/src/pages/Home.tsx`
```bash
# Procure por #FF5722 e substitua
Ctrl+H: #FF5722 → #sua-cor
```

### Mudar Foto
**Arquivo:** `client/public/images/maelson.jpg`
- Substitua pela sua foto
- Mantenha o tamanho 400x500px

### Mudar WhatsApp
**Arquivo:** `client/src/pages/Home.tsx` (linha ~36)
```typescript
const whatsappLink = 'https://wa.me/seu-numero';
```

### Mudar Textos
**Arquivo:** `client/src/pages/Home.tsx`
- Procure pelo texto que quer alterar
- Substitua pelo novo texto

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento

# Build
pnpm build            # Cria build para produção
pnpm preview          # Testa a build localmente

# Qualidade
pnpm check            # Verifica tipos TypeScript
pnpm format           # Formata código com Prettier

# Git
git status            # Ver arquivos alterados
git add .             # Adicionar todos os arquivos
git commit -m "msg"   # Fazer commit
git push              # Fazer push para GitHub
```

---

## 📚 Recursos Externos

### Documentação Oficial
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

### Ferramentas Úteis
- [VS Code](https://code.visualstudio.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Git](https://git-scm.com/)

### Plataformas de Deploy
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Railway](https://railway.app)

---

## ❓ FAQ

### P: Como adiciono uma nova seção?
**R:** Veja **PERSONALIZACAO.md** > "Adicionando Novas Seções"

### P: Como mudo a cor da marca?
**R:** Veja **PERSONALIZACAO.md** > "Alterando Cores"

### P: Como faço deploy?
**R:** Veja **GUIA_INSTALACAO.md** > "Deploy"

### P: Como adiciono um novo serviço?
**R:** Veja **PERSONALIZACAO.md** > "Alterando Serviços"

### P: Qual é o tamanho ideal da foto?
**R:** 400x500px em JPEG ou PNG

### P: Posso mudar o layout?
**R:** Sim, edite o arquivo `Home.tsx` e use Tailwind CSS

---

## 🐛 Problemas Comuns

### Erro: "Port 5173 already in use"
```bash
pnpm dev -- --port 3000
```

### Erro: "node_modules not found"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Foto não aparece
- Verifique se está em `client/public/images/maelson.jpg`
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Link do WhatsApp não funciona
- Verifique o formato: `https://wa.me/message/ID`
- Teste o link em um navegador novo

---

## 📞 Suporte

- **WhatsApp:** https://wa.me/message/YOCADKNSILR7D1
- **GitHub Issues:** [Seu repositório]/issues
- **Email:** [Seu email]

---

## 📋 Checklist de Lançamento

- [ ] Ler README.md
- [ ] Instalar dependências
- [ ] Testar localmente
- [ ] Personalizar conteúdo
- [ ] Alterar cores e imagens
- [ ] Testar em mobile
- [ ] Testar em desktop
- [ ] Testar links do WhatsApp
- [ ] Fazer build
- [ ] Fazer deploy
- [ ] Testar site em produção
- [ ] Configurar domínio personalizado

---

## 🎓 Próximos Passos

Após lançar o site:

1. **Monitorar performance** - Use Google Lighthouse
2. **Adicionar Analytics** - Google Analytics ou Plausible
3. **Otimizar SEO** - Adicionar meta tags e schema
4. **Criar blog** - Adicionar seção de artigos
5. **Implementar formulário** - Capturar leads
6. **Adicionar FAQ** - Responder dúvidas comuns
7. **Integrar CRM** - Automação de vendas

---

## 📝 Versionamento

- **Versão Atual:** 1.0.0
- **Última Atualização:** Janeiro de 2026
- **Compatibilidade:** Node.js 18+

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ para a Chapada Diamantina.

---

**Comece pelo README.md e siga o guia de instalação. Boa sorte! 🚀**
