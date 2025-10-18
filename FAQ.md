# Keystatic CMS - Frequently Asked Questions

## General Questions

### What is Keystatic?

Keystatic is a content management system (CMS) that provides a visual interface for editing content while storing everything in your Git repository. It's perfect for static sites because it combines the ease of a traditional CMS with the benefits of Git-based workflows.

### Why use Keystatic instead of other CMS options?

**Advantages**:
- ✅ Content stored in Git (version control, backup, portability)
- ✅ No database required
- ✅ Free and open source
- ✅ Works with static site generators
- ✅ Visual editor for non-technical users
- ✅ GitHub-based authentication
- ✅ Markdown/MDX support

**Compared to**:
- **WordPress**: No database, no security updates, faster
- **Contentful/Strapi**: Free, no vendor lock-in, content in your repo
- **NetlifyCMS**: More modern, better maintained, better UX

### Do I need to know how to code to use Keystatic?

No! Once set up, content editors can use Keystatic without any coding knowledge. The visual editor is similar to WordPress or Medium.

However, initial setup requires some technical knowledge (or following this guide).

## Setup Questions

### Do I need a GitHub account?

Yes. Keystatic uses GitHub for:
1. Content storage (your repository)
2. Authentication (OAuth)
3. Version control

All editors need a GitHub account and repository access.

### What are the GitHub OAuth credentials for?

The OAuth app allows Keystatic to:
- Authenticate users
- Read content from your repository
- Commit changes on your behalf

Without OAuth, Keystatic won't work in production.

### Can I use Keystatic without GitHub OAuth locally?

Yes! For local development, you can temporarily switch to local mode:

```typescript
// In keystatic.config.ts
storage: {
  kind: 'local',
}
```

**Important**: Change it back to `github` before deploying!

### Why do I need environment variables?

Environment variables store sensitive information (OAuth secrets) securely without committing them to your repository. They're required for:
- GitHub OAuth authentication
- Site URL configuration
- Security best practices

## Content Management

### How do I create a new blog post?

1. Go to `/keystatic` on your site
2. Sign in with GitHub
3. Click "Blog Posts" → "Create Entry"
4. Fill in the fields
5. Write your content
6. Click "Save"

Your post is now committed to GitHub and will deploy automatically.

### How do I upload images?

Two ways:

**Method 1: Through Keystatic**
1. In the content editor, click the image button
2. Upload your image
3. It's saved to `/public/images/blog/`
4. The path is automatically inserted

**Method 2: Manual**
1. Add image to `/public/images/blog/`
2. Reference it in your post: `![Alt text](/images/blog/image.jpg)`

### Can I use external images (URLs)?

Yes! In the "Featured Image" field, you can use any URL (like Cloudinary, Imgur, etc.).

For content images, you can also use Markdown image syntax with URLs:
```markdown
![Alt text](https://example.com/image.jpg)
```

### How do I unpublish a post?

1. Open the post in Keystatic
2. Uncheck the "Publish" checkbox
3. Save

The post will be hidden from your site but remains in your repository.

### Can I schedule posts for future publication?

Not automatically. However, you can:
1. Set a future "Publish Date"
2. Set "Publish" to false
3. Manually publish it on that date

For automatic scheduling, you'd need to add custom logic to filter posts by date.

### How do I delete a post?

**Through Keystatic**:
1. Open the post
2. Look for the delete option (usually in a menu)
3. Confirm deletion

**Manually**:
1. Delete the `.md` file from `src/content/blog/`
2. Commit and push

### Can I edit posts directly in GitHub?

Yes! You can edit the Markdown files directly in GitHub or your code editor. Changes will appear on your site after the next build.

Keystatic is just a convenient interface - your content is standard Markdown.

## Categories and Organization

### How do I add new categories?

Edit `keystatic.config.ts`:

```typescript
categories: fields.array(
  fields.select({
    label: 'Category',
    options: [
      { label: 'General', value: 'General' },
      { label: 'Technology', value: 'Technology' },
      { label: 'Your New Category', value: 'Your New Category' },
      // Add more here
    ],
    defaultValue: 'General',
  }),
  // ...
)
```

Then commit and deploy.

### Can I use tags instead of categories?

Yes! Modify the schema in `keystatic.config.ts`:

```typescript
tags: fields.array(
  fields.text({ label: 'Tag' }),
  {
    label: 'Tags',
    itemLabel: (props) => props.value,
  }
),
```

### How do I organize posts into folders?

Currently, all posts are in `src/content/blog/`. To organize by year:

1. Update the path in `keystatic.config.ts`:
```typescript
path: 'src/content/blog/{year}/*'
```

2. Add a year field to the schema

## Deployment Questions

### How long does it take for changes to appear?

**Timeline**:
1. Save in Keystatic: ~2 seconds
2. Commit to GitHub: instant
3. Vercel build: 2-3 minutes
4. Deploy: 30-60 seconds

**Total**: 2-5 minutes from save to live

### Can I preview changes before publishing?

Yes! Use the "Publish" checkbox:
- Unchecked = draft (not visible on site)
- Checked = published (visible on site)

For a proper preview environment, set up Vercel preview deployments.

### What happens if the build fails?

1. Vercel keeps your last successful deployment live
2. You'll get a notification (if configured)
3. Check Vercel logs for the error
4. Fix the issue and commit again

Your site stays up during failed builds.

### Can I rollback to a previous version?

**Three ways**:

1. **Vercel Dashboard**: Rollback to previous deployment
2. **Git**: Revert the commit and push
3. **GitHub**: Restore file from history

### Do I need to rebuild for every change?

Yes, but it's automatic! Every commit triggers a rebuild. This ensures:
- Content is always in sync
- Static pages are regenerated
- Images are optimized

## Technical Questions

### Why does the site use "server" mode?

Keystatic requires server-side rendering (SSR) for the admin interface. However:
- Only `/keystatic/*` routes use SSR
- All blog posts and pages are still static
- Performance is not affected

### Can I use Keystatic with other frameworks?

Yes! Keystatic supports:
- Next.js
- Remix
- SvelteKit
- Astro (what you're using)
- And more

### What's the difference between Markdown and MDX?

- **Markdown**: Simple text formatting (`.md`)
- **MDX**: Markdown + React components (`.mdx`)

Keystatic supports both. MDX lets you embed interactive components in your content.

### How much does Keystatic cost?

**Free!** Keystatic is open source. You only pay for:
- GitHub (free for public repos)
- Vercel (free tier is generous)

### What are the limitations?

**Keystatic**:
- Requires GitHub account
- No built-in media library (uses file system)
- No built-in scheduling
- No multi-language support out of the box

**Vercel Free Tier**:
- 100GB bandwidth/month
- 100 builds/day
- Usually sufficient for blogs

### Is my content portable?

Yes! Your content is:
- Standard Markdown files
- In your Git repository
- Not locked to Keystatic

You can switch to any other system that reads Markdown.

## Collaboration Questions

### Can multiple people edit content?

Yes! Add them as collaborators to your GitHub repository. They can:
- Access Keystatic with their GitHub account
- Edit content simultaneously
- See each other's changes (after commits)

### How do I control who can edit?

Use GitHub repository permissions:
- **Admin**: Full access
- **Write**: Can edit content
- **Read**: View only (can't edit)

### Can I see who made changes?

Yes! Check the Git history:
- GitHub commit history
- Each commit shows author and timestamp
- Full audit trail

### What happens if two people edit the same post?

Git handles conflicts:
1. First person saves: No problem
2. Second person saves: May get a conflict
3. Resolve conflict in GitHub or locally
4. Commit the resolution

## Troubleshooting

### "Failed to authenticate" error

**Causes**:
- Wrong OAuth credentials
- Callback URL mismatch
- Environment variables not set

**Fix**:
1. Check GitHub OAuth app settings
2. Verify callback URL: `https://blog.coregamehd.com/api/keystatic/github/oauth/callback`
3. Check Vercel environment variables
4. Redeploy

### Images not uploading

**Causes**:
- Directory doesn't exist
- GitHub permissions
- File size too large

**Fix**:
1. Verify `/public/images/blog/` exists
2. Check GitHub OAuth has write access
3. Try smaller images (< 5MB)
4. Check browser console for errors

### Changes not appearing on site

**Causes**:
- Build failed
- Cache not cleared
- Post not published

**Fix**:
1. Check Vercel deployment status
2. Clear browser cache (Cmd+Shift+R)
3. Verify "Publish" is checked
4. Check Vercel logs for errors

### "Cannot find module" error

**Cause**: Missing dependency

**Fix**:
```bash
npm install
npm run build
```

If still failing, delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build takes too long

**Normal**: 2-3 minutes for 200+ pages

**If longer**:
- Check Vercel build logs
- Look for optimization opportunities
- Consider incremental builds (advanced)

## Performance Questions

### Will Keystatic slow down my site?

No! Only the admin interface (`/keystatic`) uses SSR. All public pages are static and served from CDN.

### How many posts can I have?

Thousands! The build time scales linearly:
- 200 posts: ~18 seconds
- 1,000 posts: ~90 seconds
- 10,000 posts: ~15 minutes

Vercel has a 45-minute build timeout.

### How do I optimize images?

Astro automatically optimizes images. For best results:
1. Upload reasonable sizes (< 2MB)
2. Use modern formats (WebP, AVIF)
3. Let Astro handle optimization

### Can I use a CDN for images?

Yes! Use external URLs (Cloudinary, Imgix, etc.) in the "Featured Image" field.

## Support

### Where can I get help?

1. **This FAQ**
2. **KEYSTATIC_SETUP.md** - Detailed setup guide
3. **Keystatic Docs**: https://keystatic.com/docs
4. **Astro Docs**: https://docs.astro.build
5. **GitHub Issues**: Report bugs or ask questions

### How do I report a bug?

1. Check if it's a known issue
2. Try to reproduce it
3. Open an issue on GitHub with:
   - Description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Can I customize Keystatic?

Yes! Edit `keystatic.config.ts` to:
- Add/remove fields
- Change field types
- Add new collections
- Customize UI labels

See Keystatic documentation for all options.

---

## Quick Reference

**Admin URL**: `/keystatic`  
**Content Location**: `src/content/blog/`  
**Image Location**: `public/images/blog/`  
**Config File**: `keystatic.config.ts`  
**Docs**: See `KEYSTATIC_SETUP.md`

---

**Still have questions?** Check the detailed setup guide in `KEYSTATIC_SETUP.md` or visit the Keystatic documentation.
