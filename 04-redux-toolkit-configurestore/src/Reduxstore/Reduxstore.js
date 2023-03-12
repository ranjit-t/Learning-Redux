import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increase(state, action) {
      state.count++;
    },
    decrease(state, action) {
      state.count--;
    },
    reset(state, action) {
      state.count = 0;
    },
  },
});
// export const actions = counterSlice.actions;
// export const store = configureStore({
//   reducer: counterSlice.reducer,
// });

export const actions = counterSlice.actions;
export const store = configureStore({
  reducer: counterSlice.reducer,
});
