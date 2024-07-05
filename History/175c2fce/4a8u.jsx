import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { MyAuthContext } from "../../../Components/context/AuthProvider";
import useAxiosPub from "../../../Hooks/useAxiosPub";

const CheckoutForm = ({ selectedEmployee }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const elements = useElements();
  const axiosPub = useAxiosPub();
  const { user } = useContext(MyAuthContext);
  const salary = selectedEmployee.salary;

  useEffect(() => {
    if (salary > 0) {
      axiosPub.post("/create-payment-intent", { salary }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosPub]);

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

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          salary: salary,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          employeeId: selectedEmployee._id,
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the taka paisa",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default CheckoutForm;
