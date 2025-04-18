// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1T78oVz0eaNScBL4os8Xfm2JhAJ7JYoM",
  authDomain: "liars-9b7ed.firebaseapp.com",
  databaseURL: "https://liars-9b7ed-default-rtdb.firebaseio.com",
  projectId: "liars-9b7ed",
  storageBucket: "liars-9b7ed.firebasestorage.app",
  messagingSenderId: "454212376137",
  appId: "1:454212376137:web:36efea0bf23eedac2d9198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };