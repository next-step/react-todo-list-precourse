import React from "react"
import { Route, Routes } from "react-router-dom"
import TodoInsert from "./components/TodoInsert"
import List from "./components/List"
import Active from "./components/Active"
import Completed from "./components/Completed"

const UIRender = ({ onInsert, todos, onRemove, onTouched, navigate, itemLeft }) => (
  <div className="UIRender">
    <header>todos</header>
    <div>
      <TodoInsert onInsert={onInsert} />
      <Routes>
        <Route exact path="/" element={<List todos={todos} onRemove={onRemove} onTouched={onTouched} />}></Route>
        <Route path="/active" element={<Active todos={todos} onRemove={onRemove} onTouched={onTouched} />}></Route>
        <Route path="/completed" element={<Completed todos={todos} onRemove={onRemove} onTouched={onTouched} />}></Route>
      </Routes>
      <button onClick={() => navigate("/")}> All </button>
      <button onClick={() => navigate("/active")}> Active </button>
      <button onClick={() => navigate("/completed")}> Completed </button>
    </div> <footer>{`${itemLeft.length} items left`} </footer> </div>
)

export default UIRender
