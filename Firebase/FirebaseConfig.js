// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAlgKyplbX2ne-voquPIZr5Ib3uXgUdRM4",
  authDomain: "parentalcontrole-c6752.firebaseapp.com",
  projectId: "parentalcontrole-c6752",
  storageBucket: "parentalcontrole-c6752.firebasestorage.app",
  messagingSenderId: "930684317066",
  appId: "1:930684317066:web:1a17cafd26799c235bac73",
  measurementId: "G-PWTZZCBC0Z"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase }