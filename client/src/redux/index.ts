import { configureStore } from "@reduxjs/toolkit";

import ShowChartCountSlice from "./features/showChartCountSlice";
import layoutSlice from "./features/layoutSlice";

const store = configureStore({
  reducer: {
    layoutSlice: layoutSlice,
    showChartCount: ShowChartCountSlice,
  },
});

export default store;
