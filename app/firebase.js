// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQJc3WLvSONhQmMCuB_-24xQZI3KY27k4",
    authDomain: "job-search-app-1cc6a.firebaseapp.com",
    projectId: "job-search-app-1cc6a",
    storageBucket: "job-search-app-1cc6a.appspot.com",
    messagingSenderId: "711293499214",
    appId: "1:711293499214:web:378fb0ce1e8300d732d01f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
export { auth };
