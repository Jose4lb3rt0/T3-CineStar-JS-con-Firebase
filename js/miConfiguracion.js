import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNHSGGKnkbZwx_VmEcLMsQUXZ7un6GDPI",
    authDomain: "cinestar-firebase-5d222.firebaseapp.com",
    databaseURL: "https://cinestar-firebase-5d222-default-rtdb.firebaseio.com",
    projectId: "cinestar-firebase-5d222",
    storageBucket: "cinestar-firebase-5d222.appspot.com",
    messagingSenderId: "26658824738",
    appId: "1:26658824738:web:11bedae2674da7d218e07b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

