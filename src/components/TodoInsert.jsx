import React, { useCallback, useState } from "react"

const TodoListInsert = ({ onInsert }) => {
  const [value, setValue] = useState("")

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      onInsert(value)
      setValue("")
      e.preventDefault()
    },
    [onInsert, value]
  )

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="What needs to be done?" />
    </form>
  )
}
export default TodoListInsert
