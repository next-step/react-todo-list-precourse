import "./footer.css";

const footerComplete = ({ setTodos }) => {
  function handleClear() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.checked));
  }
  return (
    <div className="clear" onClick={handleClear}>
      Clear completed
    </div>
  );
};

export default footerComplete;
