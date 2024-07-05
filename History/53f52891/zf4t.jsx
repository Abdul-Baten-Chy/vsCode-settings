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
                        <div className="font-bold">{item.domnarName}</div>
                        <div className="text-sm opacity-50">
                          {item.donarEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
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
