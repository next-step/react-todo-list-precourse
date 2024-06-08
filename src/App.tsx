import InputForm from "./components/InputForm/InputForm";
import { FilterStateType, Todo } from "./Model/Todo";
import TodoLists from "./components/TodoList/TodoLists";
import "./App.css";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import useTodos from "./hooks/useTodos";

const App = () => {
  const {
    todos,
    leaseTodos,
    filterState,
    filteredTodos,
    setTodos,
    setFilterState,
    setIsCompletedFromId,
    deleteTodoFromId,
  } = useTodos();

  return (
    <div id="App">
      <h1>todos</h1>
      <InputForm
        setTodos={(newTodo: Todo) => setTodos((prev) => [...prev, newTodo])}
      />
      <TodoLists
        todos={filteredTodos}
        setIsCompleted={setIsCompletedFromId}
        deleteTodoFromId={deleteTodoFromId}
      />
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
