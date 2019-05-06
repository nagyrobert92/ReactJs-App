import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import LightSwitch from "./LightSwitch";
import User from "./User";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Codaisseur</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        />
      </header>
      <main>
        <Title content="SOME CONTENT" />
        <User name="Rob" />
        <User name="Danny" />
        <LightSwitch />
      </main>
    </div>
  );
}

export default App;
