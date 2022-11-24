import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebase/firebaseConfig';

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();

export default {
    emailLogin: async (email, password) => {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password);
        return result;

    }
};