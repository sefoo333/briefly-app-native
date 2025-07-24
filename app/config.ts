import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS0Fz6XrGo40Kxji-JgwLt2bD-Sq76aQU",
  authDomain: "briefly-31e12.firebaseapp.com",
  projectId: "briefly-31e12",
  storageBucket: "briefly-31e12.firebasestorage.app",
  messagingSenderId: "1007658126596",
  appId: "1:1007658126596:web:a5672906abbb40fba49451",
  measurementId: "G-DGS6HQ7THQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export const db = getFirestore(app);

