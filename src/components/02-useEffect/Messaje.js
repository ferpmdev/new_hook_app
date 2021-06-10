import React, { useEffect } from "react";

export const Messaje = () => {
  useEffect(() => {
    console.log("componente montado");
    return () => {
      console.log("componente desmontado");
    };
  }, []);

  return (
    <>
      <hr className="mt-4" />
      <h3>sos un capo</h3>
    </>
  );
};
