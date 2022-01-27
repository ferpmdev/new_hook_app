import React, { useEffect } from "react";
import { useReducer } from "react/cjs/react.development";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
// ********************************************************************************
// ****TERMINÉ LA CLASE 129 PERO TENGO QUE VOLVER A VER DESDE LA 124 ********************
// ********************************************************************************

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: " ",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>TOTAL Todos ({todos.length}))</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-left">
                  {i + 1}_ {todo.desc}
                </p>
                {/* <hr /> */}
                <button
                  type="submit"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(todo.id)}
                >
                  BORRAR
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          Agregar TODO
          <hr />
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary mt-2 btn-sm">
                AGREGAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
