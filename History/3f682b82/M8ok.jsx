/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "../../Data";

export const DataProvider = createContext(null);

const DataContex = ({ children }) => {
  const [tasks, setTasks] = useState([data]);
  const handleAddEditTask = (newtask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newtask]);
    } else {
      setTasks(
        tasks.map((t) => {
          if (t.id === newtask.id) {
            return newtask;
          }
          return t;
        })
      );
    }
    handleCloseClick();
  };

  const dataInfo = {
    tasks,
    setTasks,
    handleAddEditTask,
  };
  return (
    <div>
      <DataProvider.Provider value={dataInfo}>{children}</DataProvider.Provider>
    </div>
  );
};

export default DataContex;
