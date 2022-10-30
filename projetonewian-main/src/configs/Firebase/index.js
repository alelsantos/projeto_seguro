import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use

//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8FvOgGuJEoKjQLjZK30bLLL8EsX0u6G8",
  authDomain: "newian.firebaseapp.com",
  databaseURL: "https://newian-default-rtdb.firebaseio.com",
  projectId: "newian",
  storageBucket: "newian.appspot.com",
  messagingSenderId: "549052429300",
  appId: "1:549052429300:web:d07c1926933a72643dffa1",
  measurementId: "G-2GDH2N2B5E",
};

export const FirebaseApp = initializeApp(firebaseConfig);


