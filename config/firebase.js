// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: "imtanan-javed",
  storageBucket: "imtanan-javed.appspot.com",
  messagingSenderId: "30978373276",
  appId: "1:30978373276:web:bca0aa852d2bea115b9f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);