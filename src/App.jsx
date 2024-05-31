import { Header } from "./components/Header.jsx";
import { TodoList } from "./components/TodoList.jsx";

export function App() {
    console.log('app')
    return (
        <div className="App">
            <Header />
            <TodoList />
        </div>
    );
}