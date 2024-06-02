import React from 'react'
import Item from './Item'

export default function TodoList({itemList}) {
  

    return (
        <div className='todoList'>
            {itemList.map(todoItem => (
                <Item key={todoItem.id} item={todoItem}/>
            ))}
        </div>
    )
}
