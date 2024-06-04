import ReactDOM from "react-dom/client";
import App from "./App";

function createApp() {
  const app = ReactDOM.createRoot(document.getElementById("app"));
  app.render(App());
}

createApp();
