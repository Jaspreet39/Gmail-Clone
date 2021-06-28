import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBgErR04ri1AM30aamRq71RnSvXBS3O-84",
  authDomain: "clone-11fe4.firebaseapp.com",
  projectId: "clone-11fe4",
  storageBucket: "clone-11fe4.appspot.com",
  messagingSenderId: "860445654898",
  appId: "1:860445654898:web:4adb5f054212def40ce7eb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider} 