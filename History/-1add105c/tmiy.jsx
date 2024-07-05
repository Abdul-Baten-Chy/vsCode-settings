import React, { useRef, useState } from "react";

const Test = () => {
  const ref = useRef(0);
  let testVar = 0;
  const [a, setA] = useState(0);
  const handleIncrease = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
    testVar = testVar + 1;
    console.log(testVar, "test");
    setA(5);
  };
  return (
    <div>
      <h1 className="text-center">{ref.current}</h1>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default Test;
