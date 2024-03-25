import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modalSlice";
import signUpSlice from "./features/signUpSlice";
import signInSlice from "./features/signInSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    signUp: signUpSlice,
    signIn: signInSlice,
  },
});

export default store;
