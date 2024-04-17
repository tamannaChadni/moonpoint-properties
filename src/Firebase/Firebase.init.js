// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeibplzFNu6UuOcCWtjYq3eDMCS-BtYXA",
  authDomain: "moonpoint-properties.firebaseapp.com",
  projectId: "moonpoint-properties",
  storageBucket: "moonpoint-properties.appspot.com",
  messagingSenderId: "870782123411",
  appId: "1:870782123411:web:4d4356635f5db36d6e3c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;