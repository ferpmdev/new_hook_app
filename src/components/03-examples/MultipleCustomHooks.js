import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  let url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  console.log(url);
  const { loading, data } = useFetch(url);
  const { quote, author } = !!data && data[0];

  return (
    <div>
      {loading ? (
        <div className="alert alert-info p-2 text-center">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div>
          <div className="badge bg-light text-wrap pt-3 px-3 pb-2 mb-3">
            {/* <hr /> */}
            <h5 className="text-dark">
              <em>{author}</em>
            </h5>
          </div>
          <h1>
            <strong>{quote}</strong>
          </h1>
          {/* <hr /> */}
        </div>
      )}
      <hr className=" mt-5" />
      <span
        className="bg-light mx-1 my-4 p-3 d-block text-left"
        onClick={() => increment()}
      >
        NEXT QUOTE
      </span>
    </div>
  );
};
