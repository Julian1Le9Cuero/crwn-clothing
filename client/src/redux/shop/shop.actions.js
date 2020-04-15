import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

// Actual function that we pass to the components to begin
export const fetchCollectionsStartAsync = () => {
  // It gives us back the dispach so we can do synchronous actions for the root reducer
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    // We can do this due to thunk library
    // Dispatch the normal actions (objects) to the reducer
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        // snapshot = collections
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
