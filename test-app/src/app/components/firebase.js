// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZllIWSTAKdBfPibs1IK0HGElrvlQOXOQ",
  authDomain: "test-app-8b023.firebaseapp.com",
  projectId: "test-app-8b023",
  storageBucket: "test-app-8b023.appspot.com",
  messagingSenderId: "101103429369",
  appId: "1:101103429369:web:8f735a676ce7d86e1d2428",
  measurementId: "G-7J8B29PQ1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);