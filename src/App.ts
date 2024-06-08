import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createElement } from "react";
import { TodosProvider } from "./contexts/todos/TodosProvider.tsx";

export function createApp() {
  const root = ReactDOM.createRoot(document.getElementById("root")!);

  root.render(createElement(TodosProvider, { children: createElement(App) }));
}
