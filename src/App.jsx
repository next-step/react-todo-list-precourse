import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {

  const [itemList, setItemList] = useState([]); // item list
  const [input, setInput] = useState(''); // input

  const addItem = (e) => {
    if(input.trim() !== ''){ // 아무것도 입력하지 않았을 때 방지.
      const item = {
        id: Date.now(),
        text: input,
        checked : false,
      }

      setItemList([...itemList,item])
      setInput('');
      e.preventDefault(); // 페이지 새로고침해도 데이터 유지
      console.log(itemList)
    }
  }

  const updateItemList = (newItemList) => {
    setItemList(newItemList);
  };

  const deleteCompleted = (checked) => {
    const newItemList = itemList.filter(item => item.checked !== true);
    setItemList(newItemList);
  }

  return (
    <div className="app">
      <h3>To do List</h3>
      <div className='inputWrapper'>
        <input className="inputItem" placeholder="할 일을 추가하세요!" value={input} onChange={e => setInput(e.target.value)}></input>
        <button className="btn-input" onClick={addItem}>Add</button>
      </div>
      <TodoList itemList={itemList}  updateItemList={updateItemList}/>
      <button className='deleteCompleted' onClick={deleteCompleted}>Delete Completed Item</button>
    </div>
  );
}

export default App;