import React from 'react'

export default function FilterTodo({ setFilterOption }) {
   return (
      <div>
         <button onClick={() => setFilterOption('all')}>All</button>
         <button onClick={() => setFilterOption('active')}>Active</button>
         <button onClick={() => setFilterOption('completed')}>Completed</button>
      </div>
   )
}
