import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCFji8ba079hRa-Y8FeQi_eiLhCtAc44ck",
  authDomain: "crwn-db-d978a.firebaseapp.com",
  projectId: "crwn-db-d978a",
  storageBucket: "crwn-db-d978a.appspot.com",
  messagingSenderId: "376727814205",
  appId: "1:376727814205:web:6aeb5666476df2799bea54",
  measurementId: "G-BCVH9NDY4N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;