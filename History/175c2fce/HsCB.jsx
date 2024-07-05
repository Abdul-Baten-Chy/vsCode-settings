import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { MyAuthContext } from "../../../Components/context/AuthProvider";
import useAxiosPub from "../../../Hooks/useAxiosPub";

const CheckoutForm = ({ salary }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const [error, setError] = useState("");
  const elements = useElements();
  const axiosPub = useAxiosPub();
  const { user } = useContext(MyAuthContext);
  useEffect(() => {
    if (salary > 0) {
      axiosPub.post("/create-payment-intent", { salary }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosPub, salary]);

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
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default CheckoutForm;
