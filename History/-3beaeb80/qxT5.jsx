import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="userName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Details;
