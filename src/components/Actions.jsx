import EditTodoForm from "./EditTodoForm"
import TodoItem from "./TodoItem"

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

