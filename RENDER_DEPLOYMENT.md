# Deploy Khmer Word Game to Render.com

## Why Render.com?
- ✅ **Free static site hosting**
- ✅ **Automatic deployments** from GitHub
- ✅ **Custom domains** support
- ✅ **HTTPS by default**
- ✅ **Global CDN** for fast loading
- ✅ **Easy setup** with GitHub integration

## Prerequisites
- ✅ Your code is on GitHub: `https://github.com/panhapich7424/khmer-word.git`
- ✅ Firebase is configured in `firebase-config.js`

## Step 1: Fix the Deployment Issue

### 1.1 The Problem
Render detected your project as Node.js and tried to run `yarn build`, but your game is a static site that doesn't need building.

### 1.2 Solution: Update Render Settings
You need to configure Render to treat this as a static site:

**In Render Dashboard:**
1. Go to your service settings
2. **Environment**: Change to `Static Site` (not Node)
3. **Build Command**: `echo "No build needed"`
4. **Publish Directory**: `.` (root directory)

### 1.3 Alternative: Use render.yaml
Create this file to force static site deployment:

```yaml
services:
  - type: web
    name: khmer-word-game
    env: static
    buildCommand: ""
    staticPublishPath: .
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### 1.4 Ensure All Files Are Committed
Make sure all your files are pushed to GitHub:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

## Step 2: Deploy to Render

### 2.1 Create Render Account
1. **Go to**: https://render.com/
2. **Sign up** with your GitHub account
3. **Authorize Render** to access your repositories

### 2.2 Create New Static Site
1. **Click "New +"** in Render dashboard
2. **Select "Static Site"**
3. **Connect your GitHub repository**: `panhapich7424/khmer-word`

### 2.3 Configure Deployment Settings
- **Name**: `khmer-word-game`
- **Branch**: `main` (or `master`)
- **Root Directory**: (leave empty)
- **Build Command**: `echo "No build needed"`
- **Publish Directory**: `.` (or leave empty)

### 2.4 Deploy
1. **Click "Create Static Site"**
2. **Wait for deployment** (usually 1-2 minutes)
3. **Your site will be live** at: `https://khmer-word-game.onrender.com`

## Step 3: Configure Custom Domain (Optional)

### 3.1 Custom Subdomain
1. **Go to site settings** in Render dashboard
2. **Click "Custom Domains"**
3. **Add custom domain**: `khmerwordgame.onrender.com`

### 3.2 Your Own Domain
If you have a domain like `khmerwordgame.com`:
1. **Add domain** in Render settings
2. **Update DNS records** at your domain provider:
   - **Type**: CNAME
   - **Name**: www (or @)
   - **Value**: `khmer-word-game.onrender.com`

## Step 4: Environment Variables (If Needed)

If you want to use environment variables for Firebase config:

### 4.1 Add Environment Variables
1. **Go to site settings** → **Environment**
2. **Add variables**:
   - `FIREBASE_API_KEY`: Your Firebase API key
   - `FIREBASE_PROJECT_ID`: khmer-word-game
   - etc.

### 4.2 Update firebase-config.js
```javascript
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyCwOXjfJikfk7g8Lyx_zjhNEvIYnVMDpq0",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "khmer-word-game.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "khmer-word-game",
    // ... other config
};
```

## Step 5: Automatic Deployments

### 5.1 Auto-Deploy Setup
Render automatically deploys when you push to GitHub:

```bash
# Make any changes to your code
git add .
git commit -m "Update game features"
git push origin main
# Render will automatically deploy the changes!
```

### 5.2 Deploy Notifications
- **Check deploy status** in Render dashboard
- **View build logs** if deployment fails
- **Get email notifications** for successful/failed deploys

## Step 6: Testing Your Deployed Game

### 6.1 Test Game Functionality
1. **Open your Render URL**: `https://khmer-word-game.onrender.com`
2. **Test game play**: Start game, complete rounds
3. **Test Firebase**: Submit scores, check leaderboard
4. **Test on mobile**: Ensure responsive design works

### 6.2 Test Firebase Connection
Open browser console and check for:
```
Firebase connected successfully!
Loading leaderboard from Firebase...
Score saved to Firebase successfully
```

## Render vs Netlify Comparison

| Feature | Render | Netlify |
|---------|--------|---------|
| **Free Tier** | ✅ Generous | ✅ Good |
| **Custom Domains** | ✅ Free | ✅ Free |
| **Auto Deploy** | ✅ GitHub | ✅ GitHub |
| **Build Time** | ✅ Fast | ✅ Fast |
| **Global CDN** | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Auto | ✅ Auto |

## Troubleshooting

### Issue: "Couldn't find package.json" or "yarn build" Errors
**This is your current issue!**

**Solutions**:
1. **Change service type** in Render dashboard:
   - Go to Settings → Environment
   - Change from "Node" to "Static Site"
   
2. **Update build settings**:
   - Build Command: `echo "No build needed"`
   - Publish Directory: `.`
   
3. **Redeploy** after changing settings

### Issue: Site Not Loading
**Solution**: Check build logs in Render dashboard

### Issue: Firebase Not Working
**Solutions**:
1. **Check console** for Firebase errors
2. **Verify firebase-config.js** has correct settings
3. **Check Firestore rules** allow read/write

### Issue: 404 Errors
**Solution**: Add `render.yaml` with rewrite rules

### Issue: Slow Loading
**Solution**: Render's CDN should handle this automatically

## Your Live URLs

After deployment:
- **Game URL**: `https://khmer-word-game.onrender.com`
- **Custom Domain**: `https://your-domain.com` (if configured)
- **GitHub Repo**: `https://github.com/panhapich7424/khmer-word`
- **Firebase Console**: `https://console.firebase.google.com/project/khmer-word-game`

## Render Dashboard Features

### Useful Render Features:
- **Deploy History**: See all previous deployments
- **Build Logs**: Debug deployment issues
- **Analytics**: Monitor site traffic
- **Custom Headers**: Add security headers
- **Redirects**: Set up URL redirects

## Next Steps After Deployment

1. **Share your game** with friends: `https://khmer-word-game.onrender.com`
2. **Monitor Firebase usage** in Firebase Console
3. **Check site analytics** in Render dashboard
4. **Add more features** and auto-deploy via GitHub

## Quick Deploy Commands

```bash
# Complete deployment workflow:
git add .
git commit -m "Deploy to Render"
git push origin main
# Visit: https://render.com/dashboard to see deployment status
```

🎉 **Your Khmer Word Game will be live on Render.com!**

The deployment process is very similar to Netlify but with Render's interface. The main advantage is Render's generous free tier and excellent performance.