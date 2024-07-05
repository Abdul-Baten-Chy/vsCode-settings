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
        <XAxis dataKey="date" />
        <YAxis dataKey="salary" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="salary"
          activeBar={<Rectangle fill="pink" stroke="blue" width={100} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Details;
