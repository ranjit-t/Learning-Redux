import logger from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";

function countReducer(state = { count: 0, darkMode: false }, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "toggle":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}
function inputReducer(state = { inputText: "hello, welcome" }, action) {
  switch (action.type) {
    case "change":
      if (!action.payload) return { ...state, inputText: "hello, welcome" };
      return { ...state, inputText: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  countObj: countReducer,
  inputTextObj: inputReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
