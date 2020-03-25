/* Add middleware to the store because whenever actions get fired/dispatched
we can catch them and then display them.
*/
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import rootReducer from "./root-reducer";

// The middleware that the store expects will be an array

const middleware = [logger];

// This returns the store object
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
