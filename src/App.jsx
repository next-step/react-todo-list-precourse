import React from "react";
import "./App.css";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import FilterBox from "./components/FilterBox";
import CheckedDelete from "./components/CheckedDelete";

const App = () => {
  return (
    <div className="container">
      <h1>✅TODOS✅</h1>
      <Input />
      <ItemList />
      <FilterBox />
      <CheckedDelete />
    </div>
  );
};

export default App;
