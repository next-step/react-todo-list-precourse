import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { TodosProvider } from "./context/TodosContext";

const root = document.getElementById("app");
ReactDOM.createRoot(root).render(
  <TodosProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodosProvider>
);
