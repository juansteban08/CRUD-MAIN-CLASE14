// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoroYaxPVhYau8RsXnOh2-NEaqzEhRWVw",
  authDomain: "crud-main-126dc.firebaseapp.com",
  projectId: "crud-main-126dc",
  storageBucket: "crud-main-126dc.firebasestorage.app",
  messagingSenderId: "291284666476",
  appId: "1:291284666476:web:ed9c29f20351c2bb027049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
