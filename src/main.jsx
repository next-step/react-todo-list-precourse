import React from 'react'
import './main.css'
import Header from '/component/Header'
import TodoList from '/component/TodoList'

// TodoList Logic
export default function main() {
    return (
        <div className="container">
            <Header/>
            <TodoList />
        </div>
    )
}