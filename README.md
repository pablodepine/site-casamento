# 💕 Site de Casamento

Site moderno e elegante para celebrar nosso casamento! Compartilhe nossa história, veja fotos e contribua com presentes.

## 🎯 Funcionalidades

- ✨ Design moderno e romântico
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- ⏰ Contador regressivo para o grande dia
- 📖 Timeline da nossa história
- 🖼️ Galeria de fotos com lightbox
- 🎁 Lista de presentes com PIX/QR Code
- 📝 Formulário de confirmação de presença
- 🎨 Animações suaves e micro-interações

## 🚀 Como Usar

### Visualizar Localmente

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no seu navegador
3. Pronto! O site está funcionando

Não precisa instalar nada, é só HTML, CSS e JavaScript puro!

### Personalizar o Site

#### 1. Informações Básicas

Edite o arquivo `index.html` e altere:

- **Nomes do casal**: Procure por "Ana & Bruno" e substitua pelos seus nomes
- **Data do casamento**: Procure por "15 de Junho de 2026" e altere
- **Local**: Procure por "São Paulo, SP" e altere

#### 2. Contador Regressivo

No arquivo `js/main.js`, linha 15, altere a data:

```javascript
const weddingDate = new Date('2026-06-15T18:00:00').getTime();
```

#### 3. Nossa História

No arquivo `index.html`, seção "Nossa História", edite os cards da timeline com suas próprias datas e histórias.

#### 4. Fotos

- **Foto Hero**: Adicione sua foto em `images/hero/hero-bg.jpg`
- **Galeria**: Adicione suas fotos em `images/gallery/` (photo1.jpg, photo2.jpg, etc.)
- Você pode adicionar mais fotos duplicando os elementos `.gallery-item` no HTML

#### 5. QR Code PIX

- Gere seu QR Code PIX e salve em `images/qrcode/pix-qrcode.png`
- No arquivo `index.html`, procure por `seuemail@exemplo.com` e substitua pela sua chave PIX

#### 6. Formulário de Confirmação

No arquivo `index.html`, seção de confirmação, altere:

```html
<form action="https://formsubmit.co/seuemail@exemplo.com" method="POST">
```

Substitua `seuemail@exemplo.com` pelo seu e-mail para receber as confirmações.

**Importante**: Na primeira vez que alguém enviar o formulário, você receberá um e-mail do FormSubmit pedindo confirmação. Clique no link para ativar.

#### 7. Cores e Estilo

Para alterar as cores, edite o arquivo `css/variables.css`:

```css
--color-primary: #FFB6C1;        /* Rosa principal */
--color-secondary: #D4AF37;      /* Dourado */
```

## 📦 Estrutura de Arquivos

```
site-casamento/
├── index.html              # Página principal
├── css/
│   ├── reset.css          # Reset CSS
│   ├── variables.css      # Variáveis de design (cores, fontes, etc)
│   ├── components.css     # Componentes reutilizáveis
│   └── main.css           # Estilos principais
├── js/
│   ├── animations.js      # Animações e scroll effects
│   ├── gallery.js         # Galeria e lightbox
│   └── main.js            # Script principal
├── images/
│   ├── hero/              # Imagem de fundo do hero
│   ├── gallery/           # Fotos da galeria
│   └── qrcode/            # QR Code PIX
├── .gitignore
└── README.md
```

## 🌐 Como Fazer Deploy

### Opção 1: GitHub Pages (Recomendado)

1. Crie um repositório no GitHub (pode ser privado)
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Em "Source", selecione "main branch"
5. Clique em "Save"
6. Seu site estará disponível em `https://seuusuario.github.io/nome-do-repo`

### Opção 2: Netlify

1. Acesse [netlify.com](https://www.netlify.com)
2. Arraste a pasta do projeto para o Netlify Drop
3. Pronto! Seu site está no ar

### Opção 3: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe do GitHub ou faça upload da pasta
4. Deploy automático!

## 📝 Conventional Commits

Este projeto usa Conventional Commits. Exemplos:

```bash
git commit -m "feat: adiciona seção de presentes"
git commit -m "fix: corrige contador regressivo"
git commit -m "docs: atualiza README com instruções"
git commit -m "style: ajusta cores do tema"
git commit -m "refactor: reorganiza estrutura CSS"
```

**Tipos de commit:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, estilo
- `refactor`: Refatoração de código
- `perf`: Melhoria de performance
- `test`: Testes
- `chore`: Tarefas gerais

## 🎨 Tecnologias Utilizadas

- HTML5
- CSS3 (Variáveis CSS, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Google Fonts (Playfair Display, Inter)
- FormSubmit (para formulário sem backend)

## 💡 Dicas

1. **Otimize as imagens**: Use ferramentas como [TinyPNG](https://tinypng.com) para reduzir o tamanho das fotos
2. **Teste em diferentes dispositivos**: Abra o site no celular, tablet e desktop
3. **Compartilhe com antecedência**: Envie o link para os convidados com pelo menos 1 mês de antecedência
4. **Backup**: Faça backup das fotos originais antes de fazer upload

## 🐛 Problemas Comuns

**As imagens não aparecem:**
- Verifique se os nomes dos arquivos estão corretos
- Certifique-se de que as imagens estão nas pastas corretas
- Os nomes de arquivo são case-sensitive (maiúsculas/minúsculas importam)

**O formulário não funciona:**
- Verifique se você confirmou o e-mail no FormSubmit
- Certifique-se de que o e-mail está correto no código

**O contador não funciona:**
- Verifique se a data está no formato correto: `YYYY-MM-DDTHH:MM:SS`
- Certifique-se de que a data está no futuro

## 📞 Suporte

Se tiver dúvidas ou problemas, verifique:
1. Se todos os arquivos estão nas pastas corretas
2. Se não há erros no console do navegador (F12)
3. Se as personalizações foram feitas corretamente

## ❤️ Licença

Este projeto é livre para uso pessoal. Sinta-se à vontade para personalizar como quiser!

---

**Feito com muito amor para celebrar momentos especiais! 💕**
