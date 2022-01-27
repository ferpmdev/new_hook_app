import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setcounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setcounter((c) => c + num);
    },
    [setcounter]
  );

  return (
    <div>
      <h1>CallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
