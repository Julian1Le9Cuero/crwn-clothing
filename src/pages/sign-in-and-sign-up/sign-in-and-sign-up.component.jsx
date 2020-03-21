import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in-and-sign-up.styles.scss";

// Functional Component because we will keep he statte in the sign in and sign up respectively
const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;
