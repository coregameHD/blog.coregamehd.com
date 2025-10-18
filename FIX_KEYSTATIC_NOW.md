# Fix Keystatic Production Access - Quick Action Guide

## ⚠️ The Problem
You can access Keystatic locally but NOT in production at `https://blog.coregamehd.com/keystatic`.

## ✅ The Solution
The issue is likely **incorrect environment variable names** in Vercel.

## 🚀 Quick Fix (5 Minutes)

### Step 1: Update Vercel Environment Variables

1. **Go to Vercel**:
   - Visit https://vercel.com/dashboard
   - Click on your project

2. **Go to Settings**:
   - Click "Settings" tab
   - Click "Environment Variables" in sidebar

3. **Check current variables**:
   - Do you have `KEYSTATIC_GITHUB_CLIENT_ID`? ❌ Wrong!
   - Do you have `GITHUB_CLIENT_ID`? ✅ Correct!

4. **Delete old variables** (if they exist):
   - Delete `KEYSTATIC_GITHUB_CLIENT_ID`
   - Delete `KEYSTATIC_GITHUB_CLIENT_SECRET`

5. **Add correct variables**:

   **Variable 1:**
   - Name: `GITHUB_CLIENT_ID`
   - Value: [Your GitHub OAuth Client ID]
   - Environments: ✅ Production ✅ Preview ✅ Development
   - Click "Save"

   **Variable 2:**
   - Name: `GITHUB_CLIENT_SECRET`
   - Value: [Your GitHub OAuth Client Secret]
   - Environments: ✅ Production ✅ Preview ✅ Development
   - Click "Save"

   **Variable 3:**
   - Name: `PUBLIC_SITE_URL`
   - Value: `https://blog.coregamehd.com`
   - Environments: ✅ Production ✅ Preview ✅ Development
   - Click "Save"

### Step 2: Verify GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click on your OAuth App
3. Verify **Authorization callback URL** is:
   ```
   https://blog.coregamehd.com/api/keystatic/github/oauth/callback
   ```
   (Must be exact - no trailing slash!)

### Step 3: Redeploy

1. Go to Vercel → Deployments tab
2. Click on latest deployment
3. Click three dots (•••) → "Redeploy"
4. Click "Redeploy" button
5. Wait 2-5 minutes

### Step 4: Test

1. Visit: `https://blog.coregamehd.com/keystatic`
2. Should see Keystatic admin interface
3. Click "Sign in with GitHub"
4. Should work! ✅

## 📋 Checklist

Before redeploying, verify:

- [ ] Variable name is `GITHUB_CLIENT_ID` (not KEYSTATIC_GITHUB_CLIENT_ID)
- [ ] Variable name is `GITHUB_CLIENT_SECRET` (not KEYSTATIC_GITHUB_CLIENT_SECRET)
- [ ] All variables set for Production, Preview, AND Development
- [ ] GitHub OAuth callback URL is exactly: `https://blog.coregamehd.com/api/keystatic/github/oauth/callback`
- [ ] Redeployed after adding variables

## 🔍 Still Not Working?

### Check 1: Environment Variables in Vercel

Screenshot what you have in Vercel and verify:
```
GITHUB_CLIENT_ID = [your-client-id]
GITHUB_CLIENT_SECRET = [your-secret]
PUBLIC_SITE_URL = https://blog.coregamehd.com
```

### Check 2: GitHub OAuth App

Go to https://github.com/settings/developers and verify:
```
Homepage URL: https://blog.coregamehd.com
Callback URL: https://blog.coregamehd.com/api/keystatic/github/oauth/callback
```

### Check 3: Deployment Logs

1. Go to Vercel → Deployments
2. Click on latest deployment
3. Check for errors in build logs

## 💡 Why This Happens

Keystatic looks for environment variables in this order:
1. `GITHUB_CLIENT_ID` ← Correct ✅
2. `KEYSTATIC_GITHUB_CLIENT_ID` ← Also works, but not preferred

If you used `KEYSTATIC_*` prefix, it might not work consistently. Always use `GITHUB_*`.

## 📚 Detailed Documentation

For more details, see:
- **KEYSTATIC_PRODUCTION_FIX.md** - Complete troubleshooting guide
- **QUICK_START.md** - Updated setup instructions
- **.env.example** - Correct variable names

## ⚡ TL;DR

**Problem**: Can't access `/keystatic` in production  
**Cause**: Wrong environment variable names  
**Fix**: Use `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in Vercel  
**Action**: Update variables → Redeploy → Test  

---

**This should fix your Keystatic production access!** 🎉

If it still doesn't work after following these steps, check **KEYSTATIC_PRODUCTION_FIX.md** for advanced troubleshooting.
