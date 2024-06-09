import { useState } from 'react';

const useTodoState = () => {
    const [todos, setTodos] = useState([]);
    const [next, setNext] = useState(0);

    const addTodo = (todo) => {
        setNext(next+1);
        setTodos((prev) => [...prev, {'content':todo, 'isCompleted':false, 'id':next}]);
    };

    const deleteTodo = (target) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== target));
    };

    const changeCompleted = (target) => {

    }

    return { todos, addTodo, deleteTodo, changeCompleted };
}

export default useTodoState;