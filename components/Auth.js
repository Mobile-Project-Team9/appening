import {Alert} from 'react-native';
import { createUserWithEmailAndPassword,
signInWithEmailAndPassword, signOut } from 'firebase/auth';

import {doc, setDoc} from 'firebase/firestore';
import { auth, db, USERS_REF} from '../firebase/Confing';



export const signUp = async(nickname, email, password) =>{
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setDoc(doc(db, USERS_REF, userCredential.user.uid), {
            nickname: nickname,
            email: userCredential.user.email
        })



    })
    .catch((error) => {
        console.log("Registration failed." + error.message);
        Alert.alert("Registration failed." + error.message);

    })
}