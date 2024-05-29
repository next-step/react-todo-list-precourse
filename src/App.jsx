import React, { useState, useCallback, useRef } from "react"
import "./App.css"
import TodoInsert from "./components/TodoInsert"

import List from "./components/List"
import Active from "./components/Active"
import Completed from "./components/Completed"
import { useNavigate, Route, Routes } from "react-router-dom"

function App() {
  const [todos, setTodos] = useState([])
  const navigate = useNavigate()
  const nextId = useRef(1)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      if (text !== "") {
        setTodos(todos.concat(todo))
        nextId.current += 1
      }
      // 인자로 주어진 배열이나 값들을 기존 배열과 합쳐 새배열 생성
    },
    [todos]
  )
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos]
  )

  const onTouched = useCallback((id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
  })

  const itemLeft = todos.filter((todo) => todo.checked === false)

  return (
    <div className="App">
      <header>todos</header>
      <div>
        <TodoInsert onInsert={onInsert} />
        <Routes>
          <Route exact path="/" element={<List todos={todos} onRemove={onRemove} onTouched={onTouched} />}></Route>
          <Route path="/active" element={<Active todos={todos} onRemove={onRemove} onTouched={onTouched} />}></Route>
          <Route
            path="/completed"
            element={<Completed todos={todos} onRemove={onRemove} onTouched={onTouched} />}
          ></Route>
        </Routes>

        <button onClick={() => navigate("/")}> All </button>
        <button onClick={() => navigate("/active")}> Active </button>
        <button onClick={() => navigate("/completed")}> Completed </button>
      </div>
      <footer>{`${itemLeft.length}items left!`}</footer>
    </div>
  )
}

export default App
