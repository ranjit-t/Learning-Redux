import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [{ First_Name: "Ran", Last_Name: "Thota", Age: 28, ID: 1 }],
  },
  reducers: {
    addUser(state, action) {
      state.users = [
        ...state.users,
        { ...action.payload, ID: Math.floor(Math.random() * 100) },
      ];
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    Increase(state, action) {
      state.count = state.count + 1;
    },
  },
});

const rootReducer = combineReducers({
  users: userSlice.reducer,
  counter: counterSlice.reducer,
});

export const { addUser } = userSlice.actions;
export const { Increase } = counterSlice.actions;

export const store = configureStore({
  // reducer: userSlice.reducer,
  reducer: rootReducer,
});
