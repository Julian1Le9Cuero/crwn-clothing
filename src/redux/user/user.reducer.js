/* Because Redux does not know that we have any state when the app version initializes.
We have to create an initial state before declaring the function,
it is an object that represents the initial state of the specific reducer.*/
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
