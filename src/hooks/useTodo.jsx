import { useState } from 'react';

const useTodoState = () => {
    const [todos, setTodos] = useState([{'content':'test1', 'isCompleted':true}, {'content':'test2', 'isCompleted':false}]);

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, {'content':todo, 'isCompleted':false}]);
    };

    const deleteTodo = (index) => {
        var prev = [...todos];
        prev.splice(index, 1);
        setTodos(prev);
    };

    return { todos, addTodo, deleteTodo };
}

export default useTodoState;