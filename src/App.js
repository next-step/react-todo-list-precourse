import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main.jsx";

const App = () => {
  return React.createElement(Main);
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(App));
