// import React, { useEffect, useState } from "react";

// export const Hello = () => {
//   const [count, setCount] = useState(() =>
//     JSON.parse(localStorage.getItem("count"))
//   );
//   const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);
//   return (
//     <div>
//       <div>{!data ? "loading..." : data} </div>
//       <div>Count: {count}</div>
//       <button
//         className="btn btn-prymary"
//         onClick={() => setCount((c) => c + 1)}
//       >
//         increment
//       </button>
//     </div>
//   );
// };
