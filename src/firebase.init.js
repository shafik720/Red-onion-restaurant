// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd4ZGhpDZc4rekgdv2wC38hMq0fKCu2Kw",
  authDomain: "red-onion-restaurant-3cd01.firebaseapp.com",
  projectId: "red-onion-restaurant-3cd01",
  storageBucket: "red-onion-restaurant-3cd01.appspot.com",
  messagingSenderId: "514593790168",
  appId: "1:514593790168:web:91fe7be7e956d10454dfad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;