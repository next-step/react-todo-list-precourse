import '../styles/Header.css';

interface HeaderProps {
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleCompositionStart: () => void;
  handleCompositionEnd: () => void;
}

const Header: React.FC<HeaderProps> = ({
  newTodo,
  setNewTodo,
  handleKeyDown,
  handleCompositionStart,
  handleCompositionEnd,
}) => (
  <header>
    <h1>todos</h1>
    <div className="input-container">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
    </div>
  </header>
);

export default Header;
