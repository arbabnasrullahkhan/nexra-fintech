// assets/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getFirestore, doc, getDoc, setDoc, updateDoc, collection, 
    query, where, onSnapshot, getDocs, addDoc, serverTimestamp, 
    deleteDoc, increment, arrayUnion, arrayRemove, orderBy, limit 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { 
    getAuth, onAuthStateChanged, signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, deleteUser 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6-plrT8KdXgb_RUjpbYm-8awMgjewFAE",
    authDomain: "nexra-82bb8.firebaseapp.com",
    projectId: "nexra-82bb8",
    storageBucket: "nexra-82bb8.firebasestorage.app",
    messagingSenderId: "1034104540482",
    appId: "1:1034104540482:web:a0a22621f0d927eeb7ccdb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Exporting all necessary tools to be used across all pages
export { 
    auth, db, doc, getDoc, setDoc, updateDoc, collection, query, 
    where, onSnapshot, getDocs, addDoc, serverTimestamp, 
    deleteDoc, increment, arrayUnion, arrayRemove, orderBy, limit,
    onAuthStateChanged, signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, deleteUser
};