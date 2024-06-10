import React, { useState } from 'react'
import '../styles/InputForm.css'

export default function InputForm({ Todo, setTodo }) {

    const [value, setValue] = useState('');
    
    //할 일을 State에 추가 
    const add = (text) => {
      if(text === '')
          return;

      setTodo([...Todo, {value: text, completed: false}]);
      setValue('');        
    }
    
    //add 호출
    const handleSubmit = (e) => {
      e.preventDefault();
      add(value); 
  }

  return (
    <form className='inputForm' onSubmit={handleSubmit}>
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
