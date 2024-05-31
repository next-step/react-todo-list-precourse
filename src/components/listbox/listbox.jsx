import "./Listbox.css";
import ListCheckbox from "./ListboxCheckbox";
import ListboxDelete from "./ListboxDelete";
import ListboxText from "./ListboxText";

const Listbox = ({ todo, setTodos, index }) => {
  return (
    <div className="list_box">
      <ListCheckbox todo={todo} setTodos={setTodos} />
      <ListboxText todo={todo} />
      <ListboxDelete todo={todo} setTodos={setTodos} />
    </div>
  );
};

export default Listbox;
