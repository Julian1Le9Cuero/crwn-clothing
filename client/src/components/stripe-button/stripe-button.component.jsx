import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripeInCents = price * 100;
  const publishableKey = "pk_test_R2UXWH0rxk3JupbFI5ozILgl00m57KKlcC";

  const onToken = (token) => {
    // Pass an object of all of the properties we want to pass to the server
    // It will recognize that we'll make a request to the /payment route
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripeInCents,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful!");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment. Make sure that you use the provided card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripeInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
// /* Description = Show physical dollar value and not in cents */

/* token = Callbackk that is triggered when we submit */

export default StripeCheckoutButton;
