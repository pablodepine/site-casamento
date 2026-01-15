// Galeria e Lightbox

class Gallery {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightboxImg');
        this.closeBtn = document.getElementById('lightboxClose');
        this.prevBtn = document.getElementById('lightboxPrev');
        this.nextBtn = document.getElementById('lightboxNext');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;

        this.init();
    }

    init() {
        // Adicionar evento de clique em cada item da galeria
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openLightbox(index);
            });
        });

        // Eventos do lightbox
        this.closeBtn.addEventListener('click', () => this.closeLightbox());
        this.prevBtn.addEventListener('click', () => this.prevImage());
        this.nextBtn.addEventListener('click', () => this.nextImage());

        // Fechar ao clicar fora da imagem
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.prevImage();
            if (e.key === 'ArrowRight') this.nextImage();
        });
    }

    openLightbox(index) {
        this.currentIndex = index;
        const img = this.galleryItems[index].querySelector('.gallery-img');
        this.lightboxImg.src = img.src;
        this.lightboxImg.alt = img.alt;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
        const img = this.galleryItems[this.currentIndex].querySelector('.gallery-img');
        this.lightboxImg.src = img.src;
        this.lightboxImg.alt = img.alt;
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
        const img = this.galleryItems[this.currentIndex].querySelector('.gallery-img');
        this.lightboxImg.src = img.src;
        this.lightboxImg.alt = img.alt;
    }
}

// Lazy loading de imagens
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Inicializar galeria quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
    lazyLoadImages();
});
