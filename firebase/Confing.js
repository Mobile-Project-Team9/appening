// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByQJC4fUyElbnmBCTRuqYter3qKFlcUxY",
  authDomain: "meaning-b74d4.firebaseapp.com",
  projectId: "meaning-b74d4",
  storageBucket: "meaning-b74d4.appspot.com",
  messagingSenderId: "697655711876",
  appId: "1:697655711876:web:47d0e47e1429be1361cad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const TODOS_REF =  'todos';