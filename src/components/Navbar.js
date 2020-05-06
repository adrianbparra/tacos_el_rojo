import React from "react"


function NavBar({selected}) {

    
    return(
        <nav>
            <ul>
                <li>
                    <a html="#main">
                        <p>Tacos</p>
                        <p>El Rojo</p>
                    </a>
                </li>
                <li>
                    MENU
                </li>
                <li>
                    CONTACT
                </li>
                <li>
                    EVENTS
                </li>
                <li>
                    MERCH
                </li>
            </ul>
        </nav>
    )

}


export default NavBar;