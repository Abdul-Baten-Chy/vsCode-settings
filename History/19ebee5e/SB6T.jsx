const Table = ({ item }) => {
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
      <td>{item.price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Remove</button>
      </th>
    </tr>
  );
};

export default Table;
