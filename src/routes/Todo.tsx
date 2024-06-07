import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TodoList from '../components/TodoList/TodoList';

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
