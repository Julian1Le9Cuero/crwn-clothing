const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// Use stripe library after bringing the secret key using dotenv
// This gives us back a funcion that receives one argument(the stripe secret key)
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});

// The request will provide us the Token from the stripe button component
app.post("/payment", function (req, res) {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeResponse });
    }
  });
});
