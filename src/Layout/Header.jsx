import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link className="site-logo" to="/">furniterify</Link>
            <nav>
                <NavLink 
                to="/serch"
                >
                    serch
                </NavLink>
                <NavLink 
                to="/order"
                >
                    order
                </NavLink>
            </nav>
        </header>
    )
}