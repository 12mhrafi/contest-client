import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

// pk key
const stripePromise = loadStripe(
  "pk_test_51OGdsLEGH7NakUCthxJJupZCXM0ldYVEiW7mNbqSpEuDLjIC4NdCPaoHGsyKqPVrQExFEAbAQyhXwfswGy8BwwQl00g3QOYzsp"
);
const Payment = () => {

    const contestInfo = useLoaderData();
    console.log(contestInfo);

  return (
    <div className="container mx-auto px-4 s-top">
      <Elements stripe={stripePromise}>
        <CheckoutForm contestInfo={contestInfo}/>
      </Elements>
    </div>
  );
};

export default Payment;
