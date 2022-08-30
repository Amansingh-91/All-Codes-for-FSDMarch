import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/ReduxTool";
const ReduxToolKit = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          increment();
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default ReduxToolKit;
