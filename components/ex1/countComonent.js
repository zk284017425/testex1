'use client';

import { useState } from "react";
import CountOddEvenComponent from "./countOddEven";

export default function CountComponent() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( () => count + 1);
  };
  const decrement = () => {
    setCount( () => count - 1);
  };

  return (
    <div className="p-2 border-2 w-full rounded-2xl">
      <h1>Count Component</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment} className="bg-blue-500 text-white p-2 rounded">Increment</button>
      <button onClick={decrement} className="bg-red-500 text-white p-2 rounded ml-2">Decrement</button>

      <div className="mt-4">
        <CountOddEvenComponent count={count}></CountOddEvenComponent>
      </div>
    </div>
  );

}