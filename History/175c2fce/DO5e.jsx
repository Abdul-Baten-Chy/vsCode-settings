import useAxiosPub from "../../../Hooks/useAxiosPub";

const CheckoutForm = ({ salary }) => {
  const axiosPub = useAxiosPub();
  useEffect(() => {
    if (salary > 0) {
      axiosPub.post("/create-payment-intent", { salary }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);
  return <div></div>;
};

export default CheckoutForm;
