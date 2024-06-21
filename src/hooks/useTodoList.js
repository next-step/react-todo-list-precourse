import { useCallback, useEffect, useState } from "react";

// closure? 일단 전역 객체는 아님
let idCnt = -1;
let activeCnt = 0;

const increaseActiveCnt = () => activeCnt += 1;
const decreaseActiveCnt = () => activeCnt -= 1;

const createTodoInstance = (todo) => {
    increaseActiveCnt();
    return { id: idCnt++, content: todo, isDone: false };
};

const newTodoInstance = (todo, id, revertedIsDone) => {
    if (revertedIsDone) {
        decreaseActiveCnt();
    }
    else {
        increaseActiveCnt();
    }

    return { id: id, content: todo, isDone: revertedIsDone };
};

const updateTodoStateImmutable = (todo, target) => {
    if (todo.id !== target.id) return todo;
    return newTodoInstance(target.content, target.id, target.isDone);
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

const swap = (setTodos) => (srcId, destId) => setTodos(prev => {
    let temp, srcIdx, destIdx;
    const copy = prev.map((todo, i) => {
        if(todo.id === srcId) {
            srcIdx = i;
        } else if (todo.id === destId) {
            destIdx = i;
        }
        return todo;
    });
    temp = copy[destIdx];
    copy[destIdx] = copy[srcIdx];
    copy[srcIdx] = temp;
    return copy;
});

const insertInto = (setTodos) => (srcId, destId) => setTodos(prev => {
    let insertItem, destIdx;
    let items = prev.reduce((acc, todo, i) => {
        if(todo.id === srcId) {
            insertItem = todo;
            return acc;
        } else if (todo.id === destId) {
            destIdx = i;
        }
        acc.push(todo);
        return acc;
    }, []);
    items.splice(destIdx, 0, insertItem);
    return items;
});

export function useTodoList() {
    const [todos, setTodos] = useState(idCnt === -1 ? cacheOnInit() : readCache() ?? []);
    const addTodo = useCallback((todo) => setTodos(prev => [...prev, createTodoInstance(todo)]), []);
    const updateTodoState = useCallback(
        (target) => setTodos(prev => prev.map(todo => updateTodoStateImmutable(todo, target)))
        , []);
    const deleteTodo = useCallback(
        (id) => setTodos(prev => prev.filter(todo => filterAndDecreaseIfDone(todo, id)))
        , []);
    const rearrangeTodos = useCallback(insertInto(setTodos), []);
    useEffect(() => cacheTodo(todos), [todos]);

    return { todos, addTodo, updateTodoState, deleteTodo, activeCnt, rearrangeTodos };
}