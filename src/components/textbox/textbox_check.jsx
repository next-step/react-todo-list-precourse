import "./textbox.css";

function TextboxCheck({ todos, setTodos }) {
  const checkAll = () => {
    const allChecked = todos.every((todo) => todo.checked);
    setTodos(
      todos.map((todo) => {
        return { ...todo, checked: !allChecked };
      })
    );
  };
  const allChecked = todos.every((todo) => todo.checked);
  return (
    <div className={allChecked ? "select_all" : "select"} onClick={checkAll} />
  );
}

export default TextboxCheck;
