// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmzcjhOCHMIlhd53Ah5VYBygR6dvxd5JA",
  authDomain: "expense-tracker-b36ff.firebaseapp.com",
  projectId: "expense-tracker-b36ff",
  storageBucket: "expense-tracker-b36ff.appspot.com",
  messagingSenderId: "830878023771",
  appId: "1:830878023771:web:0dfe3c7db2877370303f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);