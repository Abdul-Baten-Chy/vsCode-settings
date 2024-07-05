import { useGetTodoByNameQuery } from "@/redux/Api";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import AddTodoModal from "./TodoModal";

export type Ttodo = {
  id: string;
  title: string;
  description: string;
  isComplited?: boolean;
};

const TodoContainer = () => {
  // const todos = useSelector((state: RootState) => state);
  const { data, error, isLoading } = useGetTodoByNameQuery();
  if (isLoading) <p>Loading</p>;
  if (error) {
    return <p>Error ocuer</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        {data.length ? (
          <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
            {data?.map((item: Ttodo) => (
              <TodoCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
            <p>There is no task pending</p>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
