import React, { useRef, useState } from "react";

const Test = () => {
  const ref = useRef(0);
  let testVar = 3;
  const [a, setA] = useState(0);
  const handleIncrease = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
    testVar = testVar * a;
    console.log(testVar, "test");
    setA(a + 1);
  };
  return (
    <div>
      <h1 className="text-center">{ref.current}</h1>
      <h1 className="text-center">{testVar}</h1>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default Test;
