import { UserActionTypes } from "./user.types";
/* Because Redux does not know that we have any state when the app version initializes.
We have to create an initial state before declaring the function,
it is an object that represents the initial state of the specific reducer.*/
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
