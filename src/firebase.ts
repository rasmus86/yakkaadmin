import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_--ZNVp7jNQ5XETn0pYE-4grI6sEVjQY",
    authDomain: "yakkalabour.firebaseapp.com",
    databaseURL: "https://yakkalabour-default-rtdb.firebaseio.com",
    projectId: "yakkalabour",
    storageBucket: "yakkalabour.appspot.com",
    messagingSenderId: "451261449059",
    appId: "1:451261449059:web:d3fc8566f2f127e9b10956",
    measurementId: "G-HF1HJ5FMK8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
