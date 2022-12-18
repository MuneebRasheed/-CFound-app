import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBKkFvUA8h5oLQEXHq1zge6OgitbnjW-4I",
    authDomain: "squadhelp-e7274.firebaseapp.com",
    projectId: "squadhelp-e7274",
    storageBucket: "squadhelp-e7274.appspot.com",
    messagingSenderId: "453080491870",
    appId: "1:453080491870:web:58d856ffe691b7d30c51cf",
    measurementId: "G-41RQC3CSHM"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}
export const db = app.firestore();
export const auth = firebase.auth();