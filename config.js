//firebase config key setup
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, } from "@env"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getDatabase, initializeApp  } from "firebase/database"


// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

export default {
    apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId
}

//Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
const auth = firebase.auth();
const fire = firebase.firestore();


export { db };
export { firebase };
export { auth };
export { fire };