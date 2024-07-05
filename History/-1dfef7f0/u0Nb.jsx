import { useState } from "react";
import { FaRegRectangleXmark, FaRegSquareCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";
import Modal from "./Modal";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const [users, refetch] = useUsers();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const employee = users?.filter((user) => user.role == "Employee");

  const handleVerify = (_id) => {
    axiosSecure.patch(`/users/verify/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user status changed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handlePayment = (employee) => {
    setIsOpenModal(true);
    console.log(employee);
  };

  return (
    <div>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal}></Modal>}
      <div className="overflow-x-auto">
        <h2 className="text-center bg-green-400 px-10 py-2 text-white">
          Employee Number: <span className="font-bold">{employee?.length}</span>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Bank Account</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {employee?.map((singleEmployee, index) => (
              <tr key={singleEmployee._id}>
                <th> {index + 1}</th>
                <td> {singleEmployee.name}</td>
                <td>{singleEmployee.email} </td>
                <td>{singleEmployee.account} </td>
                <th>{singleEmployee.salary} </th>
                <th
                  className="text-center text-xl"
                  onClick={() => {
                    handleVerify(singleEmployee._id);
                  }}
                >
                  {singleEmployee.isVerified ? (
                    <FaRegSquareCheck className="text-green-800 hover:scale-110 transition duration-500" />
                  ) : (
                    <FaRegRectangleXmark className="text-red-800 hover:scale-110 transition duration-500" />
                  )}
                </th>
                <th>
                  <Link to="details">
                    <button className="btn btn-ghost btn-xs font-bold">
                      Details
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    className="px-3 py-1 bg-[#FC6273] rounded-sm "
                    onClick={() => handlePayment(singleEmployee)}
                  >
                    Pay
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
