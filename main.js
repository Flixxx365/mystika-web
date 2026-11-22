  // Menú móvil
  const body = document.body, burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', () => {
      const open = body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.drawer a').forEach(a => a.addEventListener('click', () => {
      body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', false);
    }));
  }
  // Newsletter: mientras no esté conectada a una herramienta, solo muestra el mensaje de gracias
  const form = document.querySelector('#signup form');
  if (form) form.addEventListener('submit', e => {
    if (form.getAttribute('action') === '#') { e.preventDefault(); document.getElementById('signup').classList.add('sent'); }
  });
  // Línea bajo la cabecera al hacer scroll
  const header = document.getElementById('top');
  if (header) addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), {passive:true});
  // Reproductores de YouTube/Spotify: solo se cargan al pulsar
  document.querySelectorAll('.media-play').forEach(btn => btn.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = btn.dataset.src; f.title = btn.dataset.title;
    f.allow = 'autoplay; encrypted-media; picture-in-picture; clipboard-write'; f.allowFullscreen = true;
    btn.parentNode.classList.add('loaded');
    btn.parentNode.replaceChild(f, btn);
  }));
  // Política de cookies: botón para cambiar la elección (borra la elección y las cookies de Analytics)
  document.querySelectorAll('[data-cookie-reset]').forEach(b => b.addEventListener('click', () => {
    try { localStorage.removeItem('mystika_cookies'); } catch (e) {}
    document.cookie.split(';').forEach(c => {
      const n = c.split('=')[0].trim();
      if (/^_ga/.test(n)) ['', location.hostname, '.' + location.hostname].forEach(d => {
        document.cookie = n + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
      });
    });
    location.reload();
  }));

/* ---------- Analítica (Google Analytics) con aviso de cookies ----------
   Solo se carga GA4 si la persona acepta. Se guarda su elección en localStorage. */
(function () {
  var GA_ID = 'G-XHKLYMFV54';
  var KEY = 'mystika_cookies';
  function getChoice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setChoice(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  if (getChoice() === 'accepted') { loadGA(); return; }
  if (getChoice()) return;

  var lang = (document.documentElement.lang || 'es').slice(0, 2);
  var T = {
    es: { t: 'Usamos cookies de analítica para ver cómo se usa la web. Solo se activan si las aceptas.', a: 'Aceptar', r: 'Rechazar', m: 'Más información', href: 'cookies.html' },
    ca: { t: "Fem servir cookies d'analítica per veure com s'usa la web. Només s'activen si les acceptes.", a: 'Acceptar', r: 'Rebutjar', m: 'Més informació', href: 'cookies.html' },
    en: { t: 'We use analytics cookies to see how the website is used. They only activate if you accept.', a: 'Accept', r: 'Reject', m: 'More information', href: 'cookies.html' }
  };
  var L = T[lang] || T.es;
  var base = /\/(ca|en)\/[^\/]*$/.test(location.pathname) ? '' : '';
  var box = document.createElement('div');
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Cookies');
  box.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:100;max-width:560px;margin:0 auto;background:#FAF6F1;color:#3E322C;border:1px solid #DCCCC0;padding:16px 18px;font:400 14px/1.5 Montserrat,system-ui,sans-serif;box-shadow:0 10px 30px rgba(62,50,44,.18)';
  box.innerHTML = '<p style="margin:0 0 12px">' + L.t + ' <a href="' + L.href + '" style="color:#5F4B41">' + L.m + '</a></p>' +
    '<div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap">' +
    '<button type="button" data-c="rejected" style="background:transparent;border:1px solid #5F4B41;color:#5F4B41;padding:9px 16px;font:500 12px Montserrat,sans-serif;letter-spacing:.12em;text-transform:uppercase;cursor:pointer">' + L.r + '</button>' +
    '<button type="button" data-c="accepted" style="background:#5F4B41;border:1px solid #5F4B41;color:#F4EDE6;padding:9px 16px;font:500 12px Montserrat,sans-serif;letter-spacing:.12em;text-transform:uppercase;cursor:pointer">' + L.a + '</button></div>';
  box.addEventListener('click', function (e) {
    var c = e.target && e.target.getAttribute && e.target.getAttribute('data-c');
    if (!c) return;
    setChoice(c);
    if (c === 'accepted') loadGA();
    box.remove();
  });
  function show() { document.body.appendChild(box); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show); else show();
})();
