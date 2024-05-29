import { useState } from "react";
import InputForm from "./components/InputForm";
import TodoLists from "./components/TodoLists";
import { Todo } from "./Modules/Todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <h1>todos</h1>
      <InputForm
        setTodos={(newTodo: Todo) => {
          setTodos((prev) => [...prev, newTodo]);
        }}
      />
      <TodoLists todos={todos} />
    </div>
  );
};

export default App;
