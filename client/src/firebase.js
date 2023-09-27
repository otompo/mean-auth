// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mean-auth-f3aba.firebaseapp.com",
  projectId: "mean-auth-f3aba",
  storageBucket: "mean-auth-f3aba.appspot.com",
  messagingSenderId: "571361861984",
  appId: "1:571361861984:web:fe4f547328db6db0927e05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
