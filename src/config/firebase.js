// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKtYxfOp0uVWAwTVAccET08OHGNxWzEvo",
  authDomain: "auth1-a7da9.firebaseapp.com",
  projectId: "auth1-a7da9",
  storageBucket: "auth1-a7da9.appspot.com",
  messagingSenderId: "804695172955",
  appId: "1:804695172955:web:097b461a194198d8271c7e",
  measurementId: "G-E4VBD7T0CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleprovider = new GoogleAuthProvider()
export const db = getFirestore(app)
