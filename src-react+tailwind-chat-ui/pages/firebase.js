import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCchSN-MKvqNOwgnDwrgTme3ug6MdtlkVs",
  authDomain: "chat-application-suresh-2785.firebaseapp.com",
  projectId: "chat-application-suresh-2785",
  storageBucket: "chat-application-suresh-2785.appspot.com",
  messagingSenderId: "1082755087523",
  appId: "1:1082755087523:web:6f47caf823606244cbd316",
  measurementId: "G-YLFWWJJ85F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
