import "./listbox.css";
import ListCheckbox from "./listbox_checkbox";
import ListboxDelete from "./listbox_delete";
import ListboxText from "./listbox_text";

function Listbox({ todo, setTodos, index }) {
  return (
    <div className="list_box">
      <ListCheckbox todo={todo} setTodos={setTodos} />
      <ListboxText todo={todo} />
      <ListboxDelete todo={todo} setTodos={setTodos} />
    </div>
  );
}

export default Listbox;
