import React, {useCallback, useState} from "react"
import "./App.css"
import Header from "./src/component/Header"
import List from "./src/component/List"
import Maker from "./src/component/Maker"
function App(){



  const [TodoList, setTodoList] = useState([])
  const [checkTodoList, setCheckTodoList] = useState([])
  const [showChecked, setShowChecked] = useState(false)

  const onRemove = (id) => {
    setTodoList(TodoList.filter((todo) => todo.id !== id))
  }

  const checkpush = (id, content) => {
    const newcheck = {
      id : id,
      isDone : true,
      content : content

    }
    setCheckTodoList([...checkTodoList, newcheck])
  }
  const toggleCheckedList = () => {
    setShowChecked(!showChecked); // 버튼 클릭 이벤트 핸들링 함수
  };

  const pushthing = (content)=> {
    const newTodo = {
      id:TodoList.length,
      isDone : false,
      content : content
    };
    setTodoList([...TodoList, newTodo])
  }
    return (
     <div className="App">
   <Header/>
   <Maker pushthing = {pushthing}/>
   <button onClick={toggleCheckedList}>
    {showChecked ? "모든 항목 보기" : "완료한 항목 보기"}
   </button>
   <List TodoList = {showChecked ? checkTodoList : TodoList} onRemove={onRemove} checkpush = {checkpush}/>
    </div>
    )
}
export default App;