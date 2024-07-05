import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
const url = "http://localhost:4000";
const MyRequest = () => {
  const { data: reqFood, isLoading } = useQuery({
    queryKey: ["reqFood"],
    queryFn: async ({ queryKey }) => {
      const res = await axios.get(`${url}/${queryKey}`);
      return res.data; //res.data will be inserted in products
    },
  });

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure to delete this Item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(_id);
        Swal.fire({
          title: "Deleted!",
          text: "Your Request has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) =>
      await axios.delete(`http://localhost:4000/reqFood/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["reqFood"]);
    },
  });
  isLoading && <span className="loading loading-ring loading-lg"></span>;
  return (
    <div className="pt-36 px-10 min-h-[100vh]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Donar Info</th>
              <th>Quantity</th>
              <th>Expire Date </th>
              <th>Location</th>
              <th>
                <button>Action</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reqFood &&
              reqFood.map((item) => (
                <tr key={item._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.domnarName}</td>
                  <td>{item.quantity} Servings</td>
                  <td>{item.expire} </td>
                  <td>{item.location} </td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRequest;
