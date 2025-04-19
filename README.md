# Sitio Web de Psicología - Viviana Poveda

Sitio web profesional para servicios de psicología clínica, desarrollado con Astro y Tailwind CSS.

## 🚀 Características

- Diseño moderno y responsivo
- Animaciones suaves y profesionales
- Optimizado para SEO
- Rendimiento optimizado
- Formulario de contacto integrado
- Secciones informativas sobre servicios psicológicos

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll Library

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Construye el sitio para producción |
| `pnpm preview` | Previsualiza la versión de producción |

## 🌐 Estructura del Proyecto

```text
/
├── public/          # Archivos estáticos
│   ├── images/      # Imágenes
│   └── videos/      # Videos
├── src/
│   ├── components/  # Componentes reutilizables
│   ├── layouts/     # Layouts de la aplicación
│   └── pages/       # Páginas del sitio
└── package.json
```

## 🚀 Despliegue

El sitio está configurado para ser desplegado en cualquier plataforma que soporte aplicaciones estáticas (Netlify, Vercel, etc.).

## 📄 Licencia

Este proyecto es privado y todos los derechos están reservados.

## 👤 Autor

Desarrollado para Ps. Viviana Poveda

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
