import React, {useCallback, useState} from "react"
import "./App.css"
import Header from "./src/component/Header"
import List from "./src/component/List"
import Todomaker from "./src/component/Todomaker"
function App(){



  const [TodoList, setTodoList] = useState([])
  const [checkTodoList, setCheckTodoList] = useState([])
  const [showChecked, setShowChecked] = useState(false)

  const onRemove = (id) => {
    setTodoList(TodoList.filter((todo) => todo.id !== id))
  }

  const checkPush = (id, content) => {
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

  const addNewTodo = (content)=> {
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
   <Todomaker addNewTodo = {addNewTodo}/>
   <button className="checkbtn" onClick={toggleCheckedList}>
    {showChecked ? "모든 항목 보기" : "완료한 항목 보기"}
   </button>
   <List TodoList = {showChecked ? checkTodoList : TodoList} onRemove={onRemove} checkPush = {checkPush}/>
    </div>
    )
}
export default App;