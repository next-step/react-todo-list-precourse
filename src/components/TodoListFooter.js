import React from 'react'
import './TodoListFooter.css'

const TodoListFooter = ({ todolist, setFilter, clearCompleted }) => {
    let activeTodocount = 0;
    const activeTodo = todolist.filter(todo =>{
        if (todo.completed === false){
            activeTodocount += 1;
        }
        return activeTodocount;
        }
    )
    return React.createElement('div',{className: 'todoListFooterDiv' },
        React.createElement('p',null,`${activeTodocount} item left!`),
        React.createElement('div',{className:'listStateBtnDiv' },
            React.createElement('button',{className:'listStateBtn'},'All'),
            React.createElement('button',{className:'listStateBtn'},'Active'),
            React.createElement('button',{className:'listStateBtn'},'Completed')
        ),
        React.createElement('button',{className:'clearBtn'},'Clear Completed')
    )
}

export default TodoListFooter