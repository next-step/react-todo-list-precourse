import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="itemleft">X items left</div>
            <div className="filter">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}

export default Footer;