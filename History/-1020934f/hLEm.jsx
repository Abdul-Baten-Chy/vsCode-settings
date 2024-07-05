import { useQuery } from "@tanstack/react-query";
import useBaseUrl from "../Hooks/useBaseUrl";
import Category from "./Category";
import Hero from "./Hero";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // // useEffect(() => {

  // //   fetch("http://localhost:4000/products")
  // //     .then((res) => res.json())
  // //     .then((data) => setProducts(data));
  // // }, []);
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
