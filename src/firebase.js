
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcyXXcg-8rh4C_wVLs1Ze6GCQ9eAhIg8s",
  authDomain: "react-portfolio-one.firebaseapp.com",
  projectId: "react-portfolio-one",
  storageBucket: "react-portfolio-one.appspot.com",
  messagingSenderId: "971041502423",
  appId: "1:971041502423:web:d948123d9d8874df62ec92"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);