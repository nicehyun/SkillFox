import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeSlice";
import skillFrequencySlice from "./features/skillFrequencySlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    skillFrequency: skillFrequencySlice,
  },
});

export default store;
