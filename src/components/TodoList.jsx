import TodoHeader from "./todos/TodoHeader.jsx";
import { TodoInput } from "./todos/TodoInput.jsx";
import { useTodoList } from "../hooks/useTodoList.js";
import { usePath } from "../hooks/usePath.js";
import styles from "../styles/TodoList.module.css"
import { useDragAndDrop } from "../hooks/useDragAndDrop.js";
import { TodoItemsFilter } from "./todos/TodoItemsFilter.jsx";
import { createPortal } from "react-dom";
import { memo } from "react";

const ItemDropDestination = memo(function ({ top = 0 }) {
    console.log('portal');
    return (
        createPortal(
            <div className={styles.todolist_dragDest}></div>, document.body
        )
    )
})

export function TodoList() {
    const { path, setPath } = usePath();
    const { todos, addTodo, updateTodoState, deleteTodo, activeCnt, rearrangeTodos } = useTodoList();
    const { onDragStart, onDragOver, onDragEnd } = useDragAndDrop(rearrangeTodos);
    return (
        <div className={styles.todolist}>
            <TodoHeader updatePathName={setPath} />
            <TodoInput addTodo={addTodo} />
            {activeCnt + "개 남음"}
            <TodoItemsFilter path={path} todos={todos} updateTodoState={updateTodoState} deleteTodo={deleteTodo} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd} />
            <ItemDropDestination top={0}/>
            {/*<Portal top={0} />*/}
        </div>
    );
}