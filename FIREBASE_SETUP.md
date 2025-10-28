# Firebase Setup Guide for Khmer Word Game

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `khmer-word-game`
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Setup Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

## Step 3: Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon (</>) to add web app
4. Enter app nickname: `khmer-word-game-web`
5. Check "Also set up Firebase Hosting" (optional)
6. Click "Register app"
7. Copy the configuration object

## Step 4: Update Configuration

Replace the configuration in `firebase-config.js`:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};
```

## Step 5: Setup Firestore Security Rules

### Finding Firestore Rules:

**Method 1 - From Firestore Database:**
1. In Firebase Console, go to "Firestore Database"
2. Look for "Rules" tab at the top (next to "Data", "Indexes", etc.)
3. Click on "Rules" tab

**Method 2 - If Rules tab is not visible:**
1. In Firebase Console left sidebar, look for "Firestore Database"
2. Click on "Firestore Database" 
3. You should see tabs: "Data", "Rules", "Indexes", "Usage"
4. Click "Rules"

**Method 3 - Alternative path:**
1. In Firebase Console, go to "Build" in left sidebar
2. Click "Firestore Database"
3. Look for "Rules" tab in the main content area

### Update the Rules:

Once you find the Rules section, replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to leaderboard for everyone
    match /leaderboard/{document} {
      allow read: if true;
      
      // Allow write (create only) with validation
      allow create: if request.resource.data.keys().hasAll(['name', 'score', 'round']) &&
        request.resource.data.score is number &&
        request.resource.data.score >= 0 &&
        request.resource.data.score <= 100000 &&
        request.resource.data.name is string &&
        request.resource.data.name.size() <= 50 &&
        request.resource.data.round is number &&
        request.resource.data.round >= 0 &&
        request.resource.data.round <= 1000;
        
      // Prevent updates and deletes
      allow update, delete: if false;
    }
  }
}
```

### If you still can't find Rules:

**Temporary Solution (for testing only):**
If you can't find the Rules section, you can temporarily use test mode rules:

1. When creating the database, select "Start in test mode"
2. This allows read/write for 30 days
3. **Important**: Remember to set proper rules before the 30 days expire

**Screenshot locations to check:**
- Top navigation tabs in Firestore Database view
- Left sidebar under "Build" section
- Main content area tabs when viewing Firestore

### After updating rules:
1. Click "Publish" button to save the rules
2. You should see a confirmation message
3. Test by submitting a score in your game

## Step 6: Deploy to Netlify

### Option A: Manual Deploy
1. Build your project files
2. Drag and drop the folder to Netlify

### Option B: Git Integration
1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Set build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `/` (root)

## Step 7: Environment Variables (Optional)

For production, you can use Netlify environment variables:

1. Go to Netlify Site Settings
2. Go to "Environment variables"
3. Add Firebase config as environment variables:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - etc.

## Step 8: Test the Setup

1. Open your deployed site
2. Play the game and submit a score
3. Check Firestore Console to see if data is saved
4. Verify leaderboard updates in real-time

## Firestore Data Structure

The leaderboard collection will store documents with this structure:

```javascript
{
  name: "Player Name",
  score: 1250,
  round: 45,
  date: "12/25/2024",
  timestamp: Firestore.Timestamp
}
```

## Security Notes

- The current rules allow anonymous writes for simplicity
- For production, consider adding rate limiting
- Monitor usage to stay within Firebase free tier limits
- Consider adding user authentication for better security

## Free Tier Limits

Firebase Free Tier includes:
- 1 GiB stored data
- 10 GiB/month bandwidth
- 20,000 reads/day
- 20,000 writes/day

This should be sufficient for a moderate-traffic game.