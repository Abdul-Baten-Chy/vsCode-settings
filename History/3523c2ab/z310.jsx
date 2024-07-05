/* eslint-disable react/prop-types */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const Modal = ({ setIsOpenModal, selectedEmployee }) => {
  const salary = selectedEmployee.salary;
  const stripePromise = loadStripe(
    "pk_test_51OupxERuBpildU6c2D3EMa6qdNk7DJ6mr1M1VXjTzXFt4hY4U2sncwmPLb1OqM0tckksvnYdXQcAz5nR5r7mubDY00IxgkYrym"
  );

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-white p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3">
        <h2 className="mb-4 text-center text-2xl font-bold text-black lg:mb-4 lg:text-[28px]">
          Payments
        </h2>
        <h3 className="text-center mb-8">
          Pay Salary: {selectedEmployee.salary} Tk
        </h3>
        <Elements stripe={stripePromise}>
          <CheckoutForm salary={salary}></CheckoutForm>
        </Elements>

        <button
          className="bg-[#FC6273] px-3 py-1 text-white block mx-auto "
          onClick={() => setIsOpenModal(false)}
        >
          Close
        </button>
      </form>
    </>
  );
};

export default Modal;
