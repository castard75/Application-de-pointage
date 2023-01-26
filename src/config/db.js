// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getDoc, getFirestore,collection, getDocs,addDoc }from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyBVs7OLZLAV1UxRYFbvoyShivi9uQNgFFs",
    authDomain: "app-pointage-c3280.firebaseapp.com",
    projectId: "app-pointage-c3280",
    storageBucket: "app-pointage-c3280.appspot.com",
    messagingSenderId: "72240243554",
    appId: "1:72240243554:web:0e07a2443bba58e9ff823b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app)


