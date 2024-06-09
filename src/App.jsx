import React, { useState } from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import TodoTemplate from "./Components/TodoTemplate";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <TodoTemplate />
      <Footer />
    </>
  );
}

export default App;