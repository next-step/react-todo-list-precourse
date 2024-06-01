import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { TodosProvider } from "./context/TodosContext";
import { FilterProvider } from "./context/FilterContext";

const root = document.getElementById("app");
ReactDOM.createRoot(root).render(
  <TodosProvider>
    <FilterProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FilterProvider>
  </TodosProvider>
);
