import { initializeApp } from '@firebase/app';
import firebase from 'firebase/compat/app';
import storage from 'firebase/compat/storage'
import firestore from 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNCuXEn5todyFVWl6CLJaNridOkTxLi1o",
    authDomain: "fbclone-b8dca.firebaseapp.com",
    projectId: "fbclone-b8dca",
    storageBucket: "fbclone-b8dca.appspot.com",
    messagingSenderId: "366781998977",
    appId: "1:366781998977:web:84791acf7d270c5fdbaa80"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export {db, storage};