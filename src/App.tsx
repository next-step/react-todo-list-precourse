import "./App.css";
import { useTodos } from "./contexts/todos/useTodos";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { TodoInput } from "./components/TodoInput";
import { Text } from "./components/ui/Text";
import { FilterProvider } from "./contexts/filter/TodosProvider";

function App() {
  const { todos } = useTodos();

  return (
    <div className="container">
      <Text variant="primary" size="2xl">
        To Do List
      </Text>
      <TodoInput />
      {todos.length > 0 && (
        <FilterProvider>
          <div className="todo-card">
            <Navigation />
            <TodoList />
            <Footer />
          </div>
        </FilterProvider>
      )}
    </div>
  );
}

export default App;
