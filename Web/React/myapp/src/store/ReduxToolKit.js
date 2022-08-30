import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const loginSlice = createSlice({
  name: "Login Slice",
  initialState: { isLoggedIn: false },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const logInAction = loginSlice.actions;
const store = configureStore({
  reducer: { counter: counterSlice.reducer, login: loginSlice.reducer },
});

export default store;
