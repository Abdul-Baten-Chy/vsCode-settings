// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6h54z91-981B0uXysKPYXxxDeGcKkTVI",
  authDomain: "task-management-21b55.firebaseapp.com",
  projectId: "task-management-21b55",
  storageBucket: "task-management-21b55.appspot.com",
  messagingSenderId: "163396447265",
  appId: "1:163396447265:web:ebc25458d55c2a9396c760",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
