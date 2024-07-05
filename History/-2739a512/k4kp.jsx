import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  //    const axiosPublic=useAxiosPub()
  const { user } = useAuth();

  const { data: payHistory, refetch } = useQuery({
    queryKey: [payHistory],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);

      return res.data;
    },
  });
  return <div></div>;
};

export default PaymentHistory;
