import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

export default function createApp() {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(React.createElement(App));
}
