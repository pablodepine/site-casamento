// Script Principal

// Menu Mobile Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Contador Regressivo
function countdown() {
    // Data do casamento (ajuste conforme necessário)
    const weddingDate = new Date('2027-07-10T18:00:00').getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Cálculos de tempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualizar elementos
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

        // Se o contador terminar
        if (distance < 0) {
            clearInterval(timer);
            if (daysEl) daysEl.textContent = '000';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
        }
    }, 1000);
}

// Copiar chave PIX
const pixCopyBtn = document.getElementById('pixCopyBtn');
const pixKey = document.getElementById('pixKey');

if (pixCopyBtn && pixKey) {
    pixCopyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(pixKey.textContent);

            // Feedback visual
            const originalText = pixCopyBtn.textContent;
            pixCopyBtn.textContent = '✓ Copiado!';
            pixCopyBtn.style.background = 'var(--button-background-color)';

            setTimeout(() => {
                pixCopyBtn.textContent = originalText;
                pixCopyBtn.style.background = '';
            }, 2000);
        } catch (err) {
            console.error('Erro ao copiar:', err);
            alert('Não foi possível copiar. Por favor, copie manualmente.');
        }
    });
}

// Validação do formulário RSVP
const rsvpForm = document.getElementById('rsvpForm');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name || !email) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }

        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Por favor, insira um e-mail válido.');
            return false;
        }

        // Se tudo estiver ok, o formulário será enviado
        return true;
    });
}

// Criar imagem placeholder para hero se não existir
function createHeroPlaceholder() {
    const heroBg = document.getElementById('heroBg');
    if (heroBg && heroBg.src.includes('hero-bg.jpg')) {
        // Se a imagem não carregar, usar um gradiente
        heroBg.addEventListener('error', () => {
            heroBg.style.display = 'none';
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.background = 'linear-gradient(135deg, #FFE5E5 0%, #FFB6C1 50%, #D4AF37 100%)';
            }
        });
    }
}

// Criar placeholders para galeria se não existirem
function createGalleryPlaceholders() {
    const galleryItems = document.querySelectorAll('.gallery-img');

    galleryItems.forEach((img, index) => {
        img.addEventListener('error', () => {
            // Criar um canvas com gradiente como placeholder
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 400;
            const ctx = canvas.getContext('2d');

            // Gradiente
            const gradient = ctx.createLinearGradient(0, 0, 400, 400);
            const colors = ['#FFE5E5', '#FFB6C1', '#D4AF37', '#F4E4B8'];
            gradient.addColorStop(0, colors[index % colors.length]);
            gradient.addColorStop(1, colors[(index + 1) % colors.length]);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 400, 400);

            // Texto
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`Foto ${index + 1}`, 200, 200);

            img.src = canvas.toDataURL();
        });
    });
}

// Criar placeholder para QR Code PIX
function createPixPlaceholder() {
    const pixQrcode = document.getElementById('pixQrcode');
    if (pixQrcode && pixQrcode.src.includes('pix-qrcode.png')) {
        pixQrcode.addEventListener('error', () => {
            // Criar um canvas com placeholder
            const canvas = document.createElement('canvas');
            canvas.width = 300;
            canvas.height = 300;
            const ctx = canvas.getContext('2d');

            // Fundo branco
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, 300, 300);

            // Borda
            ctx.strokeStyle = '#FFB6C1';
            ctx.lineWidth = 4;
            ctx.strokeRect(10, 10, 280, 280);

            // Texto
            ctx.fillStyle = '#2C2C2C';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('QR CODE PIX', 150, 130);
            ctx.font = '16px Arial';
            ctx.fillText('Adicione seu', 150, 160);
            ctx.fillText('QR Code aqui', 150, 180);

            pixQrcode.src = canvas.toDataURL();
        });
    }
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    countdown();
    createHeroPlaceholder();
    createGalleryPlaceholders();
    createPixPlaceholder();
});

// Prevenir comportamento padrão de arrastar imagens
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
