import React, { useState, useMemo } from "react";
import { hardProcess } from "../../helpers/hardProcess";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setshow] = useState(false);

  const memoProcesoPesado = useMemo(() => hardProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <h1>{memoProcesoPesado}</h1>
      <div className="btn btn-primary" onClick={increment}>
        +1
      </div>
      <hr />
      <div className="btn btn-secundary" onClick={() => setshow(!show)}>
        true/false: {JSON.stringify(show)}
      </div>
    </div>
  );
};

export default MemoHook;
