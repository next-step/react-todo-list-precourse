import React from 'react'
import '../styles/FilterTodo.css'

export default function FilterTodo({ setFilterOption }) {
   return (
      <div className="filtering">
         <button onClick={() => setFilterOption('all')}>All</button>
         <button onClick={() => setFilterOption('active')}>Active</button>
         <button onClick={() => setFilterOption('completed')}>Completed</button>
      </div>
   )
}
