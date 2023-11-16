// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWepivEO2pdLKMFB9B8nWFVp5yohguZAo",
  authDomain: "take-my-vape.firebaseapp.com",
  projectId: "take-my-vape",
  storageBucket: "take-my-vape.appspot.com",
  messagingSenderId: "1054850528570",
  appId: "1:1054850528570:web:c1a9b9927ab73335f64c03",
  measurementId: "G-Q1T6L75B2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
