import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADOQJ37P55DtZGtOwdIfyGVdc1OrVtKjE",
  authDomain: "drive-clone-2036c.firebaseapp.com",
  projectId: "drive-clone-2036c",
  storageBucket: "drive-clone-2036c.appspot.com",
  messagingSenderId: "848760242590",
  appId: "1:848760242590:web:a1c64e527e9719f366168f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, provider, storage, db };
