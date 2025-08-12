// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYy7MeULL3itYY_YoBAD3NGZe2qAkxvxM",
  authDomain: "netflixgpt-daa19.firebaseapp.com",
  projectId: "netflixgpt-daa19",
  storageBucket: "netflixgpt-daa19.firebasestorage.app",
  messagingSenderId: "955447643369",
  appId: "1:955447643369:web:26c3072175ddc2def6b478",
  measurementId: "G-V7Y3F1TCBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();