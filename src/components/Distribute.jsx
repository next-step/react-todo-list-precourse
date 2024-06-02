import React, {useState} from 'react'
import TodoList from './TodoList'
import './distribute.css'
export default function Distribute({modeChange}) {
  
    const all = e => {
      modeChange(1)
    }
    const active = () => modeChange(2)
    const completed = () => modeChange(3)

    

    return (
    <div className='dis-wrapper'>
        <button className='all' onClick={all}>All</button>
        <button className='active' onClick={active}>Active</button>
        <button className='completed' onClick={completed}>Completed</button>
    </div>
  )
}
