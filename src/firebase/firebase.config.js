import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdqiFH_j2AUoY2WiKvGfKj5M5dapIQ-Hs",
  authDomain: "fir-practice-ce923.firebaseapp.com",
  projectId: "fir-practice-ce923",
  storageBucket: "fir-practice-ce923.appspot.com",
  messagingSenderId: "226738205131",
  appId: "1:226738205131:web:19c6dd0fd98fd448e0c64e"
};
const app= initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;