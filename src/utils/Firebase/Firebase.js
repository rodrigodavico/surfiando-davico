import firebase from 'firebase/app'
import '@firebase/firestore'

const server = firebase.initializeApp({
    apiKey: "AIzaSyDb_9N4in8kybKpH-BbEkSALQ_Xe9_e6cg",
    authDomain: "surfiando-davico-db.firebaseapp.com",
    projectId: "surfiando-davico-db",
    storageBucket: "surfiando-davico-db.appspot.com",
    messagingSenderId: "906827737789",
    appId: "1:906827737789:web:e0d5e74602163b475c25d4"
})

export function getFirebase() {
    return server
}

export function getFirestore() {
    return firebase.firestore(server)
}