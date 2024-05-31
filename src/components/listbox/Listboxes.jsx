import Listbox from "./Listbox";

const Listboxes = ({ todos, setTodos, active }) => {
  return (
    <>
      {todos
        .filter((todo) => {
          if (active === 0) return true;
          if (active === 1) return !todo.checked;
          if (active === 2) return todo.checked;
        })
        .map((todo, index) => (
          <Listbox key={index} todo={todo} setTodos={setTodos} index={index} />
        ))}
    </>
  );
};

export default Listboxes;
