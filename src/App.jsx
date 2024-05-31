import Textbox from "./components/textbox/textbox";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <h1>Todos</h1>
      <Textbox setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
