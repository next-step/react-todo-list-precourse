import React from 'react';
import Header from './components/header.jsx';
import TodoList from './components/todolist.jsx';
import Footer from './components/footer.jsx';

function App() {
    return (
        <div className="app">
            <h1>TODO</h1>
            <div className="mainframe">
                <Header/>
                <TodoList/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;