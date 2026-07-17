const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

button.addEventListener('click', () => {
  nav.classList.toggle('open');
  button.setAttribute('aria-expanded', nav.classList.contains('open'));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll(
  '#inicio, #artigos, #categorias, #sobre, #contato'
);

function atualizarMenu() {
  let secaoAtual = 'inicio';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 150) {
      secaoAtual = section.id;
    }
  });

  navLinks.forEach(link => {
    const destino = link.getAttribute('href').replace('#', '');

    if (destino === secaoAtual) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', atualizarMenu);
window.addEventListener('load', atualizarMenu);
