import { Header } from "./components/Header.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { Footer } from "./components/Footer.jsx";
import styles from "./App.module.css";

export function App() {
    console.log('app')
    return (
        <div className={styles.App}>
            <Header />
            <TodoList />
            <Footer />
        </div>
    );
}