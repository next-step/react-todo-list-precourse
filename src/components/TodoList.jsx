import { PATH_ACTIVE, PATH_ALL } from "../constants.js";
import TodoHeader from "./todos/TodoHeader.jsx";
import { TodoInput } from "./todos/TodoInput.jsx";
import { useTodoList } from "../hooks/useTodoList.js";
import { usePath } from "../hooks/usePath.js";
import TodoItem from "./todos/TodoItem.jsx";

export const createFilterName = (path) => {
    if (path === PATH_ALL) {
        return "All";
    }
    return path.charAt(0).toUpperCase() + path.slice(2);
}

const filterCompleted = (todos) => todos.filter(todo => todo.isDone === true);

const filterActive = (todos) => todos.filter(todo => todo.isDone === false);

const doFilter = (path, todos) => {
    if (path === PATH_ALL) return todos;
    if (path === PATH_ACTIVE) return filterActive(todos);
    return filterCompleted(todos);
}

export function TodoList() {
    const { path, setPath } = usePath();
    const { todos, addTodo, updateTodoState, deleteTodo } = useTodoList();
    return (
        <div>
            <TodoHeader updatePathName={setPath} />
            <TodoInput addTodo={addTodo} />
            {doFilter(path, todos)
                .map(todo => <TodoItem key={todo.id} todo={todo} updateTodoState={updateTodoState} deleteTodo={deleteTodo} />)
            }
        </div>
    );
}