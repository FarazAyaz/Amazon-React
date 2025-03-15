// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE7F-NTg2TWtNzKakY9latlwfdst5CYIg",
  authDomain: "fir-416cf.firebaseapp.com",
  projectId: "fir-416cf",
  storageBucket: "fir-416cf.firebasestorage.app",
  messagingSenderId: "156649908904",
  appId: "1:156649908904:web:6c6f60cae5fb6934c4b09d",
  measurementId: "G-G0KLR9GZJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);