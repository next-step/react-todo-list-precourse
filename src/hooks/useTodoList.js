import { useCallback, useState } from "react";

let id = 0;
let activeCnt = 0;

const increaseActiveCnt = () => activeCnt += 1;
const decreaseActiveCnt = () => activeCnt -= 1;

const createTodoInstance = (todo) => {
    increaseActiveCnt();
    return {id: id++, content: todo, isDone: false};
};

const newTodoInstance = (todo, id, revertedIsDone) => {
    if (revertedIsDone) {
        decreaseActiveCnt();
    }
    else {
        increaseActiveCnt();
    }

    return {id: id, content: todo, isDone: revertedIsDone};
};

const updateTodoStateImmutable = (todo, id) => {
    if (todo.id !== id) return todo;
    return newTodoInstance(todo.content, todo.id, !todo.isDone);
}

export function useTodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback((todo) => setTodos(prev => [...prev, createTodoInstance(todo)]), []);
    const updateTodoState = useCallback(
        (id) => setTodos(prev => prev.map(todo => updateTodoStateImmutable(todo, id)))
        , []);
    const deleteTodo = useCallback((id) => setTodos(prev => prev.filter(todo => todo.id !== id)), []);

    return { todos, addTodo, updateTodoState, deleteTodo, activeCnt };
}