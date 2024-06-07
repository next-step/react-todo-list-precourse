import "./Main.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function Main() {
    return (
        <div id="root">
            <section className="todoapp">
                <Header />
                <Body />
                <Footer />
            </section>
        </div>
    );
}

export default Main;
