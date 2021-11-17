import React from "react";
import "./App.css";
import Login from "./components/Login";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
