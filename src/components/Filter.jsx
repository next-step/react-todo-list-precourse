import React from 'react'
import './Filter.css'

const Filter = ({ activeCount, setFilter, filter, clearCompleted }) => {

  return (
    <div className='filter'>
        <div className='activeCount'>{activeCount} item left!</div>
        <div className='filterGroup'>
            <button className={`btn btnFilter ${filter === 'all' ? 'selected' : 'unseletected'}`} onClick={() => setFilter('all')}>All</button>
            <button className={`btn btnFilter ${filter === 'active' ? 'selected' : 'unselected'}`} onClick={() => setFilter('active')}>Active</button>
            <button className={`btn btnFilter ${filter === 'completed' ? 'selected' : 'unselected'}`} onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <button className='clearCompleted btn' onClick={clearCompleted}>Clear completed</button>
    </div>
  )
}

export default Filter