import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
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
const inputSlice = createSlice({
  name: "input",
  initialState: { inputText: "Hello" },
  reducers: {
    update(state, action) {
      action.payload.length === 0
        ? (state.inputText = "Hello")
        : (state.inputText = action.payload);
    },
  },
});
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  input: inputSlice.reducer,
});
export const { increase, decrease, reset } = counterSlice.actions;
export const { update } = inputSlice.actions;
export const store = configureStore({
  reducer: rootReducer,
});
