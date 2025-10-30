# 🎮 Khmer Word Game - ល្បែងផ្គូផ្គងពាក្យខ្មែរ

A beautiful, interactive Khmer word matching game with progressive difficulty and cloud leaderboard.

## 🌟 Features

- **Progressive Difficulty**: 1000+ Khmer words from easy to very hard
- **Smart Timer System**: 10s base time, +5s every 10 rounds
- **Cloud Leaderboard**: Real-time Firebase integration
- **Beautiful UI**: Traditional Khmer Angkor-inspired design
- **Mobile Friendly**: Responsive design for all devices
- **Real-time Updates**: Live leaderboard updates

## 🎯 How to Play

1. **Choose difficulty** by playing - words get harder automatically
2. **Click pieces** to swap their positions
3. **Arrange correctly** to form the target word
4. **Beat the timer** to earn points + time bonus
5. **Submit your name** for the leaderboard
6. **Compete globally** with other players

## 🚀 Live Demo

**Play Now**: [https://khmer-word-game.onrender.com](https://khmer-word-game.onrender.com)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Database**: Firebase Firestore
- **Hosting**: Render.com
- **Version Control**: GitHub
- **Fonts**: Noto Sans Khmer

## 📱 Game Modes

### Difficulty Progression:
- **Rounds 1-200**: Easy words (2-3 syllables)
- **Rounds 201-400**: Medium words (3-4 syllables)  
- **Rounds 401-700**: Hard words (4-5 syllables)
- **Rounds 701+**: Very hard words (5+ syllables)

### Timer System:
- **Base Time**: 10 seconds
- **Bonus Time**: +5 seconds every 10 rounds
- **Time Bonus**: Remaining time added to score

## 🏆 Scoring System

- **Base Points**: 10-30 points per word (based on difficulty)
- **Time Bonus**: +1 point per remaining second
- **Hint Penalty**: -10, -20, -30 points per hint used
- **Leaderboard**: Top 10 global high scores

## 🔧 Local Development

### Prerequisites:
- Modern web browser
- Firebase account (for leaderboard)
- Git

### Setup:
```bash
# Clone repository
git clone https://github.com/panhapich7424/khmer-word.git
cd khmer-word

# Open in browser
open index.html
# or
python -m http.server 8000  # For local server
```

### Firebase Setup:
1. Create Firebase project
2. Enable Firestore Database
3. Update `firebase-config.js` with your config
4. Set Firestore security rules

See `FIREBASE_SETUP.md` for detailed instructions.

## 📦 Deployment

### Deploy to Render.com:
1. Fork this repository
2. Connect to Render.com
3. Deploy as static site
4. Configure Firebase

See `RENDER_DEPLOYMENT.md` for step-by-step guide.

### Deploy to Netlify:
See `DEPLOYMENT_GUIDE.md` for Netlify instructions.

## 🎨 Design Features

- **Traditional Khmer Colors**: Gold, brown, temple-inspired palette
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Smooth Animations**: CSS transitions and hover effects
- **Accessibility**: Proper contrast and font sizing
- **Clean Typography**: Noto Sans Khmer for proper rendering

## 🔍 File Structure

```
khmer-word/
├── index.html              # Main game page
├── style.css               # Game styling
├── script.js               # Game logic
├── firebase-config.js      # Firebase configuration
├── render.yaml            # Render deployment config
├── debug.html             # Firebase debug panel
├── README.md              # This file
├── FIREBASE_SETUP.md      # Firebase setup guide
├── RENDER_DEPLOYMENT.md   # Render deployment guide
├── DEPLOYMENT_GUIDE.md    # Netlify deployment guide
├── GIT_SETUP.md          # Git setup instructions
├── TROUBLESHOOTING.md    # Debug guide
└── FIREBASE_TEST.md      # Firebase testing guide
```

## 🐛 Troubleshooting

### Common Issues:
- **Leaderboard not loading**: Check Firebase configuration
- **Scores not saving**: Verify Firestore security rules
- **Game not responsive**: Clear browser cache

See `TROUBLESHOOTING.md` for detailed solutions.

### Debug Tools:
- Open `debug.html` for Firebase testing
- Use browser console for error messages
- Check Firebase Console for data verification

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Khmer Language**: Traditional Khmer words and culture
- **Firebase**: Cloud database and real-time updates
- **Render.com**: Free hosting platform
- **Noto Fonts**: Proper Khmer typography support

## 📞 Contact

- **GitHub**: [@panhapich7424](https://github.com/panhapich7424)
- **Repository**: [khmer-word](https://github.com/panhapich7424/khmer-word)
- **Live Game**: [Play Now](https://khmer-word-game.onrender.com)

---

**Made with ❤️ for the Khmer community**

*Preserving and celebrating Khmer language through interactive gaming*