import React, {useEffect, useState} from 'react'
import Item from './Item'

export default function TodoList({itemList, updateItemList}) {
    
    const [todoList, settodoList] = useState(itemList)

    useEffect(() => {
        settodoList(itemList)
    }, [itemList])
    
    const deleteItem = (id) => {
        const newItemList = itemList.filter(item => item.id !== id);
        settodoList(newItemList);
        updateItemList(newItemList); // 부모에 전달
    }

    return (
        <div className='todoList'>
            {todoList.map(todoItem => (
                <Item key={todoItem.id} 
                    item={todoItem} 
                    onDelete={deleteItem}/>
            ))}
        </div>
    )
}
