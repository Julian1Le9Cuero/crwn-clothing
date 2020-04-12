/* Add middleware to the store because whenever actions get fired/dispatched
we can catch them and then display them.
*/
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
// import thunk from "redux-thunk"; We dont need it because of sagas
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";

import rootReducer from "./root-reducer";
// The middleware that the store expects will be an array
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
// This returns the store object
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* After applyMiddleware is called we will run and add in the individual sagas
that we're going to write*/

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
