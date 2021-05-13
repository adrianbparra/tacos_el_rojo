import React from "react";
import {Link} from "react-router-dom";
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";

import divFloorImg from "../assets/images/section_bg_wood_home.png";

const divImage = {
    background: ` linear-gradient( rgba(254, 235, 200, .85),rgba(254, 235, 200, .85) ), url(${divFloorImg})`,
    width: "100%",
    height: "auto"
}

function Footer () {

    return (
        <div className="container flex flex-col md:flex-row justify-between px-4 py-3 bg-no-repeat bg-fill bg-opacity-75 md:text-2xl " style={divImage}>
            <div className="flex md:flex-col justify-between md:pr-32">
                <Link to="/menu" className="hover:text-red-600">Menu</Link>
                <Link to="/contact" className="hover:text-red-600">Contact</Link>
                <Link to="/events" className="hover:text-red-600">Events</Link>
                <Link to="/merch" className="hover:text-red-600">Merch</Link>
            </div>
            
            <div>
                <div className="flex flex-col items-center ">
                    <span className="text-sm md:text-2xl">Follow our Tacos</span>
                    <div className="flex">
                        <a href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer" className="md:text-3xl  hover:text-red-600"><FaInstagramSquare /></a>
                        <a href="https://www.facebook.com/tacos.e.rojo" rel="noopener noreferrer" className="md:text-3xl hover:text-red-600"><FaFacebookSquare/></a>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm md:text-2xl">Follow our Merch</span>
                    <a href="https://www.instagram.com/shoptacoselrojo/" rel="noopener noreferrer" target="_blank" className="md:text-3xl hover:text-red-600"><FaInstagramSquare/></a>   
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