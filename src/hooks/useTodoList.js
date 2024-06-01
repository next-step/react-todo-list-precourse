import { useCallback, useEffect, useState } from "react";
// closure? 일단 전역 객체는 아님
let idCnt = -1;
let activeCnt = 0;

const increaseActiveCnt = () => activeCnt += 1;
const decreaseActiveCnt = () => activeCnt -= 1;

const createTodoInstance = (todo) => {
    increaseActiveCnt();
    return {id: idCnt++, content: todo, isDone: false};
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

const cacheTodo = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const readCache = () => JSON.parse(localStorage.getItem("todos"));

const cacheOnInit = () => {
    const cached = readCache();
    cached.forEach((todo) => {
        idCnt = Math.max(idCnt, todo.id);
        activeCnt += todo.isDone ? 0 : 1;
    });
    idCnt += 1;
    return cached;
};

const filterAndDecreaseIfDone = (todo, id) => {
    if (todo.id === id) {
        if (!todo.isDone) decreaseActiveCnt();
        return null;
    }
    return todo;
}

export function useTodoList() {
    const [todos, setTodos] = useState(idCnt === -1 ? cacheOnInit() : readCache() ?? []);
    const addTodo = useCallback((todo) => setTodos(prev => [...prev, createTodoInstance(todo)]), []);
    const updateTodoState = useCallback(
        (id) => setTodos(prev => prev.map(todo => updateTodoStateImmutable(todo, id)))
        , []);
    const deleteTodo = useCallback(
        (id) => setTodos(prev => prev.filter(todo => filterAndDecreaseIfDone(todo, id)))
        , []);
    useEffect(() => cacheTodo(todos), [todos]);

    return { todos, addTodo, updateTodoState, deleteTodo, activeCnt };
}