import "./footer.css";

function FooterCount({ todos }) {
  let todo_length = todos.filter((todo) => {
    if (todo.checked) return false;
    return true;
  }).length;
  return (
    <div className="left">
      {todo_length} item{todo_length == 1 ? "" : "s"} left!
    </div>
  );
}

export default FooterCount;
