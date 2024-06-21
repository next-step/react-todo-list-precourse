import TodoHeader from "./todos/TodoHeader.jsx";
import TodoInput from "./todos/TodoInput.jsx";
import { useTodoList } from "../hooks/useTodoList.js";
import { usePath } from "../hooks/usePath.js";
import styles from "../styles/TodoList.module.css"
import { useDragAndDrop } from "../hooks/useDragAndDrop.js";
import { TodoItemsFilter } from "./todos/TodoItemsFilter.jsx";

export function TodoList() {
    const { path, setPath } = usePath();
    const { todos, addTodo, updateTodoState, deleteTodo, activeCnt, rearrangeTodos } = useTodoList();
    const { onDragStart, onDragOver, onDragEnd, portalRef } = useDragAndDrop(rearrangeTodos);
    return (
        <div className={styles.todolist}>
            <TodoHeader updatePathName={setPath} portalRef={portalRef} />
            <TodoInput addTodo={addTodo} />
            {activeCnt + "개 남음"}
            <TodoItemsFilter path={path} todos={todos} updateTodoState={updateTodoState} deleteTodo={deleteTodo} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd} />
        </div>
    );
}