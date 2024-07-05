import { useLoaderData } from "react-router-dom";

const ProductByCategory = () => {
  const data = useLoaderData();
  console.log(data);
  return <div> cat</div>;
};

export default ProductByCategory;
