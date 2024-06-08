import "./Main.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useTodoState from "./components/hooks/useTodoState";

function Main() {
    const {
        todos, filter, activeCount, filteredTodos,
        addTodo, toggleComplete, deleteTodo, clearCompleted, changeFilter
    } = useTodoState();

    return (
        <div id="root">
            <section className="todoapp">
                <Header />
                <Body
                    todos={filteredTodos}
                    addTodo={addTodo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    activeCount={activeCount}
                    filter={filter}
                    clearCompleted={clearCompleted}
                    changeFilter={changeFilter}
                />
                <Footer filter={filter} changeFilter={changeFilter} />
            </section>
        </div>
    );
}

export default Main;
