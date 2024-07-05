/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "../../Data";

export const DataProvider = createContext(null);

const DataContex = ({ children }) => {
  const [tasks, setTasks] = useState([data]);
  const [showModal, setShowModal] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);
  const [filtered, setFill] = useState([]);
  const handleAddEditTask = (newtask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newtask]);
    } else {
      setTasks(
        tasks?.map((t) => {
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

  const handleUpdate = (task) => {
    setUpdatedTask(task);
    setShowModal(true);
  };
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleFav = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavourite: !task.isFavourite };
        }
        return task;
      })
    );
  };
  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm == "") {
      setTasks(prev=>return [...prev])
    }
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFill(filtered);
  };

  const dataInfo = {
    tasks,
    setTasks,
    handleAddEditTask,
    handleCloseClick,
    handleUpdate,
    handleDelete,
    handleFav,
    handleDeleteAll,
    handleSearch,
    showModal,
    updatedTask,
    setShowModal,
    filtered,
  };
  return (
    <div>
      <DataProvider.Provider value={dataInfo}>{children}</DataProvider.Provider>
    </div>
  );
};

export default DataContex;
