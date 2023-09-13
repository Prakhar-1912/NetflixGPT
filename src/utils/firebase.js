// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChRHloJm1KZ2uNElVX1i5TG6w6x5MRaxA",
  authDomain: "netflixgpt-4ed41.firebaseapp.com",
  projectId: "netflixgpt-4ed41",
  storageBucket: "netflixgpt-4ed41.appspot.com",
  messagingSenderId: "854616807454",
  appId: "1:854616807454:web:ccf95e684b47444f31f60f",
  measurementId: "G-L9BL613YP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
