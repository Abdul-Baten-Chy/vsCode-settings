import { useQuery } from "@tanstack/react-query";
import useBaseUrl from "../Hooks/useBaseUrl";
import Category from "./Category";
import Hero from "./Hero";

const Home = () => {
  const axiosPub = useBaseUrl();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPub.get("/products");
      return res.data;
    },
  });
  console.log(products);
  return (
    <div>
      <Hero />
      <Category />
    </div>
  );
};

export default Home;
