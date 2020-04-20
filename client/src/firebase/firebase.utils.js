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
  appId: "1:658481636483:web:526540a6a27c89ca0367b6",
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
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }

  return userRef; //We may use this document reference to do othe things
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      //  Pass the title because it is the same string in the routing
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    // Return acc so that it goes to the next iteration in the reduce
    return accumulator;
  }, {});
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc(); //We want the key to be unique, so we just let firestore to do that, it's not necessary to pass object.title as a parameter
    batch.set(newDocRef, object); // Pass the document reference and the value we ant to set it to
  });
  // Fire of the batch reference, this returns a promise
  return await batch.commit();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// Always trigger the google pop up whenever we use the google auth provider for auth and sign in
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
// in case we need the whole library
export default firebase;
