// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";



// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDevFPIL7qmGIEFzPJTcYPa8S1ycu4Tyy8",
    authDomain: "chat-app-project-32f98.firebaseapp.com",
    projectId: "chat-app-project-32f98",
    storageBucket: "chat-app-project-32f98.firebasestorage.app",
    messagingSenderId: "173676447444",
    appId: "1:173676447444:web:a61e768ff043cffe731d41",
    measurementId: "G-H13K036864"
  };
  
//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export Firebase utilities for use in other files
export { auth, provider, db, signInWithPopup, signOut, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp }; // Include serverTimestamp in export