import React from "react";

import "./App.css";
import Title from "./Title";
import LightSwitch from "./LightSwitch";
import UserBoard from "./UserBoard";
import DigitalClock from "./DigitalClock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Codaisseur</p>
        <DigitalClock />
        <Title content="SOME CONTENT" />
        <div>
          <h3>ScoreBoard </h3>
          <UserBoard />
        </div>
        <LightSwitch />
      </header>
    </div>
  );
}

export default App;
