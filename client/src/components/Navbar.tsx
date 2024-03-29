import React, {FC} from "react"
import {Link} from "react-router-dom";
import tacosElRojoLogo from "../assets/images/tacos_el_rojo_logo_2.png";

import NavLink from "./NavLink";

function NavBar( ) {
    
    return(
        
        <nav className="font-lobster h-32 md:h-40 bg-opacity-75 w-full container flex flex-row py-5 px-2 text-md md:text-2xl md:text-3xl text-red-700">

            <svg width="100%" className="h-full w-4"  viewBox="0 0 16 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 121C7.75 124 1 132 0 141V94.5V63V32.5V15C1 5 9.75 1 28 1" stroke="black" stroke-width="3"/>
            </svg>

            <div className="flex-grow flex justify-around items-center border-solid border-black border-t-2 border-b-2 mb-3" >

                <NavLink to="/menu">
                    Menu
                </NavLink>

                <NavLink to="/Contact">
                    Contact
                </NavLink>

                <li className="md:px-2 flex-1 block">
                    <Link to="/" className="flex justify-around">
                        <img 
                            className="h-16 w-16 md:h-24 md:w-24" 
                            src={tacosElRojoLogo}
                            alt="Tacos El Rojo Logo"
                            loading="lazy"
                        />
                        
                    </Link>
                </li>

                <NavLink to="/events">
                    Events
                </NavLink>

                <NavLink to="/merch">
                    Merch
                </NavLink>

            </div>
            
            
            <svg className="w-4" width="100%" viewBox="0 0 16 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-6 122C8.75 128 17.5 132 17.5 141V94.5V63V32.5V15C17.5 6 9.75 1 -8 1" stroke="black" stroke-width="3"/>
            </svg>


        </nav>
    )

}


export default NavBar;