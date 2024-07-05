import { createContext } from "react";

export const DataProvider = createContext(null);

const DataContex = ({ children }) => {
  return (
    <div>
      <DataContex.provider>{children}</DataContex.provider>
    </div>
  );
};

export default DataContex;
