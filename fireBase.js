import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNCuXEn5todyFVWl6CLJaNridOkTxLi1o",
    authDomain: "fbclone-b8dca.firebaseapp.com",
    projectId: "fbclone-b8dca",
    storageBucket: "fbclone-b8dca.appspot.com",
    messagingSenderId: "366781998977",
    appId: "1:366781998977:web:84791acf7d270c5fdbaa80"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = !fireBase.apps.length ? fireBase.initializeApp(firebaseConfig) : fireBase.app;

const db = app.firestore();

const storage = fireBase.storage();

export {db, storage}