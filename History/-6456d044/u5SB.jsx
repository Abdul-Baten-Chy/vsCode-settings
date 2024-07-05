import { useReducer, useState } from "react";
import { data } from "../../Data";
import AddTask from "./AddTask";
import Rows from "./Rows";
import Search from "./Search";
import Taskreducer from "./Taskreducer";

const Table = () => {
  const initialData = data;
  const [showModal, setShowModal] = useState(false);
  const [tasks, dispatch] = useReducer([Taskreducer, initialData]);
  const [updatedTask, setUpdatedTask] = useState(null);

  const handleAddEditTask = (newtask, isAdd) => {
    if (isAdd) {
      dispatch({
        type: "added",
        task: newtask,
      });
    } else {
      dispatch({
        type: "edit",
        id: nextId++,
        text: text,
      });
    }
  };

  const handleUpdate = (task) => {};
  const handleCloseClick = () => {};

  const handleDelete = (taskId) => {};

  const handleFav = (taskId) => {};
  const handleDeleteAll = () => {};
  const handleSearch = (searchTerm) => {};

  return (
    <section className="mb-20 mx-auto" id="tasks">
      {showModal && (
        <AddTask
          onClose={handleCloseClick}
          onAddTask={handleAddEditTask}
          updatedTask={updatedTask}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <Search onSearch={handleSearch} />
              <button
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={() => setShowModal(true)}
              >
                Add Task
              </button>
              <button
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={handleDeleteAll}
              >
                Delete All
              </button>
            </div>
          </div>
          <Rows
            tasks={tasks}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onFav={handleFav}
          />
        </div>
      </div>
    </section>
  );
};

export default Table;
