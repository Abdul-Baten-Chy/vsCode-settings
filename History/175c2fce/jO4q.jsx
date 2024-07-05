/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MyAuthContext } from "../../../Components/context/AuthProvider";
import useAxiosPub from "../../../Hooks/useAxiosPub";
import useUsers from "../../../Hooks/useUsers";

const CheckoutForm = ({ selectedEmployee }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [refetch] = useUsers();
  const elements = useElements();
  const axiosPub = useAxiosPub();
  const { user } = useContext(MyAuthContext);
  const salary = selectedEmployee.salary;

  useEffect(() => {
    if (salary) {
      axiosPub
        .post("/create-payment-intent", { salary: salary })
        .then((res) => {
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
          userName: user?.displayName,
          salary: salary,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          employeeId: selectedEmployee._id,
          status: "pending",
        };

        const res = await axiosPub.post("/payments", payment);
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
          // navigate("/dashboard/paymentHistory");
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          // disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            {" "}
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
