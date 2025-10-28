// Firebase Configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwOXjfJikfk7g8Lyx_zjhNEvIYnVMDpq0",
    authDomain: "khmer-word-game.firebaseapp.com",
    projectId: "khmer-word-game",
    storageBucket: "khmer-word-game.firebasestorage.app",
    messagingSenderId: "294478940120",
    appId: "1:294478940120:web:1c706cfd8bbaca4bd214ad",
    measurementId: "G-XN7Q91F2D2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Firestore service class
class FirestoreService {
    constructor() {
        this.collection = db.collection('leaderboard');
    }

    // Save score to Firestore
    async saveScore(scoreData) {
        try {
            const docRef = await this.collection.add({
                ...scoreData,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log('Score saved with ID: ', docRef.id);
            return docRef.id;
        } catch (error) {
            console.error('Error saving score: ', error);
            throw error;
        }
    }

    // Get top scores from Firestore
    async getTopScores(limit = 10) {
        try {
            const snapshot = await this.collection
                .orderBy('score', 'desc')
                .orderBy('timestamp', 'desc')
                .limit(limit)
                .get();
            
            const scores = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                scores.push({
                    id: doc.id,
                    ...data,
                    date: data.timestamp ? data.timestamp.toDate().toLocaleDateString('km-KH') : new Date().toLocaleDateString('km-KH')
                });
            });
            
            return scores;
        } catch (error) {
            console.error('Error getting scores: ', error);
            throw error;
        }
    }

    // Check if score qualifies for top 10
    async checkTopScore(score) {
        try {
            const snapshot = await this.collection
                .orderBy('score', 'desc')
                .limit(10)
                .get();
            
            if (snapshot.size < 10) {
                return true; // Less than 10 scores, so this qualifies
            }
            
            const scores = [];
            snapshot.forEach(doc => {
                scores.push(doc.data().score);
            });
            
            return score > Math.min(...scores);
        } catch (error) {
            console.error('Error checking top score: ', error);
            return false;
        }
    }

    // Get real-time updates for leaderboard
    onLeaderboardUpdate(callback, limit = 10) {
        return this.collection
            .orderBy('score', 'desc')
            .orderBy('timestamp', 'desc')
            .limit(limit)
            .onSnapshot(snapshot => {
                const scores = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    scores.push({
                        id: doc.id,
                        ...data,
                        date: data.timestamp ? data.timestamp.toDate().toLocaleDateString('km-KH') : new Date().toLocaleDateString('km-KH')
                    });
                });
                callback(scores);
            }, error => {
                console.error('Error in leaderboard listener: ', error);
            });
    }
}

// Export for use in main script
window.FirestoreService = FirestoreService;