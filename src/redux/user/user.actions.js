import UserActionTypes from "./user.types";

// It takes one parameter: the user object
// export const setCurrentUser = (user) => {
//   // This function returns an action object
//   return {
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user,
//   };
// };

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  };
};

export const SignInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
