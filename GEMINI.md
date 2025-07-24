
# Auditoría SEO y Estándares Web Profesionales

## Objetivo

Realizar una auditoría exhaustiva del sitio web para identificar oportunidades de mejora en posicionamiento orgánico, experiencia de usuario, seguridad y cumplimiento de estándares de desarrollo web moderno. El entregable final debe ser un informe detallado con hallazgos, recomendaciones priorizadas y un plan de acción.

---

## 1. Revisión Técnica SEO

El objetivo es asegurar que los motores de búsqueda puedan rastrear, indexar y entender el contenido del sitio de manera eficiente.

**Herramientas principales:** Google Search Console, Screaming Frog, Lighthouse, PageSpeed Insights.

### Checklist Técnico:
- **Rastreo e Indexación:**
  - `robots.txt`: Verificar que no bloquee recursos importantes (CSS, JS) ni secciones que deban ser indexadas.
  - `sitemap.xml`: Asegurar que esté presente, actualizado, libre de errores y enviado a través de Google Search Console.
  - **Errores de rastreo:** Analizar el informe de "Cobertura" en Search Console para identificar y corregir errores 404, 5xx y redirecciones incorrectas.
  - **Meta Tags de Robots:** Auditar el uso de `noindex`, `nofollow`, `noarchive` para asegurar que no se estén bloqueando páginas importantes.
  - **Etiquetas Canónicas:** Verificar que cada página tenga una URL canónica correcta para evitar contenido duplicado.

- **Rendimiento y Core Web Vitals:**
  - **Velocidad de carga:** Medir con Lighthouse y PageSpeed Insights.
  - **LCP (Largest Contentful Paint):** Debe ser inferior a 2.5 segundos.
  - **INP (Interaction to Next Paint):** Medir la capacidad de respuesta. Un INP por debajo de 200 milisegundos es bueno.
  - **CLS (Cumulative Layout Shift):** Debe ser inferior a 0.1.
  - **Optimización de recursos:** Minificación de CSS/JS, compresión de imágenes (usar formatos modernos como WebP), y habilitar la compresión Gzip/Brotli en el servidor.

- **Arquitectura y Estructura:**
  - **Estructura de URLs:** Deben ser semánticas, cortas y descriptivas.
  - **Navegación y Enlazado Interno:** La estructura debe ser lógica, con una profundidad de clic no mayor a 3-4 para las páginas importantes.
  - **Breadcrumbs:** Implementar para mejorar la navegación y el contexto.
  - **Datos Estructurados (Schema.org):** Validar la implementación para `Organization`, `Article`, `Service`, `FAQPage`, etc., según corresponda.

---

## 2. Buenas Prácticas de Desarrollo Seguro

La seguridad es un factor de ranking y es crucial para la confianza del usuario.

**Herramientas:** SecurityHeaders.com, Observatorio de Mozilla, DevTools del navegador.

### Checklist de Seguridad:
- **HTTPS:** Todo el sitio debe servirse bajo HTTPS.
- **Headers de Seguridad:**
  - **Content-Security-Policy (CSP):** Implementar una política estricta para mitigar ataques XSS. Definir explícitamente de dónde se pueden cargar scripts, estilos, imágenes, etc.
  - **HTTP Strict-Transport-Security (HSTS):** Forzar conexiones seguras en el navegador.
  - **X-Frame-Options:** Prevenir clickjacking. `DENY` o `SAMEORIGIN`.
  - **X-Content-Type-Options:** `nosniff` para evitar que el navegador interprete archivos con un tipo MIME incorrecto.
  - **Referrer-Policy:** `strict-origin-when-cross-origin` o más restrictivo.
  - **Permissions-Policy:** Deshabilitar APIs del navegador que no se necesiten (micrófono, geolocalización, etc.).
- **Cookies Seguras:**
  - Atributo `Secure`: Las cookies solo se envían a través de HTTPS.
  - Atributo `HttpOnly`: Previene el acceso a la cookie desde JavaScript.
  - Atributo `SameSite=Strict` o `Lax`: Mitiga ataques CSRF.

---

## 3. Código Limpio y Accesibilidad (A11y)

Un código semántico y accesible mejora la experiencia para todos los usuarios, incluidos aquellos con discapacidades, y facilita el rastreo a los bots.

**Herramientas:** WAVE, AXE DevTools, Lighthouse (Auditoría de Accesibilidad).

### Checklist de Código y A11y:
- **HTML Semántico:** Usar etiquetas HTML5 (`<main>`, `<nav>`, `<article>`, `<aside>`) correctamente.
- **Jerarquía de Encabezados:** La página debe tener un solo `<h1>` y una estructura lógica de `<h2>` a `<h6>`.
- **Atributos `alt` en imágenes:** Todas las imágenes informativas deben tener un texto alternativo descriptivo. Las decorativas, un `alt` vacío.
- **Contraste de Color:** Verificar que el texto tenga suficiente contraste con el fondo (mínimo 4.5:1 para texto normal).
- **Navegación por Teclado:** El sitio debe ser completamente navegable y operable usando solo el teclado.
- **ARIA Roles:** Usar roles ARIA solo cuando sea necesario para mejorar la accesibilidad de componentes dinámicos.

---

## 4. SEO On-Page y Off-Page

- **On-Page:**
  - **Investigación de Palabras Clave:** Identificar las palabras clave objetivo para cada página.
  - **Optimización de Contenido:**
    - **Títulos (`<title>`) y Meta Descripciones:** Únicos, descriptivos y dentro de la longitud recomendada.
    - **Contenido de Calidad (E-E-A-T):** El contenido debe demostrar Experiencia, Autoridad y Confianza.
    - **Canibalización:** Asegurarse de que las páginas no compitan entre sí por las mismas palabras clave.
- **Off-Page:**
  - **Perfil de Backlinks:** Analizar la calidad y relevancia de los enlaces entrantes (usar Ahrefs, SEMrush o similar).
  - **Análisis Competitivo:** Identificar de dónde obtienen enlaces los competidores.

---

## 5. Checklist Final de Estándares para Desarrollo Web Profesional

Esta lista resume los puntos críticos que todo sitio web moderno y profesional debe cumplir.

- [ ] **Dominio y Hosting:** Configuración de DNS correcta, preferiblemente con un proveedor de CDN.
- [ ] **Control de Versiones:** El código fuente está gestionado con Git.
- [ ] **Responsividad (Mobile-First):** El diseño se adapta y funciona perfectamente en todos los dispositivos.
- [ ] **Rendimiento Optimizado:** Core Web Vitals aprobados.
- [ ] **Seguridad Robusta:** HTTPS y todos los headers de seguridad críticos implementados.
- [ ] **Accesibilidad (WCAG 2.1 AA):** Cumplimiento de los principales estándares de accesibilidad.
- [ ] **SEO Técnico Impecable:** Sin errores de rastreo, sitemap correcto y estructura lógica.
- [ ] **Código Limpio:** HTML semántico, CSS y JS modernos y minificados.
- [ ] **Privacidad:** Política de privacidad clara y gestión de consentimiento de cookies (si aplica).
- [ ] **Monitorización:** Google Analytics y Google Search Console configurados y monitorizados activamente.
