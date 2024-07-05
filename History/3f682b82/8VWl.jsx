/* eslint-disable react/prop-types */
import { createContext } from "react";
import { data } from "../../Data";

export const DataProvider = createContext(null);

const DataContex = ({ children }) => {
  const tasks = data;
  return (
    <div>
      <DataProvider.Provider value={tasks}>{children}</DataProvider.Provider>
    </div>
  );
};

export default DataContex;
