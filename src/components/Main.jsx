import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='Main'>
      <div className='title'>todos</div>
      <div className='container'>
        <span class="material-symbols-outlined down">keyboard_arrow_down</span>
        <input className='input' placeholder='What needs to be done?' />
      </div>
    </div>
  )
}

export default Main