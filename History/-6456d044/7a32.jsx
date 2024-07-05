import { useState } from "react";
import { data } from "../../Data";
import AddTask from "./AddTask";
import Rows from "./Rows";
import Search from "./Search";

const Table = () => {
  const initialData = data;
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([initialData]);
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

  const handleUpdate = (task) => {
    setUpdatedTask(task);
    setShowModal(true);
  };
  const handleCloseClick = () => {
    setShowModal(false);
    setUpdatedTask(null);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleFav = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavourite: true };
        }
      })
    );
  };
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
              <Search />
              <button
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={() => setShowModal(true)}
              >
                Add Task
              </button>
              <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
                Delete All
              </button>
            </div>
          </div>
          <Rows tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
      </div>
    </section>
  );
};

export default Table;
