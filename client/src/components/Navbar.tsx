import React, {FC} from "react"
import {Link} from "react-router-dom";
import tacosElRojoLogo from "../assets/images/tacos_el_rojo_logo_2.png";

import {NavButtonLink} from "../assets/TailwindComponents";


const NavBar : FC = () => {

    
    return(
        
        <nav className="font-lobster h-28 md:h-40 bg-opacity-75 w-full container flex flex-row py-5 px-2 text-sm md:text-2xl md:text-3xl text-red-700">

            <svg width="100%" className="h-full w-4"  viewBox="0 0 16 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 124C7.75 124 1 132 0 141V94.5V63V32.5V15C1 5 9.75 1 28 1" stroke="black" stroke-width="3"/>
            </svg>

            <div className="flex-grow flex justify-around items-center border-solid border-black border-t-2 border-b-2 mb-3">

                <NavButtonLink to="/menu">
                    
                        MENU

                    
                </NavButtonLink>

                <NavButtonLink to="/events">
                    EVENTS
                </NavButtonLink>

                <li className="md:px-2 flex-1 hidden md:block">
                    <Link to="/" className="flex justify-around">
                        <img 
                            className="h-24 w-24" 
                            src={tacosElRojoLogo}
                            alt="Tacos El Rojo Logo"
                            loading="lazy"
                        />
                        
                    </Link>
                </li>

                <NavButtonLink to="/merch">
                    MERCH
                </NavButtonLink>

                <NavButtonLink to="/catering">
                    CATERING
                </NavButtonLink>
            </div>
{/*             
            <svg width="16" className="h-20 md:h-28" viewBox="0 0 16 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 128C8.75 128 17.5 132 17.5 141V94.5V63V32.5V15C17.5 6 9.75 1 0 1" stroke="black" stroke-width="2"/>
            </svg> */}

        </nav>
    )

}


export default NavBar;