import App from "./App.jsx";
import ReactDOM from "react-dom/client"
import React from "react";

const root = document.getElementById("app");
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);