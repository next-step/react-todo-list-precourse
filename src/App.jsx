import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Distribute from "./components/Distribute";

function App() {

  const [itemList, setItemList] = useState([]); // item list
  const [input, setInput] = useState(''); // input
  const [mode, setMode] = useState(1) // all
  const [itemNum, setItemNum] = useState(0) 

  const addItem = (e) => {
    if(input.trim() !== ''){ // 아무것도 입력하지 않았을 때 방지.
      const item = {
        id: Date.now(),
        text: input,
        checked : false,
      }
      setItemList([...itemList,item])
      setInput('');
      setItemNum(itemNum+1)
      e.preventDefault(); // 페이지 새로고침해도 데이터 유지
      console.log(itemList)
    }
  }

  const updateItemList = (newItemList) => {
    setItemList(newItemList); // 업데이트된 리스트
  };

  const deleteCompleted = (checked) => {
    const newItemList = itemList.filter(item => item.checked !== true);
    setItemList(newItemList);
  }

  const modeChange = (newMode) => {
    setMode(newMode);
  }

  const updateNumber = () => {
    const remainingItems = itemList.filter(item => item.checked !== true).length;
    setItemNum(remainingItems);
  }
    
  return (
    <div className="app">
      <h3>To do List</h3>
      <div className='inputWrapper'>
        <input className="inputItem" 
                placeholder="할 일을 추가하세요!" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                onKeyDown={e => {
                  if(e.key === 'Enter') {
                    addItem(e);  
                }}} />
        <button className="btn-input" onClick={addItem}>Add</button>
      </div>
      <Distribute modeChange={modeChange} />
      <TodoList itemList={itemList} 
                updateItemList={updateItemList} 
                mode={mode}
                updateNumber={updateNumber} />
      <div className='footer'>
        <div className='item-infor'>{itemNum} items left!</div>
        <button className='deleteCompleted' onClick={deleteCompleted}>Delete Completed Item</button>
      </div>
      
    </div>
  );
}

export default App;