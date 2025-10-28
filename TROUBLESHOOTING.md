# Troubleshooting Guide

## Issue 1: Leaderboard Not Showing

### Quick Fixes:

1. **Open Browser Developer Tools**:
   - Press `F12` or right-click → "Inspect"
   - Go to "Console" tab
   - Look for error messages

2. **Check if Elements Exist**:
   - In Console, type: `document.getElementById('menuLeaderboardList')`
   - Should return an HTML element, not `null`

3. **Force Refresh**:
   - Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
   - This clears cache and reloads everything

4. **Check localStorage**:
   - In Console, type: `localStorage.getItem('khmerWordGameLeaderboard')`
   - Should show stored scores or `null`

### Debug Steps:

1. **Test Leaderboard Display**:
   ```javascript
   // In browser console, paste this:
   const game = new KhmerWordGame();
   game.displayMenuLeaderboard();
   ```

2. **Add Test Score**:
   ```javascript
   // In browser console:
   localStorage.setItem('khmerWordGameLeaderboard', JSON.stringify([
     {name: 'Test Player', score: 1000, round: 20, date: '25/12/2024'}
   ]));
   location.reload();
   ```

3. **Check Firebase Connection**:
   - Look for "Firebase not available" in console
   - If Firebase fails, it should fall back to localStorage

## Issue 2: Name Field Validation

### What's Fixed:
- ✅ Name field is now required (`required` attribute)
- ✅ JavaScript validation prevents empty names
- ✅ Shows alert in both Khmer and English
- ✅ Removed "Skip" button to force name entry
- ✅ Name length validation (max 20 characters)

### Test Name Validation:
1. **Try submitting empty name**: Should show alert
2. **Try very long name**: Should show length error
3. **Try normal name**: Should save successfully

## Common Issues:

### 1. Leaderboard Shows "មិនទាន់មានពិន្ទុនៅឡើយទេ"
**Solution**: This is normal for first-time users. Play the game and submit a score.

### 2. Firebase Errors in Console
**Solutions**:
- Check if `firebase-config.js` has correct configuration
- Verify Firestore is enabled in Firebase Console
- Game will work with localStorage if Firebase fails

### 3. Scores Not Saving
**Check**:
- Browser console for error messages
- localStorage in Developer Tools → Application → Local Storage
- Firebase Console → Firestore → Data

### 4. Name Input Not Working
**Solutions**:
- Clear browser cache
- Check if JavaScript is enabled
- Try different browser

## Testing Checklist:

### Before Deployment:
- [ ] Game loads without errors
- [ ] Can play and complete rounds
- [ ] Timer works correctly
- [ ] Leaderboard shows (even if empty message)
- [ ] Name validation works
- [ ] Scores save to localStorage
- [ ] Firebase connection works (if configured)

### After Deployment:
- [ ] Game works on live URL
- [ ] Leaderboard persists between sessions
- [ ] Multiple players can submit scores
- [ ] Real-time updates work (if Firebase)

## Quick Test Script:

Add this to browser console to test everything:

```javascript
// Test leaderboard functionality
console.log('Testing leaderboard...');

// Check if game object exists
if (typeof game !== 'undefined') {
    console.log('Game object found');
    console.log('Current leaderboard:', game.leaderboard);
    game.displayMenuLeaderboard();
} else {
    console.log('Game object not found, creating new instance...');
    const testGame = new KhmerWordGame();
    setTimeout(() => {
        console.log('Test game leaderboard:', testGame.leaderboard);
    }, 1000);
}

// Test localStorage
const stored = localStorage.getItem('khmerWordGameLeaderboard');
console.log('Stored leaderboard:', stored);

// Test Firebase
if (typeof FirestoreService !== 'undefined') {
    console.log('Firebase available');
} else {
    console.log('Firebase not available - using localStorage');
}
```

## Contact for Help:

If issues persist:
1. **Share browser console errors**
2. **Share live URL** (if deployed)
3. **Describe exact steps** that cause the problem
4. **Include screenshots** if helpful