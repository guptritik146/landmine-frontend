import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";

const renderList = () => {
  return (
    <div>
      {data.map((item, key) => {
        return <div key={key}>{item.batting_score}</div>;
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {renderList()}
      </header>
    </div>
  );
}

export default App;
