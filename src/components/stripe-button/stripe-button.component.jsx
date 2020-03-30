import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripeInCents = price * 100;
  const publishableKey = "pk_test_R2UXWH0rxk3JupbFI5ozILgl00m57KKlcC";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful.");
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
