// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import{initializeAuth, getReactNativePersistence} from 'firebase/auth';



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
export {auth};
export const db = getFirestore(app);
export const USERS_REF = 'users';
export const TODOS_REF = 'todos'; 