import React from "react";

function Header() {
    const name = "Maxi.";
    const title = "Front-End Developer";

    return (
        <header className="header">
            <nav className="navbar">
                <h2 className="logo">{name}</h2>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="hero">
                <h1>Hello, I'm {name}</h1>
                <p className="subtitle">{title}</p>
            </div>
        </header>
    );
}

export default Header;