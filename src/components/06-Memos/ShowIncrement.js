import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volvi a generar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(1);
      }}
    >
      incrementar
    </button>
  );
});

export default ShowIncrement;
