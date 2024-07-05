const CheckoutForm = ({ salary }) => {
  useEffect(() => {
    if (salary > 0) {
      axiosSecure.post("/create-payment-intent", { salary }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);
  return <div></div>;
};

export default CheckoutForm;
