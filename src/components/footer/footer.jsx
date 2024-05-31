import React from "react";
import "./footer.css";

function Footer({ todos, setTodos }) {
  let todo_length = todos.filter((todo) => {
    if (todo.checked) return false;
    return true;
  }).length;

  function handleClear() {}
  return (
    <div className="footer">
      <div className="left">
        {todo_length} item{todo_length == 1 ? "" : "s"} left!
      </div>
      <div className="clear" onClick={handleClear}>
        Clear completed
      </div>
    </div>
  );
}

export default Footer;
