import React from "react";
import "./styles/App.css";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <div>
        <h1>todos</h1>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
