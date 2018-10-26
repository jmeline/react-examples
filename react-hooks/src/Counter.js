import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  return (
    <span>
      <h2 style={{ display: "inline-block"}}>Use State Example: </h2>
      <button className="button" onClick={inc}>Increment</button>
      <h4 style={{ display: "inline-block"}}>{count}</h4>
      <button className="button" onClick={dec}>Decrement</button>
    </span>
  );
}

export default Counter;
