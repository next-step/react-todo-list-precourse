import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodosProvider } from "./contexts/TodosProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodosProvider>
    <App />
  </TodosProvider>,
);
