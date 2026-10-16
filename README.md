# Mystika by Mer in Balance

Web del estudio Mystika (barre, Pilates y yoga) en Sant Cugat del Vallès – Barcelona.

Web estática: HTML, CSS y JavaScript sin dependencias. No necesita servidor ni instalación.

## Archivos

- `index.html`: la web en español (versión principal).
- `en/index.html`: la misma web en inglés. Cualquier cambio de texto o estructura se hace en las dos.
- `styles.css`: el diseño (colores, tipografías, espaciados), compartido por los dos idiomas.
- `main.js`: menú móvil y formulario de newsletter.
- `img/`: fotos de la web (hero, Mer, el espacio).

Al cambiar `styles.css`, `main.js` o una foto, sube el número `?v=` donde se enlaza para que los navegadores no muestren la versión antigua.

## Pendiente antes del lanzamiento

1. **Fotos**: subirlas a `img/` y sustituir los bloques "Foto del estudio", "Foto de Mer" y "Foto del espacio".
2. **Widget de reservas**: pegar el código del software de reservas donde pone `PEGAR AQUÍ EL WIDGET DE RESERVAS`.
3. **Newsletter**: cambiar `action="#"` del formulario por la URL de la herramienta de newsletter (Brevo, MailerLite...).
4. **Datos**: precios, dirección, email, teléfono e Instagram.
5. **Textos legales**: aviso legal, privacidad y cookies.
6. **Quitar** la línea `<meta name="robots" content="noindex">` para que Google indexe la web.

## Publicación

El repositorio está conectado a Cloudflare Pages (o Netlify): cada cambio que se sube a GitHub se publica solo en un minuto.
