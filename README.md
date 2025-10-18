# Titan Core - Modern Astro Theme
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Titan Core** is a high-performance, feature-rich theme for Astro JS, designed for modern websites, blogs, and portfolios. With beautiful UI components, multiple theme options, and a focus on performance, Titan Core helps you build stunning websites quickly.

[Live Demo](https://titan-core.netlify.app)

## ✨ Features

- 🎨 **Multiple Theme Options** - Choose from various color themes
- 📱 **Fully Responsive** - Looks great on all devices
- 🚀 **Performance Focused** - Optimized for speed and SEO
- 📝 **Blog Ready** - Complete blog functionality with categories and pagination
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and sitemap
- 🧩 **Component-Based** - Modular architecture for easy customization
- 🎭 **Animation Ready** - Integrated AOS (Animate On Scroll) for smooth animations
- 📊 **Stats Section** - Display your metrics with beautiful stat components
- 🤝 **Team Grid** - Showcase your team members
- 🔄 **Flexible Layouts** - Hero sections, feature grids, split panels, and more
- 📋 **FAQ Component** - Easy-to-use FAQ accordion
- 📞 **Contact Components** - Ready-to-use contact information display
- 🏢 **Logo Showcase** - Display partner or client logos
- 🔘 **Modern UI Components** - Buttons, forms, cards, and more

## 📝 Content Management

This blog now includes **Keystatic CMS** for easy content management through a visual interface!

### Using Keystatic CMS

- **Admin Panel**: Access at `/keystatic` (e.g., `http://localhost:4321/keystatic`)
- **Features**: 
  - Visual editor for blog posts and legal pages
  - Image upload support
  - GitHub-based content storage
  - Automatic deployments on Vercel

For detailed setup instructions, see [KEYSTATIC_SETUP.md](./KEYSTATIC_SETUP.md).

### Manual Content Management

You can also manually add content to the `src/content/` directory:
- Blog posts: `src/content/blog/`
- Legal pages: `src/content/legal/`

## 🧩 Components

Titan Core includes a wide range of components:

- **Layout Components**: Hero, Features, Split Panel, CTA Banner, etc.
- **UI Components**: Buttons, Forms, Cards, etc.
- **Blog Components**: Post cards, category pills, etc.
- **Team Components**: Team grid, member cards, etc.

## 🛠️ Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                            |
| `npm run dev`          | Start local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🚀 Deployment

This site is configured for deployment on **Vercel** with Keystatic CMS integration.

1. Connect your GitHub repository to Vercel
2. Configure environment variables (see [KEYSTATIC_SETUP.md](./KEYSTATIC_SETUP.md))
3. Deploy!

Vercel will automatically rebuild your site when you make changes through Keystatic.

## 🙏 Credits

- Built with [Astro](https://astro.build)
- CMS by [Keystatic](https://keystatic.com)
- Animations by [AOS](https://michalsnik.github.io/aos/)
- Icons from [Lucide](https://lucide.dev)
