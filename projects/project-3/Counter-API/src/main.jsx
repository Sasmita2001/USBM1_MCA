/* eslint-disable react/no-deprecated */
/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CounterProvider } from "./CounterContext"; 
import "./index.css";

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById("root")
);
