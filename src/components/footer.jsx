import React from 'react';

function Footer(props) {
    const handleClick = e => {
        props.changeFilter(e.target.textContent);
    };
    return (
        <div className="footer">
            <div className="itemleft">X items left</div>
            <div className="filter">
                <button onClick={handleClick}>All</button>
                <button onClick={handleClick}>Active</button>
                <button onClick={handleClick}>Completed</button>
            </div>
        </div>
    );
}

export default Footer;