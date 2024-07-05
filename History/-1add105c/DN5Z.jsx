import React, { useRef } from "react";

const Test = () => {
  const ref = useRef(0);
  return (
    <div>
      <h1>{ref.current}</h1>
    </div>
  );
};

export default Test;
