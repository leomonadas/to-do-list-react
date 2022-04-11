import React from "react";
import Navbar from "./components/Navbar";
import Tasklist from "./components/Tasklist";
import "./assets/styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist title="A FAZER" />
        <Tasklist title="FAZENDO" />
        <Tasklist title="FEITA" />
      </div>
    </div>
  );
}

export default App;
