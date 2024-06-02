import React, {useEffect, useState} from 'react'
import Item from './Item'

export default function TodoList({itemList,updateItemList, mode, updateNumber}) {
    
    const [todoList, settodoList] = useState(itemList)

    useEffect(() => {
        settodoList(itemList)
    }, [itemList])
    
    const deleteItem = (id) => {
        const newItemList = itemList.filter(item => item.id !== id);
        settodoList(newItemList);
        updateItemList(newItemList); // 부모에 전달
    }

    const renderList = () => {
        if(mode === 1){ // all
            return todoList.map(todoItem => (
                <Item key={todoItem.id} 
                    item={todoItem} 
                    onDelete={deleteItem}
                    updateNumber={updateNumber}/>
            ))
        }else if(mode === 2){ // active
            const active = todoList.filter(todoItem =>!todoItem.checked)
            // console.log('활성' , active)

            return active.map(todoItem => (
                <Item key={todoItem.id} 
                    item={todoItem} 
                    onDelete={deleteItem}
                    updateNumber={updateNumber}/>
            ))
        }else if(mode === 3){ // completed
            const completed = todoList.filter(todoItem => todoItem.checked)
            // console.log('완료', completed)

            return completed.map(todoItem => (
                <Item key={todoItem.id} 
                    item={todoItem} 
                    onDelete={deleteItem}
                    updateNumber={updateNumber}/>
            ))
        }
    }

    return (
        <div className='todoList'>
            {renderList()}
        </div>
    )
}
