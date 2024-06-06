import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // App.js 컴포넌트 불러오기

ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(App, null)),
  document.getElementById("root")
);
