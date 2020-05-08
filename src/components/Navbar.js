import React from "react"
import {Link} from "react-router-dom";


function NavBar() {

    
    return(
        <nav className="container pt-3 pb-3 w-full fixed px-10">
            <ul className="flex justify-between">
                <li className="flex-auto">
                    <Link to="/">
                        <span>Tacos</span>
                        <span>El Rojo</span>
                    </Link>
                </li>
                <li className="px-2">
                    <Link to="/menu">MENU</Link>
                    
                </li>
                <li className="px-2">
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li className="px-2">
                    <Link to="/events">EVENTS</Link>
                </li>
                <li className="px-2">
                    <Link to="/merch">MERCH</Link>
                </li>
            </ul>
        </nav>
    )

}


export default NavBar;