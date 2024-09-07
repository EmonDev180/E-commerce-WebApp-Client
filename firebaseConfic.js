// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4RUhioHnrUL5FJEeAjROqqocsPcoNOp0",
  authDomain: "e-commerce-webapp-7daf8.firebaseapp.com",
  projectId: "e-commerce-webapp-7daf8",
  storageBucket: "e-commerce-webapp-7daf8.appspot.com",
  messagingSenderId: "432243146086",
  appId: "1:432243146086:web:3b679a341f5ffd11f99ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;