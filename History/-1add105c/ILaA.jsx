import React, { useRef } from "react";

const Test = () => {
  const ref = useRef(0);
  const handleIncrease = () => {
    ref = ref + 1;
  };
  return (
    <div>
      <h1 className="text-center">{ref.current}</h1>
      <button onClick={handleIncrease}></button>
    </div>
  );
};

export default Test;
