import React, { useState, useEffect } from 'react';
import Header from './components/header.jsx';
import TodoList from './components/todolist.jsx';
import Footer from './components/footer.jsx';
import UseTodoState from './hooks/useTodo.jsx';

function activeLen(todos) {
    const activeTodos = todos.filter((todo) => todo.isCompleted == false);
    return activeTodos.length;
}

function App() {
    const { todos, setTodos, addTodo, deleteTodo, changeCompleted } = UseTodoState();
    const [filter, useFilter] = useState('All');

    useEffect(() => {
        localStorage.setItem("todoItem", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="app">
            <h1>TODO</h1>
            <div className="mainframe">
                <Header addTodo={addTodo}/>
                <TodoList filter={filter} todos={todos} deleteTodo={deleteTodo} changeCompleted={changeCompleted}/>
                <Footer filter={filter} changeFilter={useFilter} todoLeft={activeLen(todos)}/>
            </div>
        </div>
    );
}

export default App;