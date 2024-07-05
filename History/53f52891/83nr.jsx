import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = "http://localhost:4000";
const MyRequest = () => {
  const { data: reqFood, isLoading } = useQuery({
    queryKey: ["reqFood"],
    queryFn: async ({ queryKey }) => {
      const res = await axios.get(`${url}/${queryKey}`);
      return res.data; //res.data will be inserted in products
    },
  });
  isLoading && <span className="loading loading-ring loading-lg"></span>;
  return (
    <div className="pt-36 min-h-[100vh]">
      {reqFood &&
        reqFood.map((item) => (
          
        ))}
    </div>
  );
};

export default MyRequest;
