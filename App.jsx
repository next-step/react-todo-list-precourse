import React from 'react'
import ReactDOM from "react-dom/client"
import Main from '/src/main.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
)