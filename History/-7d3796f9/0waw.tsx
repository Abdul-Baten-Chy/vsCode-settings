import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import AddTodoModal from "./TodoModal";

type Ttodo = {
  id: string;
  title: string;
  description: string;
  isComplited: boolean;
};

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.map((item: Ttodo) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
