import "./listbox.css";
import ListCheckbox from "./listboxCheckbox";
import ListboxDelete from "./listboxDelete";
import ListboxText from "./listboxText";

const listbox = ({ todo, setTodos, index }) => {
  return (
    <div className="list_box">
      <ListCheckbox todo={todo} setTodos={setTodos} />
      <ListboxText todo={todo} />
      <ListboxDelete todo={todo} setTodos={setTodos} />
    </div>
  );
};

export default listbox;
