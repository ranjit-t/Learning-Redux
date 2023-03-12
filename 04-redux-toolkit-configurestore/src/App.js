import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actions } from "./Reduxstore/Reduxstore";

function App() {
  const count = useSelector((state) => state.count);

  // console.log(count);
  // console.log(actions);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <p>Count is : {count}</p>

      <button
        onClick={() => {
          dispatch(actions.increase());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(actions.decrease());
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch(actions.reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
