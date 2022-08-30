import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counterSlice";
import { logInAction } from "./store/ReduxToolKit";
const ReduxToolKitDemo = () => {
  //   const counter = useSelector((state) => {
  //     console.log(state);
  //     return state.counter.counter;
  //   });
  //   const isLoggedIn = useSelector((state) => {
  //     return state.login.isLoggedIn;
  //   });
  const [counter, isLoggedIn] = useSelector((state) => {
    return [state.counter.counter, state.login.isLoggedIn];
  });
  const dispatch = useDispatch();
  const increment = () => {
    console.log("inc");
    dispatch(counterAction.increment());
  };
  const decrement = () => {
    dispatch(counterAction.decrement());
  };
  //   const addBy = () => {
  //     dispatch();
  //   };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{isLoggedIn || counter}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      {/* <button onClick={addBy}>addBy</button> */}
    </div>
  );
};

export default ReduxToolKitDemo;
