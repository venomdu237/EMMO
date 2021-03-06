import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyDagkUmxY8WQ5Th7zIf12QkqctyvDf6P8k",
    authDomain: "e-mobilier-web.firebaseapp.com",
    projectId: "e-mobilier-web",
    storageBucket: "e-mobilier-web.appspot.com",
    messagingSenderId: "216142006034",
    appId: "1:216142006034:web:316279ddb5307d554a95cb",
    measurementId: "G-YTYGK78T80"
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;