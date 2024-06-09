import React from "react";
import { FilterProvider } from "./context/FilterContext";
import { TodoProvider } from "./context/TodosContext";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <TodoTemplate/>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;
