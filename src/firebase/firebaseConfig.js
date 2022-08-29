import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'
import{getFirestore} from 'firebase/firestore'
import { FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDSX3Z6HVPBHHCB_HQzQusgtXhbxAeW_44",
  authDomain: "reto-github.firebaseapp.com",
  projectId: "reto-github",
  storageBucket: "reto-github.appspot.com",
  messagingSenderId: "925468368132",
  appId: "1:925468368132:web:29a77e3aaa994436438451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const face = new FacebookAuthProvider();
export const bd=getFirestore()
 export default app