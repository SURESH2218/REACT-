import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQf5gHdp-UvEhOARKPthKdetsci5W-jK8",
  authDomain: "clone-7b266.firebaseapp.com",
  projectId: "clone-7b266",
  storageBucket: "clone-7b266.appspot.com",
  messagingSenderId: "245606978217",
  appId: "1:245606978217:web:813f709b25d878e9188fb8",
  measurementId: "G-Q7HRJKW250",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
