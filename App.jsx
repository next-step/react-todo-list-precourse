import React, {useCallback, useState} from "react"
import "./App.css"
import Header from "./src/component/Header"
import List from "./src/component/List"
import Maker from "./src/component/Maker"
function App(){



  const [TodoList, setTodoList] = useState([])
  const onRemove = (id) => {
    setTodoList(TodoList.filter((todo) => todo.id !== id))
  }

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
   <List TodoList = {TodoList} onRemove={onRemove}/>
    </div>
    )
}
export default App;