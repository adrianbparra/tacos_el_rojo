import React from "react";
import {Link} from "react-router-dom";
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";

import divFloorImg from "../assets/images/section_bg_wood_home.png";

const divImage = {
    background: ` linear-gradient( rgba(254, 235, 200, .75),rgba(254, 235, 200, .75) ), url(${divFloorImg})`,
    width: "100%",
    height: "auto"
}

function Footer () {

    return (
        <div className="container flex justify-between px-4 pb-3 pt-6 bg-no-repeat bg-fill bg-opacity-75" style={divImage}>
            <div className="flex flex-col">
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/events">Events</Link>
                <Link to="/merch">Merch</Link>
            </div>
            
            <div>
                <div className="flex flex-col items-center">
                    <span>Follow our Tacos</span>
                    <div className="flex">
                        <a href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer" ><FaInstagramSquare /></a>
                        <a href="https://www.facebook.com/tacos.e.rojo" rel="noopener noreferrer" ><FaFacebookSquare/></a>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span>Follow our Merch</span>
                    <a href="https://www.instagram.com/shoptacoselrojo/" rel="noopener noreferrer" target="_blank"><FaInstagramSquare/></a>   
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3>Contact Me</h3>
                <a href="tel:4808229166">480.822.9166</a>
            </div>

            {/* <div>
                <a href="https://adrianbparra.com" rel="noopener noreferrer" target="_blank">Looking to hire a web developer?</a>
            </div> */}
            
        </div>
    )
}

export default Footer;