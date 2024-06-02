export const getStoredTodos = () => JSON.parse(localStorage.getItem('todos')) || []

export const saveTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos))

export const getFilteredTodos = (todos, filterOption) => {
   if (filterOption === 'active') return todos.filter((todo) => !todo.isCompleted)
   if (filterOption === 'completed') return todos.filter((todo) => todo.isCompleted)
   return todos
}
