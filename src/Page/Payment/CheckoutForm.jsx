import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = ({ contestInfo }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [clientSecret, setClientsecret] = useState("");
  const [transactionId, setTracnsactionId] = useState("");
  const user = useAuth();
  const {
    _id,
    contestDeadline,
    contestName,
    contestPrice,
    contestTypes,
    description,
    email,
    image,
    participants,
    priceMoney,
    status,
    taskSubmission,
  } = contestInfo;

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const partNum = parseFloat(participants + 1);
  const updateParti = { updateParti: partNum };

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: contestPrice })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientsecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
    } else {
      console.log("payment method ", paymentMethod);
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName || "userName",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTracnsactionId(paymentIntent?.id);

        // save payment to the database
        const paymentInfo = {
          contestDeadline,
          contestName,
          contestPrice,
          contestTypes,
          description,
          email: user?.email,
          photo:user?.photoURL,
          image,
          participants,
          priceMoney,
          status,
          name: user?.displayName,
          taskSubmission,
        };
        console.log("after payment", paymentInfo);

        const res = await axiosSecure.post("/contest/payment", paymentInfo);
        if (res.data) {
          toast.success("Payment Succeeded!");

          axiosSecure.put(`/contests/add/${_id}`, updateParti).then((res) => {
            if (res) {
              // console.log(res)
              navigate(location?.state ? location?.state : "/");
            }
          });
        }
      }
    }
  };

  return (
    <div className="s-top">
      <form action="" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn-all px-10 mt-10 py-2" type="submit" disabled={!stripe || !clientSecret}>
          Pay now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
