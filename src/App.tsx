import { TodoProvider } from './context/TodoContext';
import Todo from './routes/Todo';

export default function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}
