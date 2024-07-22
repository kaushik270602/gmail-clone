import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJfFkcIOJSS0O98SWWg8twOQWTjpZct0Q",
    authDomain: "clone-yt-4c7bb.firebaseapp.com",
    projectId: "clone-yt-4c7bb",
    storageBucket: "clone-yt-4c7bb.appspot.com",
    messagingSenderId: "457267926118",
    appId: "1:457267926118:web:bcaa8cfcbdca6845be49a7",
    measurementId: "G-KS402V4PPQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
  export default firebase;