import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Distribute from "./components/Distribute";

function App() {
  const savedData = JSON.parse(localStorage.getItem('itemList')) || [];
  const [itemList, setItemList] = useState(savedData); // item list
  const [input, setInput] = useState(''); // input
  const [mode, setMode] = useState(1); // all
  const [itemNum, setItemNum] = useState(itemList.filter(item => item.checked !== true).length);
  const [isComposing, setIsComposing] = useState(false); // IME 입력 상태

  // 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  const addItem = (text) => {
    if (text.trim() !== '') { // 아무것도 입력하지 않았을 때 방지.
      const item = {
        id: Date.now(),
        text: text,
        checked: false,
      };
      setItemList([...itemList, item]);
      setInput('');
      setItemNum(itemNum + 1);
      // console.log(itemList);
    }
  };

  const updateItemList = (newItemList) => {
    setItemList(newItemList); // 업데이트된 리스트
  };

  const deleteCompleted = () => {
    const newItemList = itemList.filter(item => item.checked !== true);
    setItemList(newItemList);
  };

  const modeChange = (newMode) => {
    setMode(newMode);
  };

  const updateNumber = () => {
    const remainingItems = itemList.filter(item => item.checked !== true).length;
    setItemNum(remainingItems);
  };

  return (
    <div className="app">
      <h3>To do List</h3>
      <div className='inputWrapper'>
        <input className="inputItem"
          placeholder="Add Something to do!"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (!isComposing && e.key === 'Enter') {
              addItem(input);
              e.preventDefault(); // prevent the default action
            }
          }}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)} />
        <button className="btn-input" onClick={() => addItem(input)}>Add</button>
      </div>
      <div className='distribute-Wrapper'><Distribute modeChange={modeChange} /></div>
      <div className='todoList-Wrapper'>
        <TodoList itemList={itemList}
          updateItemList={updateItemList}
          mode={mode}
          updateNumber={updateNumber} />
      </div>
      <div className='footer'>
        <div className='item-infor'>{itemNum} items left!</div>
        <button className='deleteCompleted' onClick={deleteCompleted}>Delete Completed Item</button>
      </div>
    </div>
  );
}

export default App;
