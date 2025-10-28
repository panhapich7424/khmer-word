# Firebase Leaderboard Testing Guide

## Your Firebase Configuration ✅
I can see your Firebase is already configured:
- **Project ID**: `khmer-word-game`
- **App ID**: `1:294478940120:web:1c706cfd8bbaca4bd214ad`
- **Domain**: `khmer-word-game.firebaseapp.com`

## Quick Firebase Test

### 1. Open Browser Developer Tools
- Press `F12` or right-click → "Inspect"
- Go to **Console** tab

### 2. Test Firebase Connection
Paste this in the console:
```javascript
// Test if Firebase is loaded
console.log('Firebase loaded:', typeof firebase !== 'undefined');
console.log('Firestore available:', typeof firebase.firestore !== 'undefined');

// Test game Firebase connection
if (typeof game !== 'undefined') {
    game.testFirebaseConnection();
} else {
    console.log('Game not initialized yet');
}
```

### 3. Check Firestore Database
1. Go to [Firebase Console](https://console.firebase.google.com/project/khmer-word-game)
2. Click **"Firestore Database"**
3. Look for **"leaderboard"** collection
4. Check if there are any documents

### 4. Test Score Submission
1. **Play the game** and get a score
2. **Submit your name** when prompted
3. **Check console** for "Score saved to Firebase successfully"
4. **Check Firestore** for new document in leaderboard collection

### 5. Force Firebase Usage
If localStorage is interfering, run this in console:
```javascript
// Clear localStorage and reload from Firebase
if (typeof game !== 'undefined') {
    game.clearLocalStorage();
}
```

## Expected Console Messages

### ✅ Success Messages:
```
Initializing Firebase...
Creating Firestore service...
Testing Firebase connection...
Loading leaderboard from Firebase...
Loaded X scores from Firebase
Setting up real-time leaderboard listener...
Firebase connected successfully!
```

### ❌ Error Messages to Watch For:
```
Firebase SDK not loaded
FirestoreService not available
Error loading Firebase leaderboard
Firebase initialization failed
```

## Firestore Security Rules

Make sure your Firestore rules allow read/write:

1. **Go to Firebase Console** → **Firestore Database** → **Rules**
2. **Check current rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leaderboard/{document} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['name', 'score', 'round']) &&
        request.resource.data.score is number &&
        request.resource.data.score >= 0 &&
        request.resource.data.name is string &&
        request.resource.data.name.size() <= 50;
      allow update, delete: if false;
    }
  }
}
```

3. **Click "Publish"** if rules need updating

## Troubleshooting

### Issue: "Firebase not available"
**Solution**: Check if Firebase scripts are loading:
```html
<!-- These should be in your HTML -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="firebase-config.js"></script>
```

### Issue: "Permission denied"
**Solution**: 
1. Check Firestore security rules
2. Make sure database is in "test mode" or has proper rules

### Issue: Leaderboard shows localStorage data
**Solution**:
```javascript
// Force clear localStorage
localStorage.removeItem('khmerWordGameLeaderboard');
location.reload();
```

### Issue: Real-time updates not working
**Solution**: Check console for listener errors and verify Firebase connection

## Manual Firebase Test

### Add Test Score Directly:
1. **Go to Firestore Console**
2. **Click "Start collection"**
3. **Collection ID**: `leaderboard`
4. **Add document** with these fields:
   - `name` (string): "Test Player"
   - `score` (number): 1000
   - `round` (number): 25
   - `date` (string): "25/12/2024"
   - `timestamp` (timestamp): (auto-generated)

### Verify in Game:
1. **Refresh your game**
2. **Check if test score appears** in leaderboard
3. **Should show real-time updates**

## Success Indicators

✅ **Firebase Working Correctly When:**
- Console shows "Firebase connected successfully!"
- Leaderboard shows "Using Firebase: true"
- New scores appear in Firestore Console
- Real-time updates work (open game in 2 tabs)
- No localStorage fallback messages

## Next Steps

Once Firebase is working:
1. **Remove test data** from Firestore if any
2. **Test with multiple players**
3. **Verify real-time updates**
4. **Deploy to production**

Your Firebase configuration looks correct, so it should work once you test it!