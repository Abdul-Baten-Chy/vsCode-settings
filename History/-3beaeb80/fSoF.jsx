import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPub from "../../../Hooks/useAxiosPub";

const Details = () => {
  const employee = useLoaderData();
  const axiosPub = useAxiosPub();
  console.log(employee);
  useEffect(() => {
    axiosPub.get(`/payments/${employee.email}`);
  }, [axiosPub, employee]);
  return (
    <div>
      <h3>Details page</h3>
    </div>
  );
};

export default Details;
