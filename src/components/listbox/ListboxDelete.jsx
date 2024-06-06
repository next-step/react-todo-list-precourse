import "./listbox.css";

const listboxDelete = ({ todo, setTodos }) => {
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item !== todo));
  };
  return <div className="delete" onClick={handleDelete} />;
};

export default listboxDelete;
