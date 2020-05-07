import React from "react"
import {Link} from "react-router-dom";


function NavBar() {

    
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <span>Tacos</span>
                        <span>El Rojo</span>
                    </Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                    
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                    <Link to="/events">EVENTS</Link>
                </li>
                <li>
                    <Link to="/merch">MERCH</Link>
                </li>
            </ul>
        </nav>
    )

}


export default NavBar;