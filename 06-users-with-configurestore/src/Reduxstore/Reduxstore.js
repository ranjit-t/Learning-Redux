import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [{ Name: "Ran", Email: "ran@gmail.com", Age: 28, ID: 1 }],
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

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     count: 0,
//   },
//   reducers: {
//     increase(state, action) {
//       state.count = state.count + 1;
//     },
//   },
// });

// const rootReducer = combineReducers({
//   users: userSlice,
//   counter: counterSlice,
// });

export const { addUser } = userSlice.actions;
export const store = configureStore({
  reducer: userSlice.reducer,
  // reducer: rootReducer,
});
