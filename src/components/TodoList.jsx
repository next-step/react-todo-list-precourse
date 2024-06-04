import { PATH_ACTIVE, PATH_ALL } from "../constants.js";
import TodoHeader from "./todos/TodoHeader.jsx";
import { TodoInput } from "./todos/TodoInput.jsx";
import { useTodoList } from "../hooks/useTodoList.js";
import { usePath } from "../hooks/usePath.js";
import TodoItem from "./todos/TodoItem.jsx";
import styles from "../styles/TodoList.module.css"

const filterCompleted = (todos) => todos.filter(todo => todo.isDone === true);

const filterActive = (todos) => todos.filter(todo => todo.isDone === false);

const doFilter = (path, todos) => {
    if (path === PATH_ALL) return todos;
    if (path === PATH_ACTIVE) return filterActive(todos);
    return filterCompleted(todos);
}

export function TodoList() {
    const { path, setPath } = usePath();
    const { todos, addTodo, updateTodoState, deleteTodo, activeCnt } = useTodoList();
    return (
        <div className={styles.todolist}>
            <TodoHeader updatePathName={setPath} />
            <TodoInput addTodo={addTodo} />
            {activeCnt + "개 남음"}
            <div className={styles.todolist__itemWrap}>
                {doFilter(path, todos)
                    .map(todo => <TodoItem key={todo.id} todo={todo} updateTodoState={updateTodoState} deleteTodo={deleteTodo} />)
                }
            </div>
        </div>
    );
}