import React from 'react'
import '../main.css'

const TodoListFooter = ({setFilter, clearCompleted, fullTodoList }) => {
    let activeTodocount = 0
    const activeTodo = fullTodoList.filter(todo =>{
        if (!todo.completed)
            activeTodocount += 1
        return activeTodocount
        }
    )
    return React.createElement('div',{className: 'todoListFooterDiv' },
        React.createElement('p',null,`${activeTodocount} item left!`),
        React.createElement('div',{className:'listStateBtnDiv' },
            React.createElement('button',{className:'listStateBtn',onClick: () => setFilter('all')},'All'),
            React.createElement('button',{className:'listStateBtn',onClick: () => setFilter('active')},'Active'),
            React.createElement('button',{className:'listStateBtn',onClick: () => setFilter('completed')},'Completed')
        ),
        React.createElement('button',{className:'clearBtn',onClick: clearCompleted},'Clear Completed')
    )
}

export default TodoListFooter