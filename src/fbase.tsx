// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOT-MGJ_neR1NmviGEoaSOR9ZT_fRwvNk",
    authDomain: "web-portfolio-deac9.firebaseapp.com",
    projectId: "web-portfolio-deac9",
    storageBucket: "web-portfolio-deac9.appspot.com",
    messagingSenderId: "154323550477",
    appId: "1:154323550477:web:64959fea2e2a1c2b4e7044",
    measurementId: "G-YWETMS0BRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);