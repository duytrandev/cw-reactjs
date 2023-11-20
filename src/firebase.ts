import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBpFDVhwmsSbD9wf6d0TTwTVhlgoilCslI",
  authDomain: "reactjs-crud-8f45e.firebaseapp.com",
  databaseURL: "https://reactjs-crud-8f45e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactjs-crud-8f45e",
  storageBucket: "reactjs-crud-8f45e.appspot.com",
  messagingSenderId: "626080891079",
  appId: "1:626080891079:web:607d13a1e1306c524bfee2",
  measurementId: "G-LWSPRXG7KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database