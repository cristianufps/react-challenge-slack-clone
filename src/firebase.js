import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxeQTjcnx1hcpBChkeK3nvd15TnVmCwOo",
  authDomain: "slack-clone-reactjs-37a90.firebaseapp.com",
  projectId: "slack-clone-reactjs-37a90",
  storageBucket: "slack-clone-reactjs-37a90.appspot.com",
  messagingSenderId: "191121407804",
  appId: "1:191121407804:web:7b2a8a0a480fd4be7d2839",
  measurementId: "G-NMVWPZV286",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
