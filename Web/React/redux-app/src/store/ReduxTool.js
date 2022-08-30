import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, ac) {
      state.counter--;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });
export default store;
