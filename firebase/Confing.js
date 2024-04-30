// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth"; // This line is commented out and not necessary for the corrected version
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNV0vmQhqCaJJVxbQ_IZ-NK7tbntE1URA",
  authDomain: "appening-12d35.firebaseapp.com",
  projectId: "appening-12d35",
  storageBucket: "appening-12d35.appspot.com",
  messagingSenderId: "1076956866942",
  appId: "1:1076956866942:web:2e7bb2c987cea716096b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

export const db = getFirestore(app);

export const USERS_REF ='users';
export const TODOS_REF = 'todos';
