import { useLoaderData } from "react-router-dom";

const Details = () => {
  const employee = useLoaderData();
  console.log(employee);
  return (
    <div>
      <h3>Details page</h3>
    </div>
  );
};

export default Details;
