import React, { useEffect, useState } from "react";
import { Messaje } from "./Messaje";

import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { name, email } = formState;

  useEffect(() => {
    console.log("hey");
  }, []);

  useEffect(() => {
    console.log("name cambió");
  }, [name]);

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mt-4"
          autoComplete="off"
          placeholder="tu nombre"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control mt-4"
          autoComplete="off"
          placeholder="tu email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Messaje />}
    </>
  );
};
