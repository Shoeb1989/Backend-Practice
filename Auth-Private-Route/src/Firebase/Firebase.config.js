// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDv2OR4fuXSLAknp9RJcjUgBWLizQ9k54",
  authDomain: "auth-route-81437.firebaseapp.com",
  projectId: "auth-route-81437",
  storageBucket: "auth-route-81437.appspot.com",
  messagingSenderId: "447504533769",
  appId: "1:447504533769:web:451bc1b85bf97585eeebd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

