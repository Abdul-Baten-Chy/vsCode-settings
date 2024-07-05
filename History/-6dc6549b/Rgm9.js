import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZmASjWDmHbWaMW6IsLxm_JlfXYYdk5Ac",
  authDomain: "clientside-10.firebaseapp.com",
  projectId: "clientside-10",
  storageBucket: "clientside-10.appspot.com",
  messagingSenderId: "958342346084",
  appId: "1:958342346084:web:9b1139dde8a5677e17b671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const const auth = getAuth();