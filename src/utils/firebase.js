// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXypt2vln8Rmk638HVfLAngn2Asgto8fA",
  authDomain: "netflixgpt-49997.firebaseapp.com",
  projectId: "netflixgpt-49997",
  storageBucket: "netflixgpt-49997.firebasestorage.app",
  messagingSenderId: "921812441972",
  appId: "1:921812441972:web:9f9c59ecfd86764feb6a21",
  measurementId: "G-N33PVCWS6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
