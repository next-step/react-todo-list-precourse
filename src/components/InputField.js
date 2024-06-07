import React,{useState} from 'react'
import Input from './Input'
import '../main.css'

function InputField({addTodo}) {
  const [inputValue, setInputValue] = useState('')

  const inputChange = (event) => setInputValue(event.target.value)

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') todoSubmit()
  }

  const todoSubmit = () => {
    if (inputValue.trim()) {
      addTodo(inputValue)
      setInputValue('')
    }
  }

  return React.createElement(
    'div', {className: 'inputContainer' },
    React.createElement(Input, {
      inputValue, inputChange, handleKeyPress
    }),
    React.createElement('button', {className: 'addButton',onClick: todoSubmit}, 'ADD')
  )
}

export default InputField