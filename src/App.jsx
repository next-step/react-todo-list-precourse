import { Header } from "./components/Header.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
    console.log('app')
    return (
        <div className="App">
            <Header />
            <TodoList />
            <Footer />
        </div>
    );
}