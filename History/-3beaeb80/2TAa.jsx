import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPub from "../../../Hooks/useAxiosPub";

const Details = () => {
  const employee = useLoaderData();
  const axiosPub = useAxiosPub();
  const [data, setData] = useState();
  console.log(employee, "data", data);
  useEffect(() => {
    axiosPub
      .get(`/payments/${employee.email}`)
      .then((res) => setData(res.data));
  }, [axiosPub, employee]);
  return (
    <div>
      <h3>Details page</h3>
    </div>
  );
};

export default Details;
