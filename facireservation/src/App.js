import React from "react";
import Login from "./component/Login";

import "./App.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
