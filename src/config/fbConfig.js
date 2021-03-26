import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzSVNKLv3uzJFTndHl7_35rBFmME5rdRk",
  authDomain: "kitashare-1653e.firebaseapp.com",
  databaseURL: "https://kitashare-1653e-default-rtdb.firebaseio.com",
  projectId: "kitashare-1653e",
  storageBucket: "kitashare-1653e.appspot.com",
  messagingSenderId: "619398397215",
  appId: "1:619398397215:web:c6aa6ff09dc83105fac42a",
  measurementId: "G-BKH2C90ZW1"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase;