# Project File Structure

This document explains the organization of your Astro blog with Keystatic CMS.

## 📁 Complete Directory Tree

```
blog.coregamehd.com/
│
├── 📄 Configuration Files
│   ├── astro.config.mjs          # Astro framework configuration
│   ├── keystatic.config.ts       # Keystatic CMS configuration
│   ├── tsconfig.json             # TypeScript configuration
│   ├── package.json              # Dependencies and scripts
│   ├── vercel.json               # Vercel deployment settings
│   ├── .env.example              # Environment variables template
│   ├── .gitignore                # Git ignore rules
│   └── prettier.config.js        # Code formatting rules
│
├── 📚 Documentation
│   ├── GET_STARTED.md            # Start here!
│   ├── QUICK_START.md            # 15-minute setup guide
│   ├── KEYSTATIC_SETUP.md        # Comprehensive setup
│   ├── DEPLOYMENT_CHECKLIST.md   # Deployment steps
│   ├── ARCHITECTURE.md           # System architecture
│   ├── INTEGRATION_SUMMARY.md    # What was changed
│   ├── FAQ.md                    # Common questions
│   ├── FILE_STRUCTURE.md         # This file
│   └── README.md                 # Project overview
│
├── 📂 src/
│   ├── 📂 content/               # Your content (managed by Keystatic)
│   │   ├── 📂 blog/              # Blog posts
│   │   │   ├── 2024-01-01-post.md
│   │   │   ├── 2024-01-02-post.md
│   │   │   └── ... (39 posts)
│   │   └── 📂 legal/             # Legal pages
│   │       ├── privacy-policy.md
│   │       └── terms-of-service.md
│   │
│   ├── 📂 pages/                 # Routes and pages
│   │   ├── 📂 keystatic/         # CMS admin routes
│   │   │   ├── index.astro       # Admin UI page
│   │   │   └── [...params].ts    # API endpoints
│   │   ├── index.astro           # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog listing
│   │   │   └── [slug].astro      # Individual post
│   │   └── ... (other pages)
│   │
│   ├── 📂 components/            # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   └── ... (other components)
│   │
│   ├── 📂 layouts/               # Page layouts
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── ... (other layouts)
│   │
│   ├── 📂 data/                  # Site configuration
│   │   └── config.ts             # Site settings
│   │
│   └── 📂 styles/                # Global styles
│       └── global.css
│
├── 📂 public/                    # Static assets
│   ├── 📂 images/
│   │   ├── 📂 blog/              # Blog images (Keystatic uploads here)
│   │   │   └── .gitkeep
│   │   └── ... (other images)
│   ├── favicon.ico
│   └── robots.txt
│
├── 📂 .github/                   # GitHub configuration
│   └── 📂 workflows/
│       └── deploy.yml            # CI/CD workflow
│
├── 📂 dist/                      # Build output (generated)
│   └── ... (built files)
│
└── 📂 node_modules/              # Dependencies (generated)
    └── ... (packages)
```

## 🔍 Key Files Explained

### Configuration Files

#### `keystatic.config.ts`
**Purpose**: Defines your CMS structure  
**Contains**:
- Storage configuration (GitHub)
- Content collections (blog, legal)
- Field schemas (title, content, etc.)
- Categories and options

**Edit this to**:
- Add new content types
- Add new fields
- Change categories
- Customize the CMS

#### `astro.config.mjs`
**Purpose**: Configures Astro framework  
**Contains**:
- Output mode (server)
- Vercel adapter
- Integrations (Keystatic, React, Markdoc)
- Build settings

**Edit this to**:
- Add new integrations
- Change build settings
- Configure image optimization

#### `vercel.json`
**Purpose**: Vercel deployment configuration  
**Contains**:
- Build command
- Output directory
- Framework preset

**Edit this to**:
- Change build settings
- Add redirects
- Configure headers

#### `.env.example`
**Purpose**: Template for environment variables  
**Contains**:
- Required environment variables
- Example values
- Documentation

**Copy to `.env`** and fill in real values for local development.

### Content Files

#### `src/content/blog/*.md`
**Purpose**: Your blog posts  
**Format**: Markdown with frontmatter  
**Managed by**: Keystatic CMS

**Structure**:
```markdown
---
title: "Post Title"
slug: "post-slug"
featuredImage: "https://..."
publishDate: "2024-01-01"
publish: true
categories: ["General"]
---

Post content here...
```

**Edit via**:
- Keystatic admin (`/keystatic`)
- Direct file editing
- GitHub web interface

#### `src/content/legal/*.md`
**Purpose**: Legal pages (privacy, terms, etc.)  
**Format**: Markdown with frontmatter  
**Managed by**: Keystatic CMS

### Keystatic Admin Files

#### `src/pages/keystatic/index.astro`
**Purpose**: CMS admin interface  
**Type**: Server-side rendered page  
**Access**: `/keystatic`

**Don't edit** unless you know what you're doing.

#### `src/pages/keystatic/[...params].ts`
**Purpose**: API endpoints for Keystatic  
**Type**: Serverless functions  
**Handles**: Authentication, content operations

**Don't edit** unless you know what you're doing.

### Documentation Files

All `.md` files in the root directory are documentation:

| File | Purpose | Read When |
|------|---------|-----------|
| `GET_STARTED.md` | Entry point | First time |
| `QUICK_START.md` | Fast setup | Want to deploy quickly |
| `KEYSTATIC_SETUP.md` | Detailed guide | Want full understanding |
| `DEPLOYMENT_CHECKLIST.md` | Step-by-step | Ready to deploy |
| `ARCHITECTURE.md` | System design | Want technical details |
| `FAQ.md` | Common questions | Have a question |
| `FILE_STRUCTURE.md` | This file | Understanding structure |

## 📦 Generated Directories

### `dist/`
**Created by**: `npm run build`  
**Contains**: Production-ready files  
**Deployed to**: Vercel

**Don't commit** to Git (in `.gitignore`).

### `node_modules/`
**Created by**: `npm install`  
**Contains**: Dependencies  
**Size**: ~800 packages

**Don't commit** to Git (in `.gitignore`).

### `.astro/`
**Created by**: Astro during development  
**Contains**: Type definitions, cache  

**Don't commit** to Git (in `.gitignore`).

## 🎨 Content Organization

### Blog Posts

```
src/content/blog/
├── 2018-12-01-why-i-study-japanese.md
├── 2019-02-27-minori-kaisan.md
├── 2020-05-02-9-yukiiro-review.md
└── ... (39 total posts)
```

**Naming convention**: `YYYY-MM-DD-slug.md`  
**Managed by**: Keystatic  
**URL**: `/blog/[slug]`

### Legal Pages

```
src/content/legal/
├── privacy-policy.md
└── terms-of-service.md
```

**Managed by**: Keystatic  
**URL**: `/legal/[slug]`

### Images

```
public/images/
├── blog/              # Keystatic uploads here
│   ├── image1.jpg
│   └── image2.png
└── ... (other images)
```

**Uploaded via**: Keystatic admin  
**URL**: `/images/blog/[filename]`  
**Optimized by**: Astro build process

## 🔧 Important Paths

### Development
- **Dev server**: `http://localhost:4321`
- **Admin panel**: `http://localhost:4321/keystatic`
- **Blog**: `http://localhost:4321/blog`

### Production
- **Live site**: `https://blog.coregamehd.com`
- **Admin panel**: `https://blog.coregamehd.com/keystatic`
- **Blog**: `https://blog.coregamehd.com/blog`

### File Paths
- **Content**: `src/content/blog/`
- **Images**: `public/images/blog/`
- **Config**: `keystatic.config.ts`
- **Env vars**: `.env` (local) or Vercel (production)

## 📝 File Naming Conventions

### Blog Posts
```
YYYY-MM-DD-slug-in-kebab-case.md
```
Example: `2024-01-15-how-to-use-keystatic.md`

### Images
```
descriptive-name-kebab-case.jpg
```
Example: `featured-image-keystatic-guide.jpg`

### Components
```
ComponentName.astro
```
Example: `BlogCard.astro`

### Pages
```
page-name.astro  or  [param].astro
```
Example: `blog.astro` or `[slug].astro`

## 🚫 Files to Never Edit

These files are generated or managed by tools:

- `package-lock.json` - Managed by npm
- `dist/*` - Generated by build
- `node_modules/*` - Managed by npm
- `.astro/*` - Generated by Astro

## ✏️ Files You'll Edit Often

### As Content Editor
- `src/content/blog/*.md` - Via Keystatic
- `src/content/legal/*.md` - Via Keystatic

### As Developer
- `keystatic.config.ts` - Add fields, collections
- `astro.config.mjs` - Add integrations
- `src/components/*` - UI components
- `src/pages/*` - New pages

### As Site Owner
- `src/data/config.ts` - Site settings
- `.env` - Environment variables (local)
- Vercel dashboard - Environment variables (production)

## 📊 File Size Reference

| Directory | Size | Items |
|-----------|------|-------|
| `node_modules/` | ~200MB | 800+ packages |
| `src/content/blog/` | ~500KB | 39 posts |
| `public/images/` | Varies | Your images |
| `dist/` | ~50MB | Built files |

## 🔐 Security Notes

### Never Commit
- `.env` - Contains secrets
- `node_modules/` - Too large
- `dist/` - Generated files

### Always Commit
- `.env.example` - Template only
- `keystatic.config.ts` - CMS config
- `src/content/**` - Your content

### Store in Vercel
- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `PUBLIC_SITE_URL`

## 🎯 Quick Navigation

**Want to**:
- **Add a blog post** → Use `/keystatic` admin
- **Change categories** → Edit `keystatic.config.ts`
- **Add a page** → Create file in `src/pages/`
- **Change site name** → Edit `src/data/config.ts`
- **Upload image** → Use Keystatic or add to `public/images/blog/`
- **Deploy** → Push to GitHub (auto-deploys via Vercel)

## 📚 Related Documentation

- **Understanding the system**: See `ARCHITECTURE.md`
- **Deploying**: See `DEPLOYMENT_CHECKLIST.md`
- **Troubleshooting**: See `FAQ.md`
- **Getting started**: See `GET_STARTED.md`

---

**Need to find a file?** Use your IDE's file search (Cmd+P or Ctrl+P)  
**Need to find content?** Use grep or your IDE's search (Cmd+Shift+F)  
**Need help?** See the documentation files listed above
