import React from "react";
import {Link} from "react-router-dom";
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";


function Footer () {

    return (
        <div className="footer">
            <div>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/events">Events</Link>
                <Link to="/merch">Merch</Link>
            </div>
            
            <div>
                <div>
                    <span>Follow our Tacos</span>
                    <a href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer" ><FaInstagramSquare /></a>
                    <a href="https://www.facebook.com/tacos.e.rojo" rel="noopener noreferrer" ><FaFacebookSquare/></a>
                    
                </div>
                <div>
                    <span>Follow our Merch</span>
                    <a href="https://www.instagram.com/shoptacoselrojo/" rel="noopener noreferrer" target="_blank"><FaInstagramSquare/></a>   
                </div>
            </div>

            <div>
                <h3>Contact Me</h3>
                <a href="tel:4808229166">480.822.9166</a>
            </div>

            <div>
                <a href="https://adrianbparra.com" rel="noopener noreferrer" target="_blank">Looking to hire a web developer?</a>
            </div>
            
        </div>
    )
}

export default Footer;