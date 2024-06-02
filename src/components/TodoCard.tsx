import { FilterProvider } from "../contexts/filter/FilterProvider";
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
