// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtUjtsoSOs-7WAWhIp_aWvMXTnQxR0Cek",
  authDomain: "experiencias-d8a94.firebaseapp.com",
  projectId: "experiencias-d8a94",
  storageBucket: "experiencias-d8a94.appspot.com",
  messagingSenderId: "192844460608",
  appId: "1:192844460608:web:00f0f5260e76f65328a5a5",
  measurementId: "G-8DV1T0BJ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);