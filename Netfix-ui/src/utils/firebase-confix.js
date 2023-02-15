// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBYwcghi1ICK9GkthzsQ6Umkd4Ot62y9PE",
    authDomain: "netflix-clone-58848.firebaseapp.com",
    projectId: "netflix-clone-58848",
    storageBucket: "netflix-clone-58848.appspot.com",
    messagingSenderId: "861333428885",
    appId: "1:861333428885:web:ba22c545aa6c03e84c599c",
    measurementId: "G-54BPQWSXXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)
