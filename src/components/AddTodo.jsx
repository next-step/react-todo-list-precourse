import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출시 페이지가 새로고침 되는 것 방지
        if (!value) return; // 입력값이 비어있으면 추가하지 않음
        addTodo(value); // 입력 값을 addTodo 함수로 전달하여 추가
        setValue('');   // 입력 필드 비우기
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <span class="material-symbols-outlined down">keyboard_arrow_down</span>
                    <input className='input' placeholder='What needs to be done?' value={value} onChange={e => setValue(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default AddTodo