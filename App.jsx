import React, {useState} from "react"
import "./App.css"
import Header from "./src/component/Header"
import List from "./src/component/List"
import Maker from "./src/component/Maker"
function App(){
  const tododata = [
    {id :0,
    isDone : false, 
    content : "asdf"},
    {id :1,
      isDone : false, 
      content : "asdfasdf"},
    {id :2,
      isDone : false, 
      content : "asdfasdfasdf"}
    
  ]
  const [TodoList, setTodoList] = useState(tododata)
    return (
     <div className="App">
   <Header/>
   <Maker/>
   <List/>
    </div>
    )
}
export default App;