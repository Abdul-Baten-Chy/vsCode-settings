/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "../../Data";

export const DataProvider = createContext(null);

const DataContex = ({ children }) => {
  const [tasks, setTasks] = useState([data]);
  const [showModal, setShowModal] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);
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
  const handleCloseClick = () => {
    setShowModal(false);
    setUpdatedTask(null);
  };

  const dataInfo = {
    tasks,
    setTasks,
    handleAddEditTask,
  };
  const handleUpdate = (task) => {
    setUpdatedTask(task);
    setShowModal(true);
  };
  return (
    <div>
      <DataProvider.Provider value={dataInfo}>{children}</DataProvider.Provider>
    </div>
  );
};

export default DataContex;
