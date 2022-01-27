import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(false);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <div className="btn btn-primary" onClick={increment}>
        +1
      </div>
      <hr />
      <div className="btn btn-dark" onClick={() => setshow(!show)}>
        el estado de show es: {JSON.stringify(show)}
      </div>
    </div>
  );
};

export default Memorize;
