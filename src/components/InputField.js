import React from 'react'
import './InputField.css'

function InputField() {
  return React.createElement(
    'div',
    {className: 'inputContainer' },
    React.createElement('input', {type: 'text', placeholder: 'What needs to be done?'}, null),
    React.createElement('button', {className: 'addButton'}, 'ADD')
  )
}

export default InputField