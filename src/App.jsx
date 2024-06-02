import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {

  const [itemList, setItemList] = useState([]); // item list
  const [input, setInput] = useState(''); // input

  const addItem = (e) => {
    if(input.trim() !== ''){
      const item = {
        id: itemList.length,
        text: input,
        checked : false,
      }

      setItemList([...itemList,item])
      setInput('');
      e.preventDefault(); // 페이지 새로고침해도 ㄱㅊ
      console.log(itemList)
    }
  }
  
  return (
    <div className="app">
      <h3>To do List</h3>
      <div className='inputWrapper'>
        <input className="inputItem" placeholder="할 일을 추가하세요!" value={input} onChange={e => setInput(e.target.value)}></input>
        <button className="btn-input" onClick={addItem}>Add</button>
      </div>
      <TodoList itemList={itemList} />
    </div>
  );
}

export default App;