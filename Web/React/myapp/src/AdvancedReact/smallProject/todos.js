import React, { useState } from "react";

const Todos = () => {
  let [todos, setTodos] = useState([
    { task: "study", id: 1 },
    { task: "teach", id: 2 },
  ]);
  let [value, setValue] = useState("");
  const AddData = () => {
    let newList = [...todos, { task: value, id: new Date() }];
    setTodos(newList);
    setValue("");
  };
  return (
    <div className="container">
      <section className="">
        <h1>Todos</h1>
        <form
          className="form-control"
          onSubmit={(e) => {
            e.preventDefault();
            if (value.trim()) {
              AddData();
            } else {
              console.log("Add Correct Todo");
            }
          }}
        >
          <input
            type="text"
            id="add"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button className="btn btn-primary">Add</button>
        </form>
        <article>
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <span>{todo.task}</span>
                  <button
                    className="btn"
                    onClick={() => {
                      let newList = todos.filter(
                        (todoEle) => todoEle.id != todo.id
                      );
                      setTodos(newList);
                    }}
                  >
                    remove
                  </button>
                </li>
              );
            })}
          </ul>
        </article>
        <button
          className="btn btn-danger"
          onClick={() => {
            setTodos([]);
          }}
        >
          Clear All
        </button>
      </section>
    </div>
  );
};

export default Todos;
