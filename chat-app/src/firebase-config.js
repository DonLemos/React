import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDevFPIL7qmGIEFzPJTcYPa8S1ycu4Tyy8",
    authDomain: "chat-app-project-32f98.firebaseapp.com",
    projectId: "chat-app-project-32f98",
    storageBucket: "chat-app-project-32f98.appspot.com",
    messagingSenderId: "173676447444",
    appId: "1:173676447444:web:a61e768ff043cffe731d41",
    measurementId: "G-H13K036864"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);
  
  export { auth, provider, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };