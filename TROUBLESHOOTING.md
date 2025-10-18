# Troubleshooting Guide

## Common Issues and Solutions

### Category Pages Not Working (404 Error)

**Problem**: Category pages like `/category/general` return 404 in production

**Cause**: Pages with `getStaticPaths()` need `export const prerender = true;` in server mode.

**Solution**: ✅ **Already fixed in this project!**

All category pages now have the prerender flag. If you add new dynamic pages, remember to add:

```astro
---
export const prerender = true;

export async function getStaticPaths() {
  // your paths
}
---
```

See `SERVER_MODE_FIX.md` for detailed explanation.

### 500 Internal Server Error on /keystatic

**Problem**: Getting 500 error when visiting `/keystatic`

**Causes**:
1. Route collision (duplicate Keystatic routes)
2. Missing environment variables
3. Incorrect Keystatic configuration

**Solution**:

✅ **Fixed in this project**: The `src/pages/keystatic/` directory has been removed. Keystatic routes are now automatically handled by the `keystatic()` integration in `astro.config.mjs`.

**If you still see the error**:

1. **Restart the dev server**:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Clear Astro cache**:
   ```bash
   rm -rf .astro
   npm run dev
   ```

3. **Check for environment variables** (production only):
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `PUBLIC_SITE_URL`

4. **Verify astro.config.mjs** has:
   ```javascript
   integrations: [
     // ... other integrations
     keystatic(),
   ]
   ```

### Route Collision Warning

**Problem**: Warning about route defined in multiple places

**Solution**: Delete `src/pages/keystatic/` directory entirely. The Keystatic integration handles all routing automatically.

```bash
rm -rf src/pages/keystatic
```

### Cannot Access /keystatic Locally

**Problem**: 404 error on `/keystatic` in local development

**Solutions**:

1. **Check the integration is loaded**:
   - Open `astro.config.mjs`
   - Verify `keystatic()` is in the `integrations` array

2. **Restart dev server**:
   ```bash
   npm run dev
   ```

3. **Check the URL**:
   - Use: `http://localhost:4321/keystatic` (with trailing slash optional)
   - Not: `http://localhost:4321/keystatic/`

### Build Fails

**Problem**: `npm run build` fails

**Common causes**:

1. **TypeScript errors**:
   ```bash
   npm run check
   ```

2. **Missing dependencies**:
   ```bash
   npm install
   ```

3. **Corrupted node_modules**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Authentication Issues (Production)

**Problem**: Cannot sign in with GitHub

**Solutions**:

1. **Check OAuth callback URL** matches exactly:
   ```
   https://blog.coregamehd.com/api/keystatic/github/oauth/callback
   ```

2. **Verify environment variables** in Vercel:
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Check all three variables are set
   - Redeploy after adding variables

3. **Check GitHub OAuth app**:
   - Go to https://github.com/settings/developers
   - Verify the app exists
   - Check Client ID matches Vercel env var

### Images Not Uploading

**Problem**: Cannot upload images through Keystatic

**Solutions**:

1. **Check directory exists**:
   ```bash
   mkdir -p public/images/blog
   ```

2. **Check GitHub permissions**:
   - OAuth app needs write access
   - User needs write access to repository

3. **Check file size**:
   - Keep images under 5MB
   - Optimize before uploading

### Changes Not Appearing on Site

**Problem**: Saved changes in Keystatic don't show on live site

**Solutions**:

1. **Check Vercel deployment**:
   - Go to Vercel Dashboard
   - Check if build was triggered
   - Check build logs for errors

2. **Check GitHub commit**:
   - Go to your repository
   - Verify the commit was made
   - Check commit author is correct

3. **Clear cache**:
   - Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
   - Clear browser cache
   - Try incognito/private window

4. **Check publish status**:
   - Open post in Keystatic
   - Verify "Publish" checkbox is checked

### Dev Server Won't Start

**Problem**: `npm run dev` fails or hangs

**Solutions**:

1. **Check port availability**:
   ```bash
   # Kill any process using port 4321
   lsof -ti:4321 | xargs kill -9
   npm run dev
   ```

2. **Clear caches**:
   ```bash
   rm -rf .astro node_modules/.vite
   npm run dev
   ```

3. **Reinstall dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

### TypeScript Errors

**Problem**: Red squiggly lines in IDE

**Solutions**:

1. **Generate types**:
   ```bash
   npm run astro sync
   ```

2. **Restart TypeScript server** in your IDE:
   - VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"

3. **Check tsconfig.json** is present

### Vercel Deployment Fails

**Problem**: Build fails on Vercel

**Solutions**:

1. **Check build logs** in Vercel dashboard

2. **Test build locally**:
   ```bash
   npm run build
   ```

3. **Check Node version**:
   - Vercel uses Node 20 by default
   - Your local version should match

4. **Environment variables**:
   - Verify all required env vars are set
   - Check for typos in variable names

### Content Not Loading

**Problem**: Blog posts don't appear

**Solutions**:

1. **Check content directory**:
   ```bash
   ls -la src/content/blog/
   ```

2. **Verify frontmatter** in Markdown files:
   ```markdown
   ---
   title: "Post Title"
   slug: "post-slug"
   publishDate: "2024-01-01"
   publish: true
   categories: ["General"]
   ---
   ```

3. **Check publish status**:
   - Only posts with `publish: true` appear

4. **Restart dev server**:
   ```bash
   npm run dev
   ```

## Getting Help

If none of these solutions work:

1. **Check documentation**:
   - `KEYSTATIC_SETUP.md` - Detailed setup
   - `FAQ.md` - Common questions
   - `ARCHITECTURE.md` - How it works

2. **Check logs**:
   - Browser console (F12)
   - Terminal output
   - Vercel deployment logs

3. **Search for similar issues**:
   - Keystatic GitHub Issues
   - Astro GitHub Issues
   - Stack Overflow

4. **Ask for help**:
   - Keystatic Discord: https://keystatic.com/discord
   - Astro Discord: https://astro.build/chat

## Quick Fixes Checklist

When something goes wrong, try these in order:

- [ ] Restart dev server
- [ ] Clear browser cache (hard refresh)
- [ ] Clear Astro cache (`rm -rf .astro`)
- [ ] Check environment variables
- [ ] Check console for errors
- [ ] Test build locally (`npm run build`)
- [ ] Check Vercel logs
- [ ] Reinstall dependencies
- [ ] Check documentation

## Prevention Tips

To avoid issues:

1. **Always test locally** before deploying
2. **Keep dependencies updated** regularly
3. **Use environment variables** for secrets
4. **Commit often** with clear messages
5. **Monitor Vercel deployments**
6. **Keep documentation handy**

---

**Still having issues?** See `FAQ.md` or reach out to the community for help.
