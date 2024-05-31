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
  return <div className="select_all" onClick={checkAll} />;
}

export default TextboxCheck;
