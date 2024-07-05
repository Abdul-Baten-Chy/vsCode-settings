import useBaseUrl from "../Hooks/useBaseUrl";

/* eslint-disable react/prop-types */
const Table = ({ item }) => {
  const axiosPublic = useBaseUrl();
  const hanleDelete = (id) => {
    axiosPublic.delete(`/cart/${id}`);
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt="item.name" />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <th>
        <button
          className="bg-[#34BFE6] text-white py-2 px-2  font-bold  "
          onClick={() => hanleDelete(item._id)}
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

export default Table;
