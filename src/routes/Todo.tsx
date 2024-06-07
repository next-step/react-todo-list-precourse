import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoLIst';
import Footer from '../components/Footer/Footer';

const Todo = () => {
  return (
    <section>
      <Header title="todos" />
      <main>
        <TodoList />
      </main>
      <Footer />
    </section>
  );
};

export default Todo;
