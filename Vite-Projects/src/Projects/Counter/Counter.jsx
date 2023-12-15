import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter === 10) return;
    setCounter(counter + 2);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 2);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}
