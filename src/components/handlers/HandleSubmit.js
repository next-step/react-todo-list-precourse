const HandleSubmit = (e, NewID, inputRef, lists, setLists) => {
  e.preventDefault();

  const newTodo = inputRef.current.value;
  if (!newTodo.trim()) return; // Avoid empty submissions

  const todoObject = { id: NewID(), text: newTodo, completed: false };

  localStorage.setItem(newTodo, JSON.stringify(todoObject));

  const storageItem = localStorage.getItem(newTodo);
  const newItem = JSON.parse(storageItem);

  setLists([...lists, newItem]);
  inputRef.current.value = "";
};

export default HandleSubmit;
