import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addUser } from "./Reduxstore/Reduxstore";
import { useState } from "react";

function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // console.log(users);
  // console.log(addUser);

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      {users.map((user) => {
        return (
          <div key={user.ID}>
            <p>Name : {user.Name}</p>
            <p>Email : {user.Email}</p>
            <p>Age : {user.Age}</p>
          </div>
        );
      })}
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <button
        onClick={() => {
          dispatch(addUser({ Name: Name, Email: Email, Age: Age }));
        }}
      >
        Add New User
      </button>
    </div>
  );
}

export default App;
