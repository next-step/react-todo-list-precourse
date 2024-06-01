// 할 일을 추가하는 함수
export const addTodo = (todo, todos, setTodos, nextId, setNextId) => {
  setTodos([...todos, { id: nextId, task: todo, completed: false, isEditing: false }])
  setNextId(nextId + 1)
}

// 할 일을 삭제하는 함수
export const deleteTodo = (id, todos, setTodos) => {
  setTodos(todos.filter(todo => todo.id !== id))
}

// 완료 ↔ 미 완료 토글 함수
export const toggleComplete = (id, todos, setTodos) => {
  setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
}

// 상태를 편집중으로 변경해주는 함수
export const editTodo = (id, todos, setTodos) => {
  setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)))
}

// 이미 추가한 할 일을 편집하는 함수
export const editTask = (task, id, todos, setTodos) => {
  setTodos(todos.map(todo => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)))
}

// 전체 할 일을 완료 상태로 변경하는 함수
export const completeAllTodos = (todos, setTodos) => {
  setTodos(todos.map(todo => ({ ...todo, completed: true })))
}

// 전체 할 일을 미완료 상태로 변경하는 함수
export const incompleteAllTodos = (todos, setTodos) => {
  setTodos(todos.map(todo => ({ ...todo, completed: false })))
}

// 완료된 할 일을 일괄 삭제하는 함수
export const deleteCompletedTodos = (todos, setTodos) => {
  setTodos(todos.filter(todo => !todo.completed))
}

// 완료되지 않은 할 일의 개수를 계산하는 함수
export const getIncompleteCount = todos => {
  return todos.filter(todo => !todo.completed).length
}
