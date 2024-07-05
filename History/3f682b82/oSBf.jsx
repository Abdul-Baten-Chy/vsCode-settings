/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "../../Data";

export const DataProvider = createContext(null);

const DataContex = ({ children }) => {
  const [tasks, setTasks] = useState(data);
  const dataInfo = {
    tasks,
  };
  return (
    <div>
      <DataProvider.Provider value={dataInfo}>{children}</DataProvider.Provider>
    </div>
  );
};

export default DataContex;
