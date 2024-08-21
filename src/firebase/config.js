// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEEZyaGdJVSEdhfvRWxXsCL07KpCj2_iE",
  authDomain: "message-app-goat.firebaseapp.com",
  databaseURL: "https://message-app-goat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "message-app-goat",
  storageBucket: "message-app-goat.appspot.com",
  messagingSenderId: "623668186804",
  appId: "1:623668186804:web:4da25cd1d9df2bd63a11e1",
  measurementId: "G-4EXCDF0XT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// config emulator
connectAuthEmulator(auth, 'http://127.0.0.1:9099');
if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

export { auth, db };
