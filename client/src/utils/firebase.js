import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-3c20a.firebaseapp.com",
  projectId: "examnotesai-3c20a",
  storageBucket: "examnotesai-3c20a.firebasestorage.app",
  messagingSenderId: "174720899368",
  appId: "1:174720899368:web:63e232d090458485f4d81d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}