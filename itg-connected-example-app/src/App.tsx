import React from "react";
import cognite from "./cognite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cognite} className="App-logo" alt="logo" />
        <p>
          Welcome to you first ITG connected app!
        </p>
        <a
          className="App-link"
          href="https://itg.cognite.ai/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ITG
        </a>
      </header>
    </div>
  );
}

export default App;
