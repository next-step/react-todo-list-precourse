import React from 'react'

const Footer = () => {
  return React.createElement(
    'footer',null,
    React.createElement(
      'p',null,
      'Double-click to edit a todo', React.createElement('br'),
      'Created by the TodoMVC Team', React.createElement('br'),
      'Part of ', React.createElement('a', { href: '#' }, 'TodoMVC')
    )
  )
}

export default Footer