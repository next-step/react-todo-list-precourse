import React, { useState } from 'react'
import '../styles/InputForm.css'

export default function InputForm({ Todo, setTodo }) {

    const [value, setValue] = useState('');
    

  return (
    <form className='inputForm'>
      <input
        className='inputTodo'
        type='text'
        name='value'
        placeholder='What needs to be done?'
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
      <button className='button2' type='submit'>submit</button>
    </form>
  );
}