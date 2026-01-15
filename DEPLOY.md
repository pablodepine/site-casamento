# 🚀 Guia Rápido de Deploy - Site de Casamento

## Opção 1: GitHub Pages (Mais Simples)

### Passo 1: Criar Repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository"
3. Nome: `site-casamento` (ou o que preferir)
4. Marque como **Private** (repositório privado, site público)
5. Clique em "Create repository"

### Passo 2: Conectar seu Projeto ao GitHub
Abra o PowerShell no diretório do projeto e execute:

```powershell
cd C:\Users\pablo\.gemini\antigravity\scratch\site-casamento

# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/site-casamento.git

# Renomear branch para main
git branch -M main

# Enviar código para o GitHub
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. No seu repositório no GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **main branch**
4. Clique em **Save**
5. Aguarde 1-2 minutos

✅ **Pronto!** Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/site-casamento
```

---

## Opção 2: Netlify (Ainda Mais Rápido)

### Método 1: Drag & Drop
1. Acesse [netlify.com](https://www.netlify.com)
2. Faça login (pode usar conta do GitHub)
3. Arraste a pasta `site-casamento` para a área de drop
4. Aguarde o deploy (30 segundos)

✅ **Pronto!** URL gerada automaticamente: `seu-site-123abc.netlify.app`

### Método 2: Conectar ao GitHub
1. Faça push para o GitHub (passos da Opção 1)
2. No Netlify, clique em "New site from Git"
3. Conecte ao GitHub e selecione o repositório
4. Deploy automático a cada commit!

---

## Opção 3: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `site-casamento`
5. Clique em "Deploy"

✅ **Pronto!** URL: `site-casamento.vercel.app`

---

## Configurar Domínio Próprio (Opcional)

### Comprar Domínio
Sugestões de sites:
- [Registro.br](https://registro.br) - Domínios .br (mais barato)
- [GoDaddy](https://godaddy.com)
- [Namecheap](https://namecheap.com)

Exemplos de domínios:
- `nosocasamento.com.br`
- `anabruno2026.com.br`
- `casamentoanabruno.com`

### Configurar DNS

#### Para GitHub Pages:
1. No seu provedor de domínio, adicione:
   - **CNAME**: `www` → `SEU-USUARIO.github.io`
   - **A Records**:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

2. No repositório GitHub, crie arquivo `CNAME` com:
   ```
   www.seudominio.com.br
   ```

#### Para Netlify/Vercel:
1. No painel do Netlify/Vercel, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Siga as instruções para configurar DNS

---

## Checklist Antes do Deploy

- [ ] Personalizei nomes do casal
- [ ] Atualizei data e local
- [ ] Configurei contador regressivo
- [ ] Adicionei fotos reais (ou deixei placeholders)
- [ ] Configurei chave PIX
- [ ] Configurei e-mail do FormSubmit
- [ ] Testei localmente (abri o index.html)

---

## Atualizar o Site Depois do Deploy

### Se usou GitHub Pages/Netlify/Vercel:
```powershell
# Faça suas alterações nos arquivos
# Depois:
git add .
git commit -m "feat: atualiza fotos do casal"
git push

# Deploy automático em 1-2 minutos!
```

---

## Compartilhar com Convidados

Depois do deploy, compartilhe o link:

**Mensagem sugerida:**
```
🎉 Estamos nos casando! 💕

Acesse nosso site para ver nossa história, 
galeria de fotos e confirmar sua presença:

🔗 [LINK DO SEU SITE]

Contamos com você neste dia tão especial!

Ana & Bruno ❤️
```

---

## Suporte

**Problemas com GitHub Pages?**
- Verifique se o repositório está público ou se GitHub Pages está ativado
- Aguarde alguns minutos após ativar

**Problemas com Netlify/Vercel?**
- Verifique os logs de deploy no painel
- Certifique-se de que todos os arquivos foram enviados

**Dúvidas?**
- Consulte o [README.md](file:///C:/Users/pablo/.gemini/antigravity/scratch/site-casamento/README.md) completo
- Documentação do [GitHub Pages](https://pages.github.com)
- Documentação do [Netlify](https://docs.netlify.com)

---

**Boa sorte com o casamento! 💕**
