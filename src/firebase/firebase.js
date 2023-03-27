// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDepN2xsCOChuedxXGsCIi0-y1AaUSpZHI",
  authDomain: "reservation-ae7ac.firebaseapp.com",
  projectId: "reservation-ae7ac",
  storageBucket: "reservation-ae7ac.appspot.com",
  messagingSenderId: "728470795577",
  appId: "1:728470795577:web:c1d7bfa39f17df9c6724e8",
  measurementId: "G-EX1044DNE0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);