import "./listbox.css";
import checkBox from "../../images/check_all_icon.svg";
import circleBox from "../../images/circle_icon.svg";

const listCheckbox = ({ todo, setTodos }) => {
  const handleToggle = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((item) => {
        if (item === todo) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return updatedTodos;
    });
  };
  return (
    <div
      className="checkbox"
      onClick={() => {
        handleToggle();
      }}
      style={{
        backgroundImage: todo.checked
          ? `url(${checkBox})`
          : `url(${circleBox})`,
      }}
    ></div>
  );
};

export default listCheckbox;
