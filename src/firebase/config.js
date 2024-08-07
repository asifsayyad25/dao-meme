// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjV7e8QSCAhTBd8qP0AR1eJO8NxZFbCKs",
  authDomain: "merlin-elixir.firebaseapp.com",
  projectId: "merlin-elixir",
  storageBucket: "merlin-elixir.appspot.com",
  messagingSenderId: "188817171192",
  appId: "1:188817171192:web:0048f480ab422d8d98910d",
  measurementId: "G-4L7G6SC83Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };