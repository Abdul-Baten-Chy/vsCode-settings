import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAxiosPub from "../../../Hooks/useAxiosPub";

const Details = () => {
  const employee = useLoaderData();
  const axiosPub = useAxiosPub();
  const [data, setData] = useState();
  console.log(employee);
  console.log("data", data);
  useEffect(() => {
    axiosPub
      .get(`/payments/${employee.email}`)
      .then((res) => setData(res.data));
  }, [axiosPub, employee]);
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="name" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis dataKey="salary" />
      <Tooltip />
    </LineChart>
  );
};

export default Details;
