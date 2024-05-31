import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import EditTodoForm from './EditTodoForm'
import Filter from './Filter'
import SelectAll from './SelectAll'
import DeleteCompleteTodo from './DeleteCompleteTodo'
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
  editTask,
  completeAllTodos,
  incompleteAllTodos,
  deleteCompletedTodos,
  getIncompleteCount,
} from './Actions'

const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  const [nextId, setNextId] = useState(0)
  const [active, setActive] = useState(0)

  const renderTodoItems = (todos, editTask, toggleComplete, deleteTodo, editTodo) => {
    let filteredTodos = todos

    if (active === 1) filteredTodos = todos.filter(todo => !todo.completed)
    else if (active === 2) filteredTodos = todos.filter(todo => todo.completed)

    return filteredTodos.map((todo, index) =>
      todo.isEditing ? (
        <EditTodoForm editTodo={(task, id) => editTask(task, id, todos, setTodos)} task={todo} key={index} />
      ) : (
        <TodoItem
          task={todo}
          key={index}
          toggleComplete={id => toggleComplete(id, todos, setTodos)}
          deleteTodo={id => deleteTodo(id, todos, setTodos)}
          editTodo={id => editTodo(id, todos, setTodos)}
        />
      )
    )
  }

  return (
    <div className='TodoContainer'>
      <h1>Todo-List</h1>
      <TodoForm addTodo={todo => addTodo(todo, todos, setTodos, nextId, setNextId)} />
      <Filter active={active} setActive={setActive} />
      {renderTodoItems(todos, editTask, toggleComplete, deleteTodo, editTodo)}
      <SelectAll allCheck={completeAllTodos} allUncheck={incompleteAllTodos} todos={todos} setTodos={setTodos} />
      <DeleteCompleteTodo clearTodos={deleteCompletedTodos} todos={todos} setTodos={setTodos} remainCount={getIncompleteCount} />
    </div>
  )
}

export default TodoContainer
