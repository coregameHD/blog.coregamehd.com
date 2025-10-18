# Quick Start Guide - Keystatic Integration

## ✅ What's Been Done

Your Astro blog now has Keystatic CMS integrated! Here's what was added:

### 📦 Installed Packages
- `@keystatic/core` - Core Keystatic functionality
- `@keystatic/astro` - Astro integration
- `@astrojs/markdoc` - Markdown/MDX support
- `@astrojs/vercel` - Vercel deployment adapter

### 📁 New Files Created
- `keystatic.config.ts` - CMS configuration
- `.env.example` - Environment variables template
- `vercel.json` - Vercel deployment config
- `KEYSTATIC_SETUP.md` - Detailed setup guide
- `public/images/blog/` - Image upload directory

**Note**: Keystatic routes (`/keystatic`) are automatically handled by the `keystatic()` integration in `astro.config.mjs`. No manual page files needed!

### ⚙️ Modified Files
- `astro.config.mjs` - Added Keystatic, Markdoc, and Vercel adapter
- `README.md` - Added CMS documentation

## 🚀 Next Steps

### 1. Set Up GitHub OAuth (Required for Production)

Create a GitHub OAuth App:
1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: `Kagami Blog Keystatic`
   - **Homepage URL**: `https://blog.coregamehd.com`
   - **Callback URL**: `https://blog.coregamehd.com/api/keystatic/github/oauth/callback`
4. Save the Client ID and Client Secret

### 2. Configure Environment Variables

**For Local Development:**
```bash
cp .env.example .env
# Edit .env and add your GitHub OAuth credentials
```

**For Vercel:**
Add these environment variables in your Vercel project settings:
- `PUBLIC_SITE_URL` = `https://blog.coregamehd.com`
- `KEYSTATIC_GITHUB_CLIENT_ID` = Your Client ID
- `KEYSTATIC_GITHUB_CLIENT_SECRET` = Your Client Secret

### 3. Deploy to Vercel

```bash
# Push your changes to GitHub
git add .
git commit -m "Add Keystatic CMS integration"
git push

# Vercel will automatically deploy
```

### 4. Access Keystatic Admin

- **Local**: http://localhost:4321/keystatic
- **Production**: https://blog.coregamehd.com/keystatic

## 📝 Using Keystatic

### Creating a New Blog Post

1. Go to `/keystatic`
2. Click "Blog Posts" → "Create Entry"
3. Fill in:
   - Title
   - Slug (URL-friendly)
   - Featured Image URL
   - Publish Date
   - Categories
   - Content (with rich text editor)
4. Click "Save" - this commits to GitHub
5. Vercel automatically rebuilds your site

### Uploading Images

1. In the content editor, click the image button
2. Upload your image
3. It will be saved to `/public/images/blog/`
4. The image path is automatically inserted

## 🔧 Configuration

### Content Collections

Keystatic is configured for:
- **Blog Posts**: `src/content/blog/`
- **Legal Pages**: `src/content/legal/`

### Available Categories

- General
- Technology
- Programming
- Tutorial
- Review
- Personal

To add more categories, edit `keystatic.config.ts`.

## 📚 Documentation

- **Full Setup Guide**: See `KEYSTATIC_SETUP.md`
- **Keystatic Docs**: https://keystatic.com/docs
- **Astro Docs**: https://docs.astro.build

## ⚠️ Important Notes

1. **GitHub Mode**: The CMS is configured to use GitHub storage, which means:
   - All changes are committed to your repository
   - You need GitHub OAuth for authentication
   - Content is version-controlled

2. **Server Mode**: The site now runs in server mode for Keystatic to work
   - Most pages are still statically generated
   - Only Keystatic routes use SSR

3. **Build Success**: The build has been tested and works correctly ✅

## 🆘 Troubleshooting

If you encounter issues:

1. **Can't access /keystatic**: Make sure you've deployed to Vercel and set up OAuth
2. **Authentication fails**: Check your GitHub OAuth credentials
3. **Images not uploading**: Verify the `/public/images/blog/` directory exists
4. **Build fails**: Run `npm run build` locally to see detailed errors

For more help, see `KEYSTATIC_SETUP.md` or the Keystatic documentation.

---

**Ready to start?** Run `npm run dev` and visit http://localhost:4321/keystatic
