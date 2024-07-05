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
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <Table key={item._id}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CratItems;
