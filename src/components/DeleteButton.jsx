import deleteImg from "../img/deleteImg.png";
import deleteTodo from "../utils/deleteTodo";

function DeleteButton({index, todos, setTodos}) {
  const handleClick = () => {
    deleteTodo(index, todos, setTodos);
  };

  return(
      <img
        src={deleteImg}
        alt="delete"
        onClick={handleClick}
      />
  )
}

export default DeleteButton;