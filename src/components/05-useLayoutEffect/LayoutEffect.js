import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  let { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const [boxsize, setBoxsize] = useState({});

  const [newDive, setnewDive] = useState("");

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxsize(pTag.current.getBoundingClientRect());
  }, [quote]);

  const heightBox = JSON.stringify(boxsize.width);

  console.log(heightBox);

  const newDiv = () => {
    setnewDive(!newDive);
    console.log(newDive);
  };

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr className=" mt-5" />
      <blockquote>
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <span className="btn btn-primary" onClick={() => increment()}>
        NEXT QUOTE
      </span>
      <pre>{JSON.stringify(boxsize, null, 3)}</pre>
      <span className="btn btn-primary" onClick={newDiv}>
        NEw div
      </span>
      <hr className=" mt-5" />
      {newDive ? (
        <div
          style={{
            position: "relative",
            marginTop: "50px",
            width: "400px",
            height: `${heightBox}`,
            color: "blue",
            backgroundColor: "orange",
          }}
        >
          {heightBox}
        </div>
      ) : (
        <h1>chay</h1>
      )}

      {newDiv}
    </div>
  );
};
