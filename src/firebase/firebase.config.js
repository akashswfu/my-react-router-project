// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1QhfOx-6gEwtvsgJPHmioDiEfNmOuOWw",
  authDomain: "book-store-firebase-auth.firebaseapp.com",
  projectId: "book-store-firebase-auth",
  storageBucket: "book-store-firebase-auth.appspot.com",
  messagingSenderId: "774952731678",
  appId: "1:774952731678:web:0cdba04fc250d1bd7a1a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;