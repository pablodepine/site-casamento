// Animações e Scroll Reveal

// Função para revelar elementos ao rolar
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Parallax suave no hero
function parallaxHero() {
  const hero = document.getElementById('heroBg');
  if (!hero) return;
  
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.5;
  
  hero.style.transform = `translate3d(0, ${rate}px, 0)`;
}

// Efeito de scroll suave para links de navegação
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        const navMenu = document.getElementById('navMenu');
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
}

// Header com efeito ao rolar
function headerScrollEffect() {
  const header = document.getElementById('header');
  
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Animação de entrada escalonada
function staggerAnimation() {
  const items = document.querySelectorAll('.timeline-item, .gallery-item, .gift-card');
  
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.6s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 50);
    }, index * 100);
  });
}

// Event Listeners
window.addEventListener('scroll', () => {
  revealOnScroll();
  parallaxHero();
  headerScrollEffect();
});

window.addEventListener('load', () => {
  revealOnScroll();
  smoothScroll();
});

// Exportar funções para uso em outros scripts
window.animations = {
  revealOnScroll,
  parallaxHero,
  smoothScroll,
  headerScrollEffect,
  staggerAnimation
};
