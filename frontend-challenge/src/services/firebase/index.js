// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc5ct5St7BANFLsy1FhxtEOYEtHOcdurg",
  authDomain: "challengebackend-c7b9c.firebaseapp.com",
  projectId: "challengebackend-c7b9c",
  storageBucket: "challengebackend-c7b9c.appspot.com",
  messagingSenderId: "236366762962",
  appId: "1:236366762962:web:884662322348d29112ee0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)