// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-89b5e.firebaseapp.com",
  projectId: "mern-blog-89b5e",
  storageBucket: "mern-blog-89b5e.appspot.com",
  messagingSenderId: "78004533369",
  appId: "1:78004533369:web:1e16fbdac81152a623bca8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

