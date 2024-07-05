import { useLoaderData } from "react-router-dom";
import Card from "../Shops/Card";

const ProductByCategory = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <Card key={data._id} product={product}></Card>
      ))}{" "}
    </div>
  );
};

export default ProductByCategory;
