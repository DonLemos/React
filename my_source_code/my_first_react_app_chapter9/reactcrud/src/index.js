import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';


const config = {
  apiKey: "AIzaSyBAS5kBMdI2rbZenXVR2dEF62kp9rpqzyg",
  authDomain: "react-app-chapter9.firebaseapp.com",
  projectId: "react-app-chapter9",
  storageBucket: "react-app-chapter9.appspot.com",
  messagingSenderId: "477801236184",
  appId: "1:477801236184:web:62ae3b8b9c8ae45d25b9ad",
  measurementId: "G-V33Q7CK9K3"
};
  firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
