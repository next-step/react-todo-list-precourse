import React from 'react'
import './InputField.css'

const InputField = () => {
  return (
    React.createElement('input', {className: 'todoInputField', type: 'text', placeholder: 'What needs to be done?'}, null) 
  )
}

export default InputField