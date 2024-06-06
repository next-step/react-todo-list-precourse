import React from "react";
import FilterList from "./todo/FilterList";

function Footer({ todoList, setFilter }) {
    console.log(todoList);
    return (
        <footer className="footer">
          <FilterList setFilter={setFilter} />
        </footer>
    );
}

export default Footer;