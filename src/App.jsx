import React from "react";
import "./App.css";
import Input from "./components/Input";
import ItemList from "./components/ItemList";

const App = () => {
  return (
    <div className="container">
      <h1>✅TODOS✅</h1>
      <Input />
      <ItemList />
    </div>
  );
};

export default App;
