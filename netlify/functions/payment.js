const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);

export const handler = async (event, context) => {
  const { total_amount, shipping_fee } = JSON.parse(event.body);

  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      payment_method_configuration: "pmc_1OHvkhC5ZuH6uB0XqKYDaOFP",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
