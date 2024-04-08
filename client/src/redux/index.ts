import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeSlice";

import ShowChartCountSlice from "./features/showChartCountSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    showChartCount: ShowChartCountSlice,
  },
});

export default store;
