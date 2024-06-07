import "./Main.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function Main() {
    return (
        <div id="root">
            <section className="todoapp">
                <Header />
                <Body />
            </section>
        </div>
    );
}

export default Main;
