// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7al36pSibzJko9ATANnj1RdxEcxxy14A",
  authDomain: "contest-f0256.firebaseapp.com",
  projectId: "contest-f0256",
  storageBucket: "contest-f0256.appspot.com",
  messagingSenderId: "346237614691",
  appId: "1:346237614691:web:2a4f9976a1335c96cb9656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;