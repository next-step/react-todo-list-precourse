import React from 'react';

function makeFilter(filter, changeFilter) {
    const filterName = ['All', 'Active', 'Completed'];
    const handleClick = e => {
        changeFilter(e.target.textContent);
    };
    return (
        filterName.map(function(element) {
            return (element === filter ? <button className="choosen" onClick={handleClick}>{element}</button> : <button onClick={handleClick}>{element}</button>)
        })
    );
}

function Footer(props) {
    return (
        <div className="footer">
            <div className="itemleft">{props.todoLeft} items left</div>
            <div className="filter">
                { makeFilter(props.filter, props.changeFilter) }
            </div>
        </div>
    );
}

export default Footer;