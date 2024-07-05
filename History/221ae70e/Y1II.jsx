import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";
import Table from "./Table";

const CratItems = () => {
  const { cart } = useContext(DataContext);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <Table key={item._id} item={item}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CratItems;
