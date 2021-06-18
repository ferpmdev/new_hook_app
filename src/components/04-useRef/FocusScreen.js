import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();

    document.querySelector("input").select();
  };
  return (
    <div>
      <h1>FocusScreen</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="nombre"
        className="form-control"
      />
      <button className="btn btn-outline-dark mt-4" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
