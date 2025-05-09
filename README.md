# Psicóloga Web

Sitio web profesional para servicios de psicología, construido con Astro y TailwindCSS.

## 🚀 Características

- 🎨 Diseño moderno y responsive
- ⚡ Rendimiento optimizado con Astro
- 🎯 SEO optimizado
- 📱 Totalmente responsive
- 🌙 Modo oscuro
- ♿ Accesibilidad
- 🔍 Sitemap y robots.txt
- 📝 Formularios de contacto
- 💬 Integración con WhatsApp

## 🛠️ Tecnologías

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/psicologa-web.git
   cd psicologa-web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en las siguientes variables:
   ```env
   # Configuración del sitio
   SITE_URL=https://tudominio.com
   SITE_NAME=Psicóloga Web
   SITE_DESCRIPTION=Servicios profesionales de psicología online

   # Información de contacto
   CONTACT_EMAIL=contacto@tudominio.com
   CONTACT_PHONE=+34600000000

   # Redes sociales
   INSTAGRAM_URL=https://instagram.com/tu-usuario
   LINKEDIN_URL=https://linkedin.com/in/tu-usuario

   # Configuración de formulario
   FORMSPREE_ID=tu-id-de-formspree
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el sitio para producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige errores de ESLint
- `npm run format` - Formatea el código con Prettier
- `npm run format:check` - Verifica el formato del código
- `npm run typecheck` - Verifica los tipos de TypeScript

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/     # Componentes de layout (Header, Footer)
│   ├── sections/   # Secciones de la página
│   └── ui/         # Componentes UI reutilizables
├── layouts/        # Layouts de Astro
├── pages/          # Páginas de la aplicación
├── styles/         # Estilos globales
├── types/          # Tipos de TypeScript
└── utils/          # Utilidades y constantes
```

## 🎨 Personalización

1. Configura las variables de entorno en el archivo `.env`
2. Modifica las constantes en `src/utils/constants.ts`
3. Actualiza los colores en `tailwind.config.mjs`
4. Personaliza el contenido en los componentes de sección

## 📝 Licencia

MIT

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

```sh
pnpm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
