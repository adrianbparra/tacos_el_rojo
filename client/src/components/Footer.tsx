import React from "react";
import {Link} from "react-router-dom";
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";

function Footer () {

    return (
        <div className="container flex flex-col md:flex-row justify-between px-4 py-3 bg-no-repeat bg-fill bg-opacity-75 md:text-2xl ">
            <div className="flex md:flex-col justify-between md:pr-32">
                <Link to="/menu" className="hover:text-red-600">Menu</Link>
                <Link to="/contact" className="hover:text-red-600">Contact</Link>
                <Link to="/events" className="hover:text-red-600">Events</Link>
                <Link to="/merch" className="hover:text-red-600">Merch</Link>
            </div>
            
            <div>
                <div className="flex flex-col items-center ">
                    <span className="text-sm md:text-2xl">Follow Us</span>
                    <div className="flex justify-between">
                        <a href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer" className="mx-2 md:text-4xl  hover:text-red-600"><FaInstagramSquare /></a>
                        <a href="https://www.facebook.com/tacos.e.rojo" rel="noopener noreferrer" className="mx-2 md:text-4xl hover:text-red-600"><FaFacebookSquare/></a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
                <h3>Contact Me</h3>
                <a className="hover:text-red-600" href="tel:4808229166">480.822.9166</a>
                <a href="https://adrianbparra.com" rel="noopener noreferrer" target="_blank" className="text-sm mt-auto hover:text-red-600">Looking to hire a web developer?</a>
            </div>
            
        </div>
    )
}

export default Footer;