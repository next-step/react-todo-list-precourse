import { PATH_ALL } from "../constants.js";
import TodoHeader from "./todos/TodoHeader.jsx";
import { TodoInput } from "./todos/TodoInput.jsx";
import { useTodoList } from "../hooks/useTodoList.js";
import { usePath } from "../hooks/usePath.js";

export const createFilterName = (path) => {
    if (path === PATH_ALL) {
        return "All";
    }
    return path.charAt(0).toUpperCase() + path.slice(3);
}

export function TodoList() {
    const { path, setPath } = usePath();
    console.log('todolist', createFilterName(path));
    const { todos, addTodo, updateTodoState, deleteTodo } = useTodoList();
    return (
        <div>
            <TodoHeader updatePathName={setPath} />
            <TodoInput addTodo={addTodo} />
        </div>
    );
}