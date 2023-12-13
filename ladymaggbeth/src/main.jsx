import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// firebase configuration
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVPQHac2apZzcNabK7MwMLfFXAmP2pzFQ",
  authDomain: "ladymaggbeth-a003a.firebaseapp.com",
  projectId: "ladymaggbeth-a003a",
  storageBucket: "ladymaggbeth-a003a.appspot.com",
  messagingSenderId: "1073846918853",
  appId: "1:1073846918853:web:6e7eff5209afb078239aac"
};
 initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
