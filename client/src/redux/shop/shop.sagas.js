// Holds the saga code related to the shop component
// Effects library that will be used to compose the saga code
import { takeEvery, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";
// Import the specific action types from our actions file
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
// Write first base saga
/*This will pause whenever a specific action type comes */
export function* fetchCollectionsStart() {
  // The first parameter of takeEvery if the action type
  /* The second parameter is another generator function tha will run the response to the takeEveryListener
    this is how we're able to run MORE CODE depending on the action type*/
  // takeEvery does not pause the JS code waiting for anyhing inside the fetchCollectionsAsync to come back with something
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
