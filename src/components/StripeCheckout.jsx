import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { StripeCheckoutForm } from "../components";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const StripeCheckout = () => {
  const { total_amount, shipping_fee } = useSelector((store) => {
    return store.cartState;
  });
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/payment",
        JSON.stringify({ total_amount, shipping_fee })
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#ab7a5f",
      colorBackground: "#ffffff",
      colorText: "#102a42",
      fontFamily: "Lato, sans-serif",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default StripeCheckout;
