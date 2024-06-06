import React from "react";
import { createRoot } from "react-dom/client";
import main from "./main";

createRoot(document.getElementById("app")).render(
  React.createElement(React.StrictMode, null, React.createElement(main, null))
);
