  // Menú móvil
  const body = document.body, burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.drawer a').forEach(a => a.addEventListener('click', () => {
    body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', false);
  }));
  // Newsletter: mientras no esté conectada a una herramienta, solo muestra el mensaje de gracias
  const form = document.querySelector('#signup form');
  if (form) form.addEventListener('submit', e => {
    if (form.getAttribute('action') === '#') { e.preventDefault(); document.getElementById('signup').classList.add('sent'); }
  });
  // Línea bajo la cabecera al hacer scroll
  const header = document.getElementById('top');
  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), {passive:true});
