import React, { useState, useReducer } from "react";
import Modal from "./ModalForReducer";
import { reducer } from "./reducer";

const ReducerDemo = () => {
  const [name, setName] = useState("");
  const closeModal = () => {
    dispatch({ type: "CLOSE" });
  };
  //   Reducer Hook

  const defaultState = {
    person: [],
    isModelDisplay: false,
    ModelMsg: "Hello World",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <div>
      {state.isModelDisplay && (
        <Modal msg={state.ModelMsg} closeModal={closeModal} />
      )}
      <form
        className="form-control"
        onSubmit={(e) => {
          e.preventDefault();
          if (name) {
            dispatch({ type: "ADD_PERSON", payload: name });
            setName("");
          } else {
            dispatch({ type: "INVALID_INPUT" });
          }
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-light">
          add
        </button>
      </form>
      <section>
        {state.person.map((people) => {
          return (
            <h1 key={people.id}>
              <span>{people.name}</span>
              <span>
                <button
                  onClick={(e) => {
                    dispatch({ type: "REMOVE", payload: people.id });
                  }}
                >
                  remove
                </button>
              </span>
            </h1>
          );
        })}
      </section>
    </div>
  );
};

export default ReducerDemo;
