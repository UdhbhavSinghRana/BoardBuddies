// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPy1UU3yZHr8nG9jC_8c93TKF0qeVVr9s",
  authDomain: "boardbuddies-9ca4f.firebaseapp.com",
  databaseURL: "https://boardbuddies-9ca4f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "boardbuddies-9ca4f",
  storageBucket: "boardbuddies-9ca4f.appspot.com",
  messagingSenderId: "630758909707",
  appId: "1:630758909707:web:bb80bf8d2d4822ea66a40e",
  measurementId: "G-ZNBJY2XS5E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;