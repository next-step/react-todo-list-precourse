import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoLIst';

const Todo = () => {
  return (
    <section>
      <Header title="todos" />
      <main>
        <TodoList />
      </main>
  </section>
  );
};

export default Todo;
