import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <header>
          <p>todos</p>
      </header>
      <div className='todoListBody'>
          <todoList/>
      </div>
      <footer>
          <p>Double-click to edit a todo<br/>Created by the TodoMVC Team<br/>Part of <a href='#'>TodoMVC</a></p>
      </footer>
    </div>
  )
}

export default App