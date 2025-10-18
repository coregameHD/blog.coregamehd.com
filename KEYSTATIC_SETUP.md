# Keystatic CMS Setup Guide

This guide explains how to set up and use Keystatic CMS with your Astro blog.

## What is Keystatic?

Keystatic is a content management system (CMS) that allows you to edit your content through a user-friendly interface while keeping everything in your Git repository. It's perfect for static sites deployed on platforms like Vercel.

## Setup Instructions

### 1. GitHub OAuth App Setup

To use Keystatic in production, you need to create a GitHub OAuth App:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: `Kagami Blog Keystatic`
   - **Homepage URL**: `https://blog.coregamehd.com`
   - **Authorization callback URL**: `https://blog.coregamehd.com/api/keystatic/github/oauth/callback`
4. Click "Register application"
5. Copy the **Client ID**
6. Generate a new **Client Secret** and copy it

### 2. Configure Environment Variables

#### For Local Development:

1. Create a `.env` file in the root directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Add your GitHub OAuth credentials:
   ```env
   PUBLIC_SITE_URL=http://localhost:4321
   KEYSTATIC_GITHUB_CLIENT_ID=your_github_client_id
   KEYSTATIC_GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

#### For Vercel Deployment:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables:
   - `PUBLIC_SITE_URL`: `https://blog.coregamehd.com`
   - `KEYSTATIC_GITHUB_CLIENT_ID`: Your GitHub OAuth Client ID
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`: Your GitHub OAuth Client Secret

### 3. Local Development with Keystatic

For local development, you have two options:

#### Option A: GitHub Mode (Recommended for testing)
```bash
npm run dev
```
Then visit: `http://localhost:4321/keystatic`

You'll need to authenticate with GitHub to edit content.

#### Option B: Local Mode (No GitHub authentication needed)

If you want to test without GitHub authentication, temporarily change the storage mode in `keystatic.config.ts`:

```typescript
storage: {
  kind: 'local',
},
```

**Important**: Remember to change it back to `github` before deploying!

### 4. Accessing Keystatic Admin

- **Local**: `http://localhost:4321/keystatic`
- **Production**: `https://blog.coregamehd.com/keystatic`

## Using Keystatic

### Managing Blog Posts

1. Navigate to `/keystatic` on your site
2. Sign in with GitHub (in production)
3. Click on "Blog Posts" in the sidebar
4. You can:
   - Create new blog posts
   - Edit existing posts
   - Delete posts
   - Upload images to `/public/images/blog/`

### Content Structure

Each blog post includes:
- **Title**: The post title
- **Slug**: URL-friendly identifier
- **Featured Image**: URL to the header image
- **Publish Date**: When the post was published
- **Publish**: Toggle to show/hide the post
- **Categories**: Select one or more categories
- **Content**: Rich text editor with Markdown support

### Managing Legal Pages

Similarly, you can manage legal pages (Privacy Policy, Terms of Service, etc.) through the "Legal Pages" section.

## Deployment on Vercel

### Initial Setup

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Astro
3. Add the environment variables mentioned above
4. Deploy!

### Automatic Deployments

When you edit content through Keystatic:
1. Keystatic commits changes to your GitHub repository
2. Vercel automatically detects the commit
3. Vercel rebuilds and redeploys your site
4. Your changes are live in a few minutes!

## Troubleshooting

### "Failed to authenticate" error

- Check that your GitHub OAuth credentials are correct
- Verify the callback URL matches exactly
- Make sure you've added the environment variables to Vercel

### Changes not appearing

- Check if the commit was made to GitHub
- Verify Vercel deployment logs
- Ensure the `publish` field is set to `true` for the post

### Local development issues

- Make sure you're running `npm run dev`
- Clear your browser cache
- Check that `.env` file exists and has correct values

## Content Collections

Your content is organized in:
- `/src/content/blog/` - Blog posts
- `/src/content/legal/` - Legal pages

All content is stored as Markdown files with frontmatter, making it easy to:
- Version control your content
- Edit directly in your code editor if needed
- Migrate to other platforms in the future

## Additional Resources

- [Keystatic Documentation](https://keystatic.com/docs)
- [Astro Documentation](https://docs.astro.build)
- [Vercel Documentation](https://vercel.com/docs)

## Support

If you encounter any issues, please check:
1. GitHub OAuth app settings
2. Environment variables in Vercel
3. Keystatic configuration in `keystatic.config.ts`
