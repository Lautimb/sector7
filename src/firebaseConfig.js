import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgFriYzN9L8ftrz5BjNRF-OL6cha2IGm4",
    authDomain: "sector-7-3a7d9.firebaseapp.com",
    projectId: "sector-7-3a7d9",
    storageBucket: "sector-7-3a7d9.appspot.com",
    messagingSenderId: "190091563101",
    appId: "1:190091563101:web:afa2411a3c38e332eabdb4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
