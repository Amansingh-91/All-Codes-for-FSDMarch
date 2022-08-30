import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    state = { ...state, counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    state = { ...state, counter: state.counter - 1 };
  }
  return state;
};
const store = createStore(reducerFn);
export default store;
