import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addUser, Increase } from "./Reduxstore/Reduxstore";
import { useState } from "react";

function App() {
  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Age, setAge] = useState();

  const users = useSelector((state) => state.users.users);
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <div className="users">
        {users.map((user) => {
          return (
            <div key={user.ID}>
              <p>First Name : {user.First_Name}</p>
              <p>Last Name : {user.Last_Name}</p>
              <p>Age : {user.Age}</p>
            </div>
          );
        })}
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirst_Name(e.target.value)}
          value={First_Name}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLast_Name(e.target.value)}
          value={Last_Name}
          required
        />

        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          value={Age}
          required
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                First_Name: First_Name,
                Last_Name: Last_Name,
                Age: Age,
              })
            );
            setFirst_Name("");
            setAge();
            setLast_Name("");
          }}
        >
          Add New User
        </button>
      </div>
      <div className="counter">
        <p>{count}</p>
        <button
          onClick={() => {
            dispatch(Increase());
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
