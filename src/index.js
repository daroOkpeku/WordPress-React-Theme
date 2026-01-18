import "./index.css";
// import Homestart from "./scripts/Homestart";
import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

window.React = React;

const element = document.getElementById("home");
if (element) {
  //   const root = ReactDOM.createRoot(element);
  const root = createRoot(element); // React 18 API
  root.render(<App />);
}
