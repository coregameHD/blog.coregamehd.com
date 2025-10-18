# Deployment Checklist for Keystatic + Vercel

Use this checklist to ensure your Keystatic CMS is properly deployed on Vercel.

## Pre-Deployment

### ☐ 1. Create GitHub OAuth App

- [ ] Go to https://github.com/settings/developers
- [ ] Click "New OAuth App"
- [ ] Set **Application name**: `Kagami Blog Keystatic`
- [ ] Set **Homepage URL**: `https://blog.coregamehd.com`
- [ ] Set **Authorization callback URL**: `https://blog.coregamehd.com/api/keystatic/github/oauth/callback`
- [ ] Click "Register application"
- [ ] Copy the **Client ID** (save it somewhere safe)
- [ ] Click "Generate a new client secret"
- [ ] Copy the **Client Secret** (save it somewhere safe - you won't see it again!)

### ☐ 2. Test Local Build

```bash
npm run build
```

- [ ] Build completes successfully (exit code 0)
- [ ] No critical errors in output
- [ ] Check `dist/` folder is created

### ☐ 3. Commit Changes to GitHub

```bash
git add .
git commit -m "Add Keystatic CMS integration"
git push origin main
```

- [ ] All files committed
- [ ] Pushed to GitHub successfully
- [ ] Verify files appear on GitHub

## Vercel Setup

### ☐ 4. Connect Repository to Vercel

- [ ] Log in to https://vercel.com
- [ ] Click "Add New Project"
- [ ] Import your GitHub repository: `coregameHD/blog.coregamehd.com`
- [ ] Vercel auto-detects Astro framework

### ☐ 5. Configure Build Settings

Vercel should auto-detect these, but verify:

- [ ] **Framework Preset**: Astro
- [ ] **Build Command**: `npm run build`
- [ ] **Output Directory**: `dist`
- [ ] **Install Command**: `npm install`

### ☐ 6. Add Environment Variables

In Vercel project settings → Environment Variables, add:

- [ ] `PUBLIC_SITE_URL`
  - Value: `https://blog.coregamehd.com`
  - Environment: Production, Preview, Development

- [ ] `KEYSTATIC_GITHUB_CLIENT_ID`
  - Value: [Your GitHub OAuth Client ID]
  - Environment: Production, Preview, Development

- [ ] `KEYSTATIC_GITHUB_CLIENT_SECRET`
  - Value: [Your GitHub OAuth Client Secret]
  - Environment: Production, Preview, Development

### ☐ 7. Deploy

- [ ] Click "Deploy"
- [ ] Wait for deployment to complete (2-5 minutes)
- [ ] Check deployment logs for errors
- [ ] Verify deployment is successful

## Post-Deployment Testing

### ☐ 8. Test Main Site

- [ ] Visit `https://blog.coregamehd.com`
- [ ] Site loads correctly
- [ ] Blog posts display properly
- [ ] Navigation works
- [ ] Images load correctly

### ☐ 9. Test Keystatic Admin

- [ ] Visit `https://blog.coregamehd.com/keystatic`
- [ ] Admin interface loads
- [ ] Click "Sign in with GitHub"
- [ ] OAuth authentication works
- [ ] You're redirected back to Keystatic admin
- [ ] You can see your collections (Blog Posts, Legal Pages)

### ☐ 10. Test Content Editing

- [ ] Click on "Blog Posts"
- [ ] Open an existing post
- [ ] Make a small edit
- [ ] Click "Save"
- [ ] Check GitHub for new commit
- [ ] Wait for Vercel to rebuild (check Vercel dashboard)
- [ ] Verify changes appear on live site

### ☐ 11. Test Image Upload

- [ ] Create or edit a blog post
- [ ] Click the image button in the editor
- [ ] Upload a test image
- [ ] Image appears in editor
- [ ] Save the post
- [ ] Check that image is in GitHub at `public/images/blog/`
- [ ] Verify image displays on live site

## Troubleshooting

### If OAuth Fails

- [ ] Double-check GitHub OAuth callback URL matches exactly
- [ ] Verify Client ID and Secret are correct in Vercel
- [ ] Check that environment variables are set for all environments
- [ ] Try redeploying after fixing

### If Build Fails

- [ ] Check Vercel deployment logs
- [ ] Verify all dependencies are in `package.json`
- [ ] Test build locally: `npm run build`
- [ ] Check for TypeScript errors: `npm run check`

### If Content Doesn't Update

- [ ] Verify commit was made to GitHub
- [ ] Check Vercel deployment was triggered
- [ ] Look at Vercel deployment logs
- [ ] Clear browser cache
- [ ] Check if `publish` field is set to `true`

### If Images Don't Upload

- [ ] Verify `/public/images/blog/` directory exists
- [ ] Check GitHub permissions
- [ ] Verify OAuth token has write access
- [ ] Check Vercel deployment logs for errors

## Optional Enhancements

### ☐ Custom Domain (if not already set)

- [ ] Add custom domain in Vercel settings
- [ ] Update DNS records
- [ ] Update GitHub OAuth callback URL to use custom domain
- [ ] Update `PUBLIC_SITE_URL` environment variable

### ☐ Add More Users

- [ ] Users need GitHub account
- [ ] Add collaborators to your GitHub repository
- [ ] They can access Keystatic at `/keystatic`
- [ ] They authenticate with their GitHub account

### ☐ Set Up Webhooks (Optional)

- [ ] Configure GitHub webhooks for instant deployments
- [ ] Set up Vercel deploy hooks
- [ ] Configure build notifications

## Maintenance

### Regular Tasks

- [ ] **Weekly**: Check for Keystatic updates
- [ ] **Monthly**: Review and update dependencies
- [ ] **As Needed**: Add new categories or content types
- [ ] **As Needed**: Backup GitHub repository

### Monitoring

- [ ] Set up Vercel deployment notifications
- [ ] Monitor build times
- [ ] Check for failed deployments
- [ ] Review error logs periodically

## Success Criteria

✅ Your deployment is successful when:

1. Main site loads at `https://blog.coregamehd.com`
2. Keystatic admin loads at `https://blog.coregamehd.com/keystatic`
3. You can authenticate with GitHub
4. You can edit content through Keystatic
5. Changes commit to GitHub automatically
6. Vercel rebuilds automatically on commits
7. Changes appear on live site within 2-5 minutes

---

## Quick Reference

**Admin URL**: `https://blog.coregamehd.com/keystatic`  
**GitHub OAuth**: https://github.com/settings/developers  
**Vercel Dashboard**: https://vercel.com/dashboard  
**Repository**: https://github.com/coregameHD/blog.coregamehd.com

---

**Need Help?** See `KEYSTATIC_SETUP.md` for detailed instructions.
