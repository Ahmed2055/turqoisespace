// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR6GGlTpWVQFjFcik7GTWaIdibkORpqvg",
  authDomain: "turqoisespace.firebaseapp.com",
  projectId: "turqoisespace",
  storageBucket: "turqoisespace.appspot.com",
  messagingSenderId: "1073486416269",
  appId: "1:1073486416269:web:027468a13f8e72894195c4",
  measurementId: "G-2GJN2D6JTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);