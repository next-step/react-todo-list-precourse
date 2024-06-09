import React, { useState } from "react";
import "./App.css";

function App() {

    const [todos, settodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !==""){
            settodos(t=> [...todos,newTask]);
            setNewTask("");
        } else {
            alert("할 일을 입력해주세요!")
        }
    }

    function deleteTask(index){
        const updatedtodos = todos.filter((element, i)=> i !==index);
        settodos(updatedtodos);
    }
    function handleKeyPress(event) {
        if(event.key ==="Enter") {
            addTask();
        }
    }
   
    return (
        <div className="to-do-list">
            <h1>To-Do-list</h1>

            <div>
                <input
                    type="text"
                    placeholder="할 일을 입력해보자..."
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}/>
                <button
                    className="add-button" onClick={addTask}>
                    Add
                    </button>
            </div>

        <ol> 
            {todos.map((task,index)=>   
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button"
                    onClick={() => deleteTask(index)}>
                    Delete 
                </button>

            </li>
        )}
        </ol>
        </div>
    )
};

export default App;
