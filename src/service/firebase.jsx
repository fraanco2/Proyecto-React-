// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdVqmLd1hDVC36J7ehiYNoZ3BVirdk1Tw",
  authDomain: "proyecto-react-ac853.firebaseapp.com",
  projectId: "proyecto-react-ac853",
  storageBucket: "proyecto-react-ac853.firebasestorage.app",
  messagingSenderId: "559473917558",
  appId: "1:559473917558:web:242066b52f6a98f321a957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)