import "./styles/TodoList.css";
import { Header, Main, Footer } from "../components/index";
import { TodoProvider } from "../contexts/TodoContext";

const TodoList = () => {
  return (
    <TodoProvider>
      <div className="todoList">
        <Header />
        <Main />
        <Footer />
      </div>
    </TodoProvider>
  );
};

export default TodoList;
