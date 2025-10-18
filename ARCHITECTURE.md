# Keystatic + Astro + Vercel Architecture

This document explains how all the pieces work together.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Content Editor                          │
│                    (You or Your Team)                           │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ 1. Access Admin
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Keystatic Admin UI                             │
│              https://blog.coregamehd.com/keystatic              │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Blog Posts  │  │ Legal Pages  │  │   Settings   │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ 2. Authenticate
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GitHub OAuth                                 │
│              (Authentication & Authorization)                   │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ 3. Save Content
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                   GitHub Repository                             │
│              coregameHD/blog.coregamehd.com                     │
│                                                                 │
│  src/content/                                                   │
│  ├── blog/                                                      │
│  │   ├── 2024-01-01-post.md                                    │
│  │   └── 2024-01-02-post.md                                    │
│  └── legal/                                                     │
│      ├── privacy-policy.md                                      │
│      └── terms-of-service.md                                    │
│                                                                 │
│  public/images/blog/                                            │
│  ├── image1.jpg                                                 │
│  └── image2.png                                                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ 4. Webhook Trigger
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Vercel Platform                            │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │              Build Process                                 │ │
│  │  1. Pull latest code from GitHub                          │ │
│  │  2. npm install                                            │ │
│  │  3. npm run build (Astro build)                           │ │
│  │  4. Optimize images                                        │ │
│  │  5. Generate static pages                                  │ │
│  │  6. Bundle serverless functions                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │              Deployment                                    │ │
│  │  • Static files → CDN                                      │ │
│  │  • Serverless functions → Edge Network                     │ │
│  │  • Environment variables → Secure storage                  │ │
│  └───────────────────────────────────────────────────────────┘ │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ 5. Serve Content
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Live Website                                 │
│              https://blog.coregamehd.com                        │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Home Page   │  │  Blog Posts  │  │    About     │        │
│  │   (Static)   │  │   (Static)   │  │   (Static)   │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                 │
│  ┌──────────────────────────────────────────────────┐         │
│  │         Keystatic Admin (SSR)                     │         │
│  │         /keystatic/*                              │         │
│  └──────────────────────────────────────────────────┘         │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ 6. View Content
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Visitors                                 │
│                  (Your Blog Readers)                            │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

### Content Creation Flow

```
Editor → Keystatic UI → GitHub OAuth → Save to GitHub → 
Webhook → Vercel Build → Deploy → Live Site
```

**Timeline**: 2-5 minutes from save to live

### Content Reading Flow

```
Visitor → Vercel CDN → Static HTML → Browser
```

**Timeline**: < 100ms (cached at edge)

## Component Breakdown

### 1. Keystatic CMS

**Location**: `/keystatic` route  
**Type**: Server-side rendered (SSR)  
**Purpose**: Content management interface

**Features**:
- Visual editor for Markdown/MDX
- Image upload functionality
- GitHub integration
- Real-time preview

**Files**:
- `keystatic.config.ts` - Configuration
- `src/pages/keystatic/index.astro` - UI page
- `src/pages/keystatic/[...params].ts` - API routes

### 2. Astro Framework

**Type**: Static Site Generator + SSR hybrid  
**Purpose**: Build and serve the website

**Modes**:
- **Static**: Most pages (blog posts, home, etc.)
- **Server**: Keystatic admin routes only

**Configuration**: `astro.config.mjs`

### 3. GitHub Repository

**Purpose**: Content storage and version control

**Structure**:
```
src/content/
├── blog/          # Blog posts (Markdown)
└── legal/         # Legal pages (Markdown)

public/images/
└── blog/          # Uploaded images
```

**Benefits**:
- Version history
- Backup
- Collaboration
- Portability

### 4. Vercel Platform

**Purpose**: Hosting and deployment

**Services Used**:
- **CDN**: Static file delivery
- **Serverless Functions**: Keystatic API
- **Edge Network**: Global distribution
- **Build System**: Automatic deployments

**Configuration**: `vercel.json`

## Authentication Flow

```
1. User visits /keystatic
   ↓
2. Keystatic checks authentication
   ↓
3. If not authenticated → Redirect to GitHub OAuth
   ↓
4. User authorizes app on GitHub
   ↓
5. GitHub redirects back with token
   ↓
6. Keystatic validates token
   ↓
7. User gains access to admin
   ↓
8. Token stored in session
```

## Content Update Flow

```
1. Editor makes changes in Keystatic
   ↓
2. Editor clicks "Save"
   ↓
3. Keystatic creates Git commit
   ↓
4. Commit pushed to GitHub
   ↓
5. GitHub webhook notifies Vercel
   ↓
6. Vercel starts new build
   ↓
7. Astro processes content
   ↓
8. Static pages generated
   ↓
9. New version deployed
   ↓
10. Changes live on site
```

**Total Time**: 2-5 minutes

## File Types and Processing

### Markdown Files (.md)

```
Input:  src/content/blog/post.md
        ↓
Process: Astro content collections
        ↓
Output: dist/blog/post/index.html (static)
```

### Images

```
Input:  public/images/blog/photo.jpg
        ↓
Process: Astro image optimization
        ↓
Output: dist/_astro/photo_hash.webp (optimized)
```

### Keystatic Routes

```
Request: /keystatic
        ↓
Process: Vercel serverless function
        ↓
Response: Dynamic HTML (SSR)
```

## Environment Variables

### Development (.env)
```
PUBLIC_SITE_URL=http://localhost:4321
KEYSTATIC_GITHUB_CLIENT_ID=dev_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=dev_secret
```

### Production (Vercel)
```
PUBLIC_SITE_URL=https://blog.coregamehd.com
KEYSTATIC_GITHUB_CLIENT_ID=prod_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=prod_secret
```

## Security Model

### Authentication
- OAuth 2.0 via GitHub
- No passwords stored
- Token-based sessions

### Authorization
- GitHub repository permissions
- Collaborators can edit
- Public can only read

### Data Storage
- All content in Git (public)
- Secrets in environment variables (private)
- No database required

## Performance Characteristics

### Static Pages
- **Build Time**: ~18 seconds for 203 pages
- **Load Time**: < 100ms (CDN cached)
- **SEO**: Fully crawlable

### Keystatic Admin
- **Load Time**: ~500ms (SSR)
- **Authentication**: ~1 second (OAuth)
- **Save Time**: ~2 seconds (Git commit)

### Deployment
- **Build Time**: 2-3 minutes
- **Deploy Time**: 30-60 seconds
- **Total Time**: 2-5 minutes

## Scalability

### Content Volume
- ✅ Handles 1,000+ blog posts
- ✅ Handles 10,000+ images
- ✅ Build time scales linearly

### Traffic
- ✅ Unlimited page views (CDN)
- ✅ Global edge network
- ✅ Auto-scaling serverless functions

### Team Size
- ✅ Multiple editors via GitHub
- ✅ Role-based access (GitHub permissions)
- ✅ Concurrent editing supported

## Backup and Recovery

### Automatic Backups
- Git history (all changes)
- GitHub repository (cloud)
- Vercel deployments (snapshots)

### Recovery Options
1. Revert Git commit
2. Restore from GitHub
3. Rollback Vercel deployment

## Monitoring Points

### Build Health
- Vercel deployment logs
- Build success/failure rate
- Build duration trends

### Site Health
- Uptime monitoring
- Page load times
- Error rates

### Content Health
- Commit frequency
- Content update patterns
- Image storage usage

## Cost Structure

### Free Tier (Vercel)
- ✅ Unlimited static pages
- ✅ 100GB bandwidth/month
- ✅ Serverless function executions

### GitHub
- ✅ Free for public repositories
- ✅ Unlimited collaborators

### Keystatic
- ✅ Open source (free)
- ✅ No licensing costs

---

## Summary

This architecture provides:

✅ **Easy Content Management** - Visual editor for non-technical users  
✅ **Version Control** - Full Git history of all changes  
✅ **Fast Performance** - Static generation + CDN  
✅ **Scalability** - Handles growth automatically  
✅ **Security** - OAuth authentication + GitHub permissions  
✅ **Cost-Effective** - Free tier sufficient for most blogs  
✅ **Developer-Friendly** - Standard web technologies  
✅ **Portable** - Content in Markdown, easy to migrate  

The system is production-ready and follows modern web development best practices.
