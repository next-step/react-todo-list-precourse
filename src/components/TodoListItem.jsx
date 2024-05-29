import React from "react"
import { MdRemoveCircleOutline } from "react-icons/md"

const TodoListItem = ({ todo, onRemove, onTouched }) => {
  const { id, text, checked } = todo
  return (
    <div className="TodoListItem" onClick={() => onTouched(id)}>
      <div className={`item ${checked ? "checked" : ""}`}>
        {" "}
        {/* 'item' 클래스 추가 */}
        <div className="text">{text}</div>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation() // 이벤트 버블링 방지
            onRemove(id)
          }}
        >
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  )
}

export default TodoListItem
