import "./Footer.css";

const FooterComplete = ({ setTodos }) => {
  function handleClear() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.checked));
  }
  return (
    <div className="clear" onClick={handleClear}>
      Clear completed
    </div>
  );
};

export default FooterComplete;
