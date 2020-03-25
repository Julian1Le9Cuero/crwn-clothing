// All of the reducers tha we're going to write will go into this root reducer
// the combineReducers gets all of the reducers into a single big one
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  // The key goes to the value that we want
  user: userReducer
});
