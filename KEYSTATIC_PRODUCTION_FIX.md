# Keystatic Production Access Fix

## Problem
Cannot access `https://blog.coregamehd.com/keystatic` in production, but it works locally.

## Root Causes & Solutions

### 1. Environment Variable Names ⚠️

**Issue**: Keystatic expects specific environment variable names.

**Solution**: Use the correct variable names in Vercel.

#### Required Environment Variables in Vercel:

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these **exact** variable names:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `GITHUB_CLIENT_ID` | Your GitHub OAuth Client ID | Production, Preview, Development |
| `GITHUB_CLIENT_SECRET` | Your GitHub OAuth Client Secret | Production, Preview, Development |
| `PUBLIC_SITE_URL` | `https://blog.coregamehd.com` | Production, Preview, Development |

**Important**: 
- Use `GITHUB_CLIENT_ID` (not `KEYSTATIC_GITHUB_CLIENT_ID`)
- Use `GITHUB_CLIENT_SECRET` (not `KEYSTATIC_GITHUB_CLIENT_SECRET`)
- Keystatic checks for both formats, but `GITHUB_*` is preferred

### 2. GitHub OAuth Callback URL

**Issue**: OAuth callback URL must match exactly.

**Verify your GitHub OAuth App settings**:

1. Go to https://github.com/settings/developers
2. Click on your OAuth App
3. Verify these settings:

```
Application name: Kagami Blog Keystatic (or your choice)
Homepage URL: https://blog.coregamehd.com
Authorization callback URL: https://blog.coregamehd.com/api/keystatic/github/oauth/callback
```

**Critical**: The callback URL must be **exactly**:
```
https://blog.coregamehd.com/api/keystatic/github/oauth/callback
```

Not:
- ❌ `https://blog.coregamehd.com/keystatic/callback`
- ❌ `https://blog.coregamehd.com/api/keystatic/callback`
- ❌ `http://blog.coregamehd.com/api/keystatic/github/oauth/callback` (http)

### 3. Keystatic Configuration

**Issue**: Repository format in config.

**Solution**: ✅ Already fixed!

The `keystatic.config.ts` now uses the correct format:

```typescript
storage: {
  kind: 'github',
  repo: 'coregameHD/blog.coregamehd.com', // ✅ Correct format
},
```

Not:
```typescript
storage: {
  kind: 'github',
  repo: {
    owner: 'coregameHD',  // ❌ Old format
    name: 'blog.coregamehd.com',
  },
},
```

### 4. Vercel Deployment

**Issue**: Environment variables not applied to deployment.

**Solution**: Redeploy after adding environment variables.

After adding/updating environment variables in Vercel:

1. Go to Vercel Dashboard → Deployments
2. Click on the latest deployment
3. Click the three dots (•••) → "Redeploy"
4. Check "Use existing Build Cache" (optional)
5. Click "Redeploy"

Or simply push a new commit to trigger deployment.

## Step-by-Step Fix

### Step 1: Verify GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Find your OAuth App (or create new one)
3. Set these values:
   ```
   Homepage URL: https://blog.coregamehd.com
   Callback URL: https://blog.coregamehd.com/api/keystatic/github/oauth/callback
   ```
4. Copy the **Client ID**
5. Generate/copy the **Client Secret**

### Step 2: Update Vercel Environment Variables

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. **Delete old variables** if they exist:
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
5. **Add new variables**:
   - Name: `GITHUB_CLIENT_ID`
     - Value: [Your Client ID from Step 1]
     - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Name: `GITHUB_CLIENT_SECRET`
     - Value: [Your Client Secret from Step 1]
     - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Name: `PUBLIC_SITE_URL`
     - Value: `https://blog.coregamehd.com`
     - Environments: ✅ Production, ✅ Preview, ✅ Development

### Step 3: Redeploy

1. Go to Deployments tab
2. Click "Redeploy" on the latest deployment
3. Wait for deployment to complete (2-5 minutes)

### Step 4: Test

1. Visit `https://blog.coregamehd.com/keystatic`
2. You should see the Keystatic admin interface
3. Click "Sign in with GitHub"
4. Authorize the app
5. You should be redirected back to Keystatic admin

## Troubleshooting

### Still getting 404 on /keystatic?

**Check build logs**:
1. Go to Vercel → Deployments → Latest deployment
2. Click "View Build Logs"
3. Search for "keystatic"
4. Look for any errors

**Verify integration**:
```bash
# In your local project
grep -r "keystatic()" astro.config.mjs
```
Should show: `keystatic(),` in the integrations array

### Getting OAuth error?

**Error**: "The redirect_uri MUST match the registered callback URL for this application."

**Fix**:
1. Double-check callback URL in GitHub OAuth app
2. Must be exactly: `https://blog.coregamehd.com/api/keystatic/github/oauth/callback`
3. No trailing slash
4. Must use `https://` (not `http://`)

### Getting "Unauthorized" error?

**Possible causes**:
1. Wrong Client ID or Secret
2. Environment variables not set correctly
3. Need to redeploy after setting variables

**Fix**:
1. Verify environment variables in Vercel
2. Check they're set for "Production" environment
3. Redeploy

### Keystatic loads but shows error?

**Error**: "Failed to load repository"

**Fix**:
1. Verify repository name in `keystatic.config.ts`
2. Should be: `repo: 'coregameHD/blog.coregamehd.com'`
3. Check you have write access to the repository
4. Verify OAuth app has correct permissions

## Environment Variable Checklist

In Vercel, you should have exactly these variables:

- [ ] `GITHUB_CLIENT_ID` (not KEYSTATIC_GITHUB_CLIENT_ID)
- [ ] `GITHUB_CLIENT_SECRET` (not KEYSTATIC_GITHUB_CLIENT_SECRET)
- [ ] `PUBLIC_SITE_URL`
- [ ] All set for Production, Preview, and Development
- [ ] Redeployed after adding variables

## Common Mistakes

❌ **Wrong variable names**:
- Using `KEYSTATIC_GITHUB_CLIENT_ID` instead of `GITHUB_CLIENT_ID`

❌ **Wrong callback URL**:
- Using `/keystatic/callback` instead of `/api/keystatic/github/oauth/callback`

❌ **Not redeploying**:
- Environment variables only apply to new deployments

❌ **Wrong repository format**:
- Using object format instead of string format in config

❌ **HTTP instead of HTTPS**:
- Callback URL must use `https://` in production

## Verification

After fixing, verify these work:

1. ✅ `https://blog.coregamehd.com` - Main site loads
2. ✅ `https://blog.coregamehd.com/keystatic` - Admin interface loads
3. ✅ Click "Sign in with GitHub" - Redirects to GitHub
4. ✅ Authorize app - Redirects back to Keystatic
5. ✅ See "Blog Posts" and "Legal Pages" collections
6. ✅ Can open and edit a post

## Summary

**Most common issue**: Wrong environment variable names in Vercel.

**Quick fix**:
1. Use `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` (not KEYSTATIC_*)
2. Verify callback URL: `https://blog.coregamehd.com/api/keystatic/github/oauth/callback`
3. Redeploy after adding variables

---

**After following these steps, your Keystatic admin should work in production!** 🎉
