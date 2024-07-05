/* eslint-disable react/prop-types */
import { createContext } from "react";

export const DataProvider = createContext(null);

const DataContex = ({ children }) => {
  return (
    <div>
      <DataProvider.Provider>{children}</DataProvider.Provider>
    </div>
  );
};

export default DataContex;
