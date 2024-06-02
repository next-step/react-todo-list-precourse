import { FilterProvider } from "../contexts/filter/TodosProvider";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { TodoList } from "./TodoList";

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
