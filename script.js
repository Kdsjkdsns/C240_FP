document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.querySelector('.site-nav');
  const aiToggle = document.getElementById('ai-bar-toggle');
  const aiPopup = document.getElementById('ai-popup');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  if (aiToggle && aiPopup) {
    aiToggle.addEventListener('click', () => {
      aiPopup.classList.toggle('open');
    });
  }

  document.querySelectorAll('[data-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        aiPopup?.classList.remove('open');
      }
    });
  });
});
