import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkwp7aA3kkGluX8cRThNiXXFO56_wObTw",
  authDomain: "receiptsio.firebaseapp.com",
  projectId: "receiptsio",
  storageBucket: "receiptsio.appspot.com",
  messagingSenderId: "951733286985",
  appId: "1:951733286985:web:b07719ed6c38a00a66a798",
  measurementId: "G-7JHWW73RMT",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
