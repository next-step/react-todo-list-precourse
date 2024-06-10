import React from 'react'
import InputForm from './InputForm'
import List from './List'

export default function ListContainer({ Todo, remove, complete }) {
  return (
    <>
      <div>
        {Todo.map((todo, index) => (
          <List
            index={index}
            todo={todo}
            remove={remove}
            complete={complete}
          />
        ))}
      </div>
    </>
  )
}
