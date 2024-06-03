export const loadTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
    };
    
export const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};  