import React from 'react'

const Input = ({ inputValue, inputChange, handleKeyPress }) => {
  return React.createElement(
    'input', {
        type: 'text', 
        placeholder: 'What needs to be done?',
        value: inputValue,
        onChange: inputChange,
        onKeyPress: handleKeyPress
    }, null)
}

export default Input