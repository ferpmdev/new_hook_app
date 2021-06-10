import React from "react";
import { useCounter } from "../../hooks/useCounter";

import "./CounterApp.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>CounterWithHooks: {state}</h1>
      <hr />
      <button className="btn btn-primary p-4" onClick={() => increment(2)}>
        +1
      </button>
      <button
        className="btn btn-secondary m-4 p-4"
        onClick={() => decrement(4)}
      >
        -1
      </button>
      <button className="btn btn-warning p-4" onClick={reset}>
        reset
      </button>
    </>
  );
};
