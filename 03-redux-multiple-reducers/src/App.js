import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.countObj.count);
  const darkMode = useSelector((state) => state.countObj.darkMode);
  const inputText = useSelector((state) => state.inputTextObj.inputText);

  const dispatch = useDispatch();

  return (
    <div className={darkMode === false ? "App" : "dark-mode"}>
      <h1>Redux Practice - Multiple Reducers</h1>
      <div className="section-1">
        <h2>Count Reducer</h2>
        <p>{count}</p>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "decrease" });
            }}
          >
            Decrease
          </button>
          <button
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              dispatch({ type: "increase" });
            }}
          >
            Increase
          </button>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "toggle" });
          }}
        >
          Dark Mode
        </button>
      </div>
      <div className="section-2">
        <h2>Input Reducer</h2>
        <p>{inputText}</p>

        <input
          type="text"
          placeholder="type anything here"
          onChange={(e) => {
            dispatch({ type: "change", payload: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default App;
