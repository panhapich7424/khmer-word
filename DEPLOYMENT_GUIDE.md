# Deployment Guide: GitHub → Netlify + Firebase

## Your Repository
🔗 **GitHub**: https://github.com/panhapich7424/khmer-word.git

## Step 1: Deploy to Netlify

### Option A: Direct GitHub Integration (Recommended)

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign up/Login** with your GitHub account
3. **Click "New site from Git"**
4. **Choose GitHub** as your Git provider
5. **Select your repository**: `panhapich7424/khmer-word`
6. **Configure build settings**:
   - **Branch to deploy**: `main` (or `master`)
   - **Build command**: (leave empty)
   - **Publish directory**: `/` (root directory)
7. **Click "Deploy site"**

### Option B: Manual Deploy
1. **Download your repository** as ZIP
2. **Extract the files**
3. **Drag and drop** the folder to Netlify dashboard

## Step 2: Setup Firebase

### 2.1 Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click **"Create a project"**
3. Project name: `khmer-word-game`
4. **Disable Google Analytics** (optional for simplicity)
5. Click **"Create project"**

### 2.2 Setup Firestore Database
1. In Firebase Console, click **"Firestore Database"**
2. Click **"Create database"**
3. **Select "Start in test mode"** (allows read/write for 30 days)
4. **Choose location**: `asia-southeast1` (Singapore - closest to Cambodia)
5. Click **"Done"**

### 2.3 Get Firebase Configuration
1. In Firebase Console, click **⚙️ Settings** → **"Project settings"**
2. Scroll down to **"Your apps"** section
3. Click **"Web" icon** `</>`
4. **App nickname**: `khmer-word-game`
5. **Don't check** "Set up Firebase Hosting" (we're using Netlify)
6. Click **"Register app"**
7. **Copy the config object** (looks like this):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefghijk"
};
```

## Step 3: Update Your Code

### 3.1 Update firebase-config.js
Replace the placeholder config in your `firebase-config.js` file:

```javascript
// Replace this section with your actual config
const firebaseConfig = {
    apiKey: "your-actual-api-key-here",
    authDomain: "your-actual-project.firebaseapp.com",
    projectId: "your-actual-project-id",
    storageBucket: "your-actual-project.appspot.com",
    messagingSenderId: "your-actual-sender-id",
    appId: "your-actual-app-id"
};
```

### 3.2 Commit and Push Changes
```bash
git add firebase-config.js
git commit -m "Update Firebase configuration"
git push origin main
```

## Step 4: Netlify Auto-Deploy

If you used GitHub integration:
1. **Netlify will automatically detect** your push
2. **Auto-deploy** your updated site
3. **Check the deploy log** for any errors
4. **Your site will be live** at: `https://random-name-123456.netlify.app`

## Step 5: Custom Domain (Optional)

### 5.1 Change Site Name
1. In Netlify dashboard, go to **"Site settings"**
2. Click **"Change site name"**
3. Enter: `khmer-word-game` (if available)
4. Your site will be: `https://khmer-word-game.netlify.app`

### 5.2 Custom Domain (Advanced)
1. Buy a domain (like `khmerwordgame.com`)
2. In Netlify, go to **"Domain settings"**
3. Click **"Add custom domain"**
4. Follow DNS configuration instructions

## Step 6: Test Everything

### 6.1 Test Game Functionality
1. **Open your deployed site**
2. **Play the game** and complete a few rounds
3. **Submit a high score** with your name
4. **Check if leaderboard updates**

### 6.2 Test Firebase Connection
1. **Go to Firebase Console** → **Firestore Database** → **Data**
2. **Look for "leaderboard" collection**
3. **Verify your score appears** in the database
4. **Test real-time updates** by opening the game in two browser tabs

## Step 7: Set Firestore Security Rules (Important!)

### 7.1 Find Rules Section
1. **Firebase Console** → **Firestore Database**
2. **Look for "Rules" tab** (next to "Data")
3. **If you can't find it**: Try **Build** → **Firestore Database** → **Rules**

### 7.2 Update Rules
Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leaderboard/{document} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['name', 'score', 'round']) &&
        request.resource.data.score is number &&
        request.resource.data.score >= 0 &&
        request.resource.data.score <= 100000 &&
        request.resource.data.name is string &&
        request.resource.data.name.size() <= 50 &&
        request.resource.data.round is number &&
        request.resource.data.round >= 0;
      allow update, delete: if false;
    }
  }
}
```

### 7.3 Publish Rules
1. **Click "Publish"** to save the rules
2. **Confirm** the changes

## Troubleshooting

### If Firebase doesn't work:
- **Check browser console** for error messages
- **Verify Firebase config** is correct
- **Ensure Firestore is enabled** in Firebase Console
- **Check security rules** allow your operations

### If Netlify deploy fails:
- **Check deploy logs** in Netlify dashboard
- **Ensure all files** are committed to GitHub
- **Try manual deploy** by dragging files

### If leaderboard doesn't update:
- **Open browser developer tools** → **Console**
- **Look for Firebase errors**
- **Test with localStorage fallback** (should work offline)

## Your Live URLs

After deployment, you'll have:
- **Game URL**: `https://your-site-name.netlify.app`
- **Firebase Console**: `https://console.firebase.google.com/project/your-project-id`
- **GitHub Repo**: `https://github.com/panhapich7424/khmer-word`

## Next Steps

1. **Share your game** with friends to test multiplayer leaderboard
2. **Monitor Firebase usage** in the console
3. **Consider adding more features** like user profiles or achievements
4. **Optimize for mobile** if needed

🎉 **Your Khmer Word Game will be live and ready to play!**