import React, { useState } from "react";
import ReactDOM from "react-dom";

import ScotchInfoBar from "./ScotchInfoBar";

import "./styles.css";

function App() {
  const [name, setName] = useState("Sean");
  const [age, setAge] = useState(27);

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name: {name}</p>
        <p>Display Age: {age}</p>
      </div>

      <div className="inputs">
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="Sean"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="27"
            min="0"
            value={age}
            onChange={e => setAge(+e.target.value)}
          />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
