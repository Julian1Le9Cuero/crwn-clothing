import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-bottom/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
// We will create and authenticate new users

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    //   Manually create authentication
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // Once this is successful the user is assign to the application
      // Destructure because the object return from the request, has a "user" "property, this is decided by firebase
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      ); //This returns an object
      await createUserProfileDocument(user, { displayName }); //displayName comes as an object, so we want its value
      //    If this promise succeeds then set the state
      // This will clear the form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = async event => {
    const { name, value } = event.target;
    //   Dynamically set the name
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up wih your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Name"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
