import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Table from "./Table";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  //    const axiosPublic=useAxiosPub()
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["payHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);

      return res.data;
    },
  });
  return (
    <div>
      <h3>Employee Payment History</h3>
      {data &&
        data.map((item) => <Table key={item._id} history={item}></Table>)}
    </div>
  );
};

export default PaymentHistory;
