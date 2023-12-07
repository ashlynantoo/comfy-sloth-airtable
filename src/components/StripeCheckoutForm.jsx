import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Wrapper from "../assets/wrappers/StripeCheckoutForm";
import { clearCart } from "../features/cart/cartSlice";

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("success");
          setTimeout(() => {
            navigate("/");
            dispatch(clearCart());
          }, 10000);
          break;
        case "processing":
          setMessage("processing");
          setTimeout(() => {
            navigate("/");
            dispatch(clearCart());
          }, 10000);
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://ashlynz-comfy-sloth.netlify.app/checkout",
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  if (message === "success" || message === "processing") {
    return (
      <Wrapper>
        <h5>Thank you.</h5>
        <h5>
          {message === "success"
            ? "Your payment was successful!"
            : "Your payment is processing."}
        </h5>
        <h5>Redirecting to home page shortly...</h5>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="btn btn-block"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner-text">
                <div className="spinning"></div>
                <span>processing...</span>
              </div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </Wrapper>
  );
};

export default StripeCheckoutForm;
