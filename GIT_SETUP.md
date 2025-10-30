# Git Setup Guide - Push to GitHub

## Your GitHub Repository
🔗 **Repository**: https://github.com/panhapich7424/khmer-word.git

## Step 1: Initialize Git in Your Project

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add your GitHub repository as remote origin
git remote add origin https://github.com/panhapich7424/khmer-word.git
```

## Step 2: Create .gitignore File   

Create a `.gitignore` file to exclude unnecessary files:

```bash
# Create .gitignore file
touch .gitignore
```

Add this content to `.gitignore`:

```
# IDE and Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
*.log
npm-debug.log*

# Temporary files
*.tmp
*.temp

# Node modules (if you add them later)
node_modules/

# Environment variables (if you add them later)
.env
.env.local
.env.production
```

## Step 3: Add All Files to Git

```bash
# Add all files to staging area
git add .

# Check what files will be committed
git status
```

You should see files like:
- `index.html`
- `style.css`
- `script.js`
- `firebase-config.js`
- `FIREBASE_SETUP.md`
- `DEPLOYMENT_GUIDE.md`
- `.gitignore`

## Step 4: Make Your First Commit

```bash
# Commit all files with a message
git commit -m "Initial commit: Khmer Word Game with Firebase integration"
```

## Step 5: Push to GitHub

### Option A: If your repository is empty
```bash
# Push to main branch
git branch -M main
git push -u origin main
```

### Option B: If your repository has files (like README)
```bash
# Pull any existing files first
git pull origin main --allow-unrelated-histories

# Then push your changes
git push -u origin main
```

## Step 6: Verify Upload

1. **Go to your GitHub repository**: https://github.com/panhapich7424/khmer-word
2. **Refresh the page**
3. **You should see all your files** listed

## Alternative: Using GitHub Desktop (GUI Method)

If you prefer a visual interface:

### Download GitHub Desktop
1. **Download**: https://desktop.github.com/
2. **Install and sign in** with your GitHub account

### Clone and Upload
1. **Click "Clone a repository from the Internet"**
2. **Enter**: `https://github.com/panhapich7424/khmer-word.git`
3. **Choose local folder** to clone to
4. **Copy your game files** into the cloned folder
5. **Open GitHub Desktop**
6. **You'll see all changes** in the left panel
7. **Add commit message**: "Initial commit: Khmer Word Game"
8. **Click "Commit to main"**
9. **Click "Push origin"**

## Troubleshooting

### If you get authentication errors:
```bash
# Configure your git credentials
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### If you get permission denied:
1. **Use GitHub Personal Access Token** instead of password
2. **Go to GitHub** → Settings → Developer settings → Personal access tokens
3. **Generate new token** with repo permissions
4. **Use token as password** when prompted

### If repository already has files:
```bash
# Force push (be careful - this overwrites remote)
git push -f origin main
```

## Commands Summary

Here are all the commands in order:

```bash
# 1. Initialize and setup
git init
git remote add origin https://github.com/panhapich7424/khmer-word.git

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial commit: Khmer Word Game with Firebase integration"

# 4. Push
git branch -M main
git push -u origin main
```

## After Successful Push

Once your files are on GitHub:

1. **Your repository will show all files**
2. **You can proceed with Netlify deployment**
3. **Any future changes**: just `git add .`, `git commit -m "message"`, `git push`

## File Structure on GitHub

Your repository should show:
```
khmer-word/
├── index.html
├── style.css
├── script.js
├── firebase-config.js
├── FIREBASE_SETUP.md
├── DEPLOYMENT_GUIDE.md
├── GIT_SETUP.md
├── .gitignore
└── README.md (if you create one)
```

🎉 **Once pushed, you're ready for Netlify deployment!**