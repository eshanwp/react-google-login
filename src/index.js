import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App2 from "./App2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <App2 /> */}
  </React.StrictMode>,
  rootElement
);
