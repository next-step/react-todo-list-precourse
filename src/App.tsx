import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import { Todo } from "./Modules/Todo";
import TodoLists from "./components/TodoList/TodoLists";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div id="App">
      <h1>todos</h1>
      <InputForm
        setTodos={(newTodo: Todo) => setTodos((prev) => [...prev, newTodo])}
      />
      <TodoLists todos={todos} />
    </div>
  );
};

export default App;
