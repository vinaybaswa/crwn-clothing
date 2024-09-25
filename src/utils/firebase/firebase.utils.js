import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, singnInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATfJWYXmj_RB685-6OnU3AARF9bCqCHC4",
  authDomain: "crwn-db-dd646.firebaseapp.com",
  projectId: "crwn-db-dd646",
  storageBucket: "crwn-db-dd646.appspot.com",
  messagingSenderId: "106576457838",
  appId: "1:106576457838:web:993f3711b923bad576b67f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const singnInWithGooglePopup = () => singnInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const useSnapshot = await getDoc(userDocRef);

  if(!useSnapshot.exists()) {
    const { displayname, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc (userDocRef, {
        displayname,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}