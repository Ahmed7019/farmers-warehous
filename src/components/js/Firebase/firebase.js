// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAkWG0hVG8eQ0MdHvM7r15kWYdpsp7Skiw",
  authDomain: "farmers-warehouse-ad080.firebaseapp.com",
  projectId: "farmers-warehouse-ad080",
  storageBucket: "farmers-warehouse-ad080.firebasestorage.app",
  messagingSenderId: "624391483036",
  appId: "1:624391483036:web:cab86303ae726667ef4759",
  measurementId: "G-S82WR3LEJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
