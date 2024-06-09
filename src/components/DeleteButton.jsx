import deleteImg from "../img/deleteImg.png";
import deleteTodo from "../utils/deleteTodo";

function DeleteButton({index, todos, setTodos}) {
  const handleClick = () => {
    deleteTodo(index, todos, setTodos); // 클릭 이벤트가 발생했을 때 실행될 함수
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