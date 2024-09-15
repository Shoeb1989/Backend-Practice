// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_9J9xlFp07TwkZQ3BpQwpOMq6CvmYWIM",
  authDomain: "user-email-password-auth-5592a.firebaseapp.com",
  projectId: "user-email-password-auth-5592a",
  storageBucket: "user-email-password-auth-5592a.appspot.com",
  messagingSenderId: "559131841554",
  appId: "1:559131841554:web:351447620dcdb5c80774cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;
