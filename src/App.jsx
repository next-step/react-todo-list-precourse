import React, { useState } from 'react';
import Header from './components/header.jsx';
import TodoList from './components/todolist.jsx';
import Footer from './components/footer.jsx';
import UseTodoState from './hooks/useTodo.jsx';

function App() {
    const { todos, addTodo, deleteTodo, changeCompleted } = UseTodoState();

    return (
        <div className="app">
            <h1>TODO</h1>
            <div className="mainframe">
                <Header addTodo={addTodo}/>
                <TodoList todos={todos} deleteTodo={deleteTodo} changeCompleted={changeCompleted}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;