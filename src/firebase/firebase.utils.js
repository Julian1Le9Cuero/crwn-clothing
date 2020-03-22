import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2EErk3L3Bf3L3pc3PgY3ojn7Gouf3BoQ",
  authDomain: "crwn-db-2ad1d.firebaseapp.com",
  databaseURL: "https://crwn-db-2ad1d.firebaseio.com",
  projectId: "crwn-db-2ad1d",
  storageBucket: "crwn-db-2ad1d.appspot.com",
  messagingSenderId: "658481636483",
  appId: "1:658481636483:web:526540a6a27c89ca0367b6"
};

// This will be asynchronous because we're making an API request
// Pass the logged in user (userAuth) and any additional daa that we may need
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the userAuth object does not exist, exit the funcion using return
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // If it already exists query the firestore for the document
  // If snapshot does not exists then create a piece of data there
  if (!snapShot.exists) {
    // 1. What are the properties that we want to store
    const { displayName, email } = userAuth;
    // 2. Know inside the db when we made the document
    const createdAt = new Date();
    // 3. Use try/catch because this is async and we may get a rejection
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }

  return userRef; //We may use this document reference to do othe things
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// Always trigger the google pop up whenever we use the google auth provider for auth and sign in
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
// in case we need the whole library
export default firebase;
