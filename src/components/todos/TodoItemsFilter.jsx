import styles from "../../styles/TodoList.module.css";
import TodoItem from "./TodoItem.jsx";
import { PATH_ACTIVE, PATH_ALL } from "../../constants.js";

const filterCompleted = (todos) => todos.filter(todo => todo.isDone === true);

const filterActive = (todos) => todos.filter(todo => todo.isDone === false);

const doFilter = (path, todos) => {
    if (path === PATH_ALL) return todos;
    if (path === PATH_ACTIVE) return filterActive(todos);
    return filterCompleted(todos);
};

export function TodoItemsFilter({ todos, path, updateTodoState, deleteTodo, onDragStart, onDragOver, onDragEnd }) {
    return (
        <div className={styles.todolist__itemWrap}>
            {doFilter(path, todos).map(todo => <TodoItem key={todo.id} todo={todo} updateTodoState={updateTodoState} deleteTodo={deleteTodo} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd}  />)}
        </div>
    );
};