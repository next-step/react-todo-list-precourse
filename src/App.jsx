import React from "react";
import "./App.css";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import FilterBox from "./components/FilterBox";

const App = () => {
  return (
    <div className="container">
      <h1>✅TODOS✅</h1>
      <Input />
      <ItemList />
      <FilterBox />
    </div>
  );
};

export default App;
