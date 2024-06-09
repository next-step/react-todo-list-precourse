export const loadTodos = () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos-app"));
  return savedTodos ? savedTodos : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem("todos-app", JSON.stringify(todos));
};
export const createAddTodo = (setTodos) => (todo) => {
  setTodos((prevTodos) => [
    ...prevTodos,
    { id: Date.now(), text: todo, completed: false },
  ]);
};

export const createDelTodo = (setTodos) => (id) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

export const createToggleTodo = (setTodos) => (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    })
  );
};
