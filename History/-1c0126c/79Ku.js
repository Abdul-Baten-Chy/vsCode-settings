import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4IWoIQ65orFgy5onkTHomaAjecCaBtcw",
  authDomain: "shrafood.firebaseapp.com",
  projectId: "shrafood",
  storageBucket: "shrafood.appspot.com",
  messagingSenderId: "307315312140",
  appId: "1:307315312140:web:1185548e363123d4bc5029",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
