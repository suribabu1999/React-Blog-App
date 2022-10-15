import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBHj1hc-_H1y3hHAvsdvvXJLYHqgOWDWbs",
  authDomain: "my-react-blog-a590c.firebaseapp.com",
  projectId: "my-react-blog-a590c",
  storageBucket: "my-react-blog-a590c.appspot.com",
  messagingSenderId: "498656467555",
  appId: "1:498656467555:web:66be845629a1c4e433f656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
