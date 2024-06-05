import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import { FilterStateType, Todo } from "./Model/Todo";
import TodoLists from "./components/TodoList/TodoLists";
import "./App.css";
import { filterTodos } from "./utils/todo";
import TodoFilter from "./components/TodoFilter/TodoFilter";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterState, setFilterState] = useState<FilterStateType>("all");
  const filteredTodos = filterTodos(todos, filterState);
  const leaseTodos = filteredTodos.length;

  const setIsCompleted = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, itemIndex) => {
        if (itemIndex === index) {
          return { ...todo, isCompleted: !todo.isCompleted } as Todo;
        }
        return todo;
      })
    );
  };

  return (
    <div id="App">
      <h1>todos</h1>
      <InputForm
        setTodos={(newTodo: Todo) => setTodos((prev) => [...prev, newTodo])}
      />
      <TodoLists todos={filteredTodos} setIsCompleted={setIsCompleted} />
      {todos.length !== 0 && (
        <TodoFilter
          leaseTodos={leaseTodos}
          filterState={filterState}
          setFilterState={(state: FilterStateType) => setFilterState(state)}
        />
      )}
    </div>
  );
};

export default App;
