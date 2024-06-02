import React, {useState} from 'react'
import TodoList from './TodoList'

export default function Distribute({modeChange}) {
  
    const all = () => modeChange(1)
    const active = () => modeChange(2)
    const completed = () => modeChange(3)

    return (
    <div>
        <button className='all' onClick={all}>All</button>
        <button className='active' onClick={active}>Active</button>
        <button className='completed' onClick={completed}>Completed</button>
    </div>
  )
}
