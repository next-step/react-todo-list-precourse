import React from 'react';
import TodoFilters from './TodoFilters';

function Footer({ filter, changeFilter }) {
    return (
        <footer className="footer">
            <TodoFilters currentFilter={filter} changeFilter={changeFilter} />
        </footer>
    );
}

export default Footer;
