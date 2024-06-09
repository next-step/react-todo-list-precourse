import React from 'react';

function Header() {
    return (
        <div className="header">
            <form className="inputform">
                <input type="text" className="inputtext"/>
                <input type="submit" className="inputbtn" value="+"/>
            </form>
        </div>
    );
}

export default Header;