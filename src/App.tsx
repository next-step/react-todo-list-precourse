import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { useTodos } from './hooks/useTodos';

import './styles/App.css';

const App = () => {
  const {
    todos,
    newTodo,
    currentFilter,
    isComposing,
    filteredTodos,
    setNewTodo,
    setCurrentFilter,
    setIsComposing,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    toggleAllTodos,
  } = useTodos();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newTodo.trim() !== '' && !isComposing) {
      event.preventDefault();
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  return (
    <div className="todoapp">
      <Header
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleKeyDown={handleKeyDown}
        handleCompositionStart={handleCompositionStart}
        handleCompositionEnd={handleCompositionEnd}
      />
      <Main
        filteredTodos={filteredTodos}
        toggleAllTodos={toggleAllTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <Footer
        todos={todos}
        currentFilter={currentFilter}
        handleFilterChange={setCurrentFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
