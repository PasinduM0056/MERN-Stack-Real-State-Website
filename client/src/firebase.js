// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e276b.firebaseapp.com",
  projectId: "mern-estate-e276b",
  storageBucket: "mern-estate-e276b.appspot.com",
  messagingSenderId: "569211501184",
  appId: "1:569211501184:web:07c573364c636d11d50465"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
