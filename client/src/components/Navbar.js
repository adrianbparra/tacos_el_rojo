import React from "react"
import {Link} from "react-router-dom";
import tacosElRojoLogo from "../assets/images/tacos_el_rojo_logo_2.png";



function NavBar() {

    
    return(
        
        <nav className="font-lobster bg-opacity-75 w-full container flex flex-row py-5 px-2 text-sm md:text-2xl md:text-3xl text-red-700">

            {/* <span className="border-solid border-black border-t-2 border-b-2 h-29 w-4 block transform -skew-y-12 rounded-tl-md rounded-br-md"/> */}
            <svg width="20" height="141" viewBox="0 0 19 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 128C9.75 128 1 132 0 141V94.5V63V32.5V15C1 5 9.75 1 20 1" stroke="black" stroke-width="1"/>
            </svg>

            <ul className="flex-grow flex justify-around items-center border-solid border-black border-t-2 border-b-2 mb-3">

                <li as={Link} className="md:px-1 flex-1 text-center  border-solid border-black hover:border-2 hover:px-4 hover:text-2xl md:hover:text-4xl focus:text-black">
                    <Link to="/menu" >MENU</Link>
                    
                </li>
                <li className="md:px-2 flex-1 text-center">
                    <Link to="/events" className="hover:text-2xl md:hover:text-4xl focus:text-black py-3">EVENTS</Link>
                </li>
                <li className="md:px-2 flex-1">
                    <Link to="/" className="flex justify-around">
                        <img 
                            className="h-24 w-24" 
                            src={tacosElRojoLogo}
                            alt="Tacos El Rojo Logo"
                            loading="lazy"
                        />
                        
                    </Link>
                </li>
                <li className="md:px-1 flex-1 text-center hover:border-bottom hover:border-solid hover:border-black hover:px-4">
                    <Link to="/merch" className="hover:text-2xl md:hover:text-4xl focus:text-black">MERCH</Link>
                </li>
                <li className="md:px-1 flex-1 text-center hover:border-bottom hover:border-solid hover:border-black hover:px-4">
                    <Link to="/catering" className="hover:text-xl md:hover:text-4xl focus:text-black">CATERING</Link>
                </li>
            </ul>
            <span className="border-solid border-black border-t-2 border-b-2 h-29 w-4 block"/>
        </nav>
    )

}


export default NavBar;