import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPub from "../../../Hooks/useAxiosPub";

const CheckoutForm = ({ salary }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosPub = useAxiosPub();
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default CheckoutForm;
