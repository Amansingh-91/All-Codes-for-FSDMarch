import React from "react";
import { useSelector, useDispatch } from "react-redux";
const ReduxDemo = () => {
  const counter = useSelector((state) => state.counter);
  const isLoading = useSelector((state) => {
    return state.isLoading;
  });
  const dispatch = useDispatch();
  const increment = () => {
    console.log("inc");
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADDBY", payload: 10 });
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{isLoading || counter}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={addBy}>addBy</button>
    </div>
  );
};

export default ReduxDemo;
