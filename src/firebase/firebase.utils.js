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
