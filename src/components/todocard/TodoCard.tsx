import { FilterProvider } from "../../contexts/filter/FilterProvider";
import { Footer } from "./Footer";
import { Navigation } from "./navigation/Navigation";
import { TodoList } from "./todolist/TodoList";

export const TodoCard = () => {
  return (
    <FilterProvider>
      <div className="todo-card">
        <Navigation />
        <TodoList />
        <Footer />
      </div>
    </FilterProvider>
  );
};
