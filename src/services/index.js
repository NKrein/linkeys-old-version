import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRkkAAaEHCiIuOEl7OKdJcqZtdpMQ_hUo",
  authDomain: "linkeys-31160.firebaseapp.com",
  projectId: "linkeys-31160",
  storageBucket: "linkeys-31160.appspot.com",
  messagingSenderId: "959096005859",
  appId: "1:959096005859:web:adca25ca0b44e6cfd9d1d6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
}

export const getFirestore = () => {
  return firebase.firestore(app);
}

export const getStorage = () => {
  return firebase.storage();
}

//Auth Config
export const auth = () => {
  return app.auth();
}

export const googleAuth = () => {
  return new firebase.auth.GoogleAuthProvider();
}