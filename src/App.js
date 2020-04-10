import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils"; /*Save the state of the user in our App state
so we can pass it to the components that we need
*/
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          /* On the snapshot object is where 
          we're going to get the data related to
          this user that we just possibly store if it's a 
          new user or the data related to the user already stored in our db
          */
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
        // Destructure everything but the id because firebase will generate it for us
        // addCollectionAndDocuments(
        //   "collections",
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      }
      // This gets the user ref
      // Take the userRef to check if the db has been updated at that reference with any new data (if the snapshot has changed)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Put it out of the switch component in order to make it appear at every route, it
        must be aware of when the user signs in or out by passing the app currenUser state */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
// Dispatch the action that we want to pass
/* dispatch is a way for redux to know that 
whatever we're passing to it is going to be 
an action (it will pass the user object to Redux)
object that will be passed to EVERY REDUCER */
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
