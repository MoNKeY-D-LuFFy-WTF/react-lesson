import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  function incrament() {
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrament}>incrament</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
