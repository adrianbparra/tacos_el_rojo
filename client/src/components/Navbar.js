import React from "react"
import {Link} from "react-router-dom";
import tacosElRojoLogo from "../assets/images/tacos_el_rojo_logo_2.png";



function NavBar() {

    
    return(
        
        <nav className="font-lobster bg-opacity-75 w-full container flex flex-row py-5 px-2 text-md md:text-2xl md:text-3xl text-red-700">

            <span className="border-solid border-black border-t-2 border-b-2 h-29 w-4 block"/>

            <ul className="flex-grow flex justify-around items-center border-solid border-black border-t-2 border-b-2">

                <li className="md:px-2 flex-1 text-center">
                    <Link to="/menu" className="hover:text-1xl md:hover:text-4xl focus:text-black">MENU</Link>
                    
                </li>
                <li className="md:px-2 flex-1 text-center">
                    <Link to="/events" className="hover:text-1xl md:hover:text-4xl focus:text-black py-3">EVENTS</Link>
                </li>
                <li className="md:px-2 flex-1">
                    <Link to="/" className="flex justify-around">
                        <img 
                            className="h-24 w-24" 
                            src={tacosElRojoLogo}
                            alt="Tacos El Rojo Logo"
                        />
                        
                    </Link>
                </li>
                <li className="md:px-2 flex-1 text-center">
                    <Link to="/merch" className="hover:text-2xl md:hover:text-4xl focus:text-black">MERCH</Link>
                </li>
                <li className="md:px-2 flex-1 text-center">
                    <Link to="/catering" className="hover:text-2xl md:hover:text-4xl focus:text-black">CATERING</Link>
                </li>
            </ul>
            <span className="border-solid border-black border-t-2 border-b-2 h-29 w-4 block"/>
        </nav>
    )

}


export default NavBar;