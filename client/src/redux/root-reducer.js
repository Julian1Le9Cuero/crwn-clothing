// All of the reducers tha we're going to write will go into this root reducer
// the combineReducers gets all of the reducers into a single big one
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// Get the local storage objec from the window object in the browser
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  // The key goes to the value that we want
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
