import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global.css"; // 👈 THIS IS WHAT YOU WERE MISSING

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);