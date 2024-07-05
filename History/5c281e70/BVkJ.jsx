/* eslint-disable react/prop-types */
const Table = ({ history }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tra. Id</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date of Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{history?.transactionId}</th>
            <td>{history?.email}</td>
            <td>{history?.salary}</td>
            <td>{history?.date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
