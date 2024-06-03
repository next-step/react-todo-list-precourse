import React from "react";

const TodoFilter = ({ setFilter }) => {
    return (
        <div className="filters">
            <button className="filter-button" onClick={() => setFilter('all')}>All</button>
            <button className="filter-button" onClick={() => setFilter('active')}>Active</button>
            <button className="filter-button" onClick={() => setFilter('done')}>Completed</button>
        </div>
    );
};

export default TodoFilter;