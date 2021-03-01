import React, { useState } from "react";

var App = function () {
  const [count, setCount] = useState(0);

  var increment = function () {
    setCount(count + 1);
  };

  var decrement = function () {
    count !== 0 && setCount(count - 1);
  };
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
