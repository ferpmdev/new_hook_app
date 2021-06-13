import React from "react";
import { useForm } from "../../hooks/useForm";

import "./effects.css";

export const FormWithCustomHooks = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  return (
    <>
      <h1>FormWithCustomHooks</h1>
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control mt-4"
          placeholder="******"
          value={password}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
