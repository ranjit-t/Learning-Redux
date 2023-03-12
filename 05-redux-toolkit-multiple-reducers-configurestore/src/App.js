import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increase, decrease, reset } from "./Reduxstore/Reduxstore";
import { update } from "./Reduxstore/Reduxstore";

function App() {
  const count = useSelector((state) => state.counter.count);
  const inputText = useSelector((state) => state.input.inputText);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <p>Count is : {count}</p>

      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <div>{inputText}</div>
      <input
        type="text"
        onChange={(e) => {
          dispatch(update(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
