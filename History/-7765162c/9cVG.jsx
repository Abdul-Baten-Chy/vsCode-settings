import { useLoaderData } from "react-router-dom";
import Card from "../Shops/Card";

const ProductByCategory = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <h2>Category: {data[0].category}</h2>
      {data.map((item) => (
        <Card key={data._id} product={item}></Card>
      ))}{" "}
    </div>
  );
};

export default ProductByCategory;
