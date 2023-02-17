import React from "react";
import { Link } from "react-router-dom";
import timebook from "../../../assets/timebook.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="h-12" src={timebook} alt="timebook logo" />
            </Link>

            <div>
                <ul className="flex items-center gap-4">
                    <li>Media</li>
                    <li>Message</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
