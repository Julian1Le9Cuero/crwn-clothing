import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-bottom/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }); //Dinamically change the state using square brackets o know if it is the email or password input
  };

  handleSubmit = event => {
    event.preventDefault(); //Prevent default submit action from firing. We want FULL CONROL of what submit is gonna do
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
