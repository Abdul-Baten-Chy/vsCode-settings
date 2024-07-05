import { useContext, useState } from "react";
import Featured from "../Home/Featured";
import { DataContext } from "../context/Data";

const AvailableFood = () => {
  const { foods, isLoading } = useContext(DataContext);
  const [filteredFood, setFilteredFood] = useState([...foods]);
  const [search, setSearch] = useState("");
  if (isLoading) return <div>Loading ...</div>;
  const handleSearch = () => {
    setFilteredFood(
      foods &&
        foods?.filter((food) =>
          food.name.toLowerCase().includes(search.toLowerCase())
        )
    );
    setSearch("");
  };

  return (
    <div className="pt-36 min-h-[100vh] mb-10">
      <h2 className="text-center text-[#36D6A8] mb-10 text-3xl font-bold">
        AVAILABLE FOOD
      </h2>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray border border-black ml-44 px-3 py-1"
        />{" "}
        <button className="bg-[#36D6A8] px-2 py-1" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 w-[1000px] gap-4 mx-auto">
        {filteredFood &&
          filteredFood.map((food) => (
            <Featured key={food._id} food={food}></Featured>
          ))}
      </div>
    </div>
  );
};

export default AvailableFood;
