import React, { useState } from 'react';

function makeForm(content, setContent) {
    return (
        <form className="inputform">
            <input type="text" className="inputtext" value={content} onChange={e=>setContent(e.target.value)} required/>
            <input type="submit" className="inputbtn" value="+"/>
        </form>
    )
}

function Header({addTodo}) {
    const [content, setContent] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(content);
        setContent("");
    };

    return (
        <div className="header" onSubmit={handleSubmit}>
            { makeForm(content, setContent) }
        </div>
    );
}

export default Header;