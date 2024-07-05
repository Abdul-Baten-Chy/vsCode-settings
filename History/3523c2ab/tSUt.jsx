/* eslint-disable react/prop-types */
const Modal = ({ setIsOpenModal }) => {
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Payments
        </h2>

        <button
          className="bg-[#FC6273] px-3 py-1 text-white "
          onClick={() => setIsOpenModal(false)}
        >
          Close
        </button>
      </form>
    </>
  );
};

export default Modal;
