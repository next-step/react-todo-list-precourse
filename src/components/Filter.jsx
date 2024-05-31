import React, { useState } from 'react'
import '../App.css'

const Filter = ({ active, setActive }) => {
  const option = ['All', 'Active', 'Completed']
  return (
    <div className='filter-wrapper'>
      <div className={`filter ${active === 0 ? 'selected' : ''}`} onClick={() => setActive(0)}>
        {option[0]}
      </div>
      |
      <div className={`filter ${active === 1 ? 'selected' : ''}`} onClick={() => setActive(1)}>
        {option[1]}
      </div>
      |
      <div className={`filter ${active === 2 ? 'selected' : ''}`} onClick={() => setActive(2)}>
        {option[2]}
      </div>
    </div>
  )
}

export default Filter
