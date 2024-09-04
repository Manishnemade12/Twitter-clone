// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "saga-app-78b87.firebaseapp.com",
  projectId: "saga-app-78b87",
  storageBucket: "saga-app-78b87.appspot.com",
  messagingSenderId: "337684643304",
  appId: "1:337684643304:web:75a7ccaf4326b0ecdfb85d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

