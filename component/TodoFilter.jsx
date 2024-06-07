import React from 'react'
import '../src/main.css'

export default function TodoFilter({ filter, setFilter }) {
    return (
        <div className="filters">
            <button 
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button 
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
            <button 
                className={filter === 'incomplete' ? 'active' : ''}
                onClick={() => setFilter('incomplete')}
            >
                Incomplete
            </button>
        </div>
    )
}