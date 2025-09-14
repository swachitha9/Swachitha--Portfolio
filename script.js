document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => menu.classList.toggle('show'));
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      menu && menu.classList.remove('show');
    }
  });
});
