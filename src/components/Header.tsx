import { useState } from "react";

import "../styles/header.css";

const Header = () => {
    const [gettedAdvice, setGettedAdvice] = useState("Loading...");
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {setGettedAdvice(data.slip.advice)});

    return <div className="header">
        <h1>Todo List</h1>
        <p>{gettedAdvice}</p>
    </div>;
}

export default Header;