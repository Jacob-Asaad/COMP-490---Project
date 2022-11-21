//firebase config key setup
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from "@env"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

export default {
    apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId
}

//Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };