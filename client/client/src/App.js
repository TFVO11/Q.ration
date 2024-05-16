import "./App.css";
import React from "react";
import { Fragment } from "react";
import RouterComp from "./routes/RouteComp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RouterComp />
    </BrowserRouter>
  );
}

export default App;
