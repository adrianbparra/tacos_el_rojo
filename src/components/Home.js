import React from "react"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";
import {Link} from "react-router-dom";

import shirt from "../assets/images/merch_shirt.jpg";




function Home (){
    return(
        <div className="pt-16">
            
            <div>
                <h2>
                    Menu
                </h2>
                <p>
                    I offer a selection of tacos, burritos and quesadillas. With a range of different meats to choose from to top the main dish. Includes savory condiments to make our food favlorful.
                </p>

                <div>
                    <Link to="/menu">See Menu</Link>
                </div>

            </div>

            <div>
                <h2>
                    Contact
                </h2>
                <p>Give us a call at:</p>
                <a href="tel:4808229166">(480)822-9166</a>
                <p>Or Follow us:</p>
                <div>
                    <span>Tacos</span>
                    <a href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                    <a href="https://www.facebook.com/tacos.e.rojo" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                    <span>Merch</span>
                    <a href="https://www.instagram.com/shoptacoselrojo/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                </div>

                <div>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>

            <div>
                <h2>
                    See our upcoming events
                </h2>
                

                    <h3>Date:</h3>
             
                    <div>
                        <p>05/15</p>
                        <p>In our next event we will be having a give away of a pair of apple air pods everyone who buys tacos the day of.</p>
                    </div>
                    <div>
                        <p>05/15</p>
                        <p>New menu items including Rojos Burritos and Strawberry Horchata</p>
                    </div>

                <div>
                    <Link to="/events">More Events</Link>
                </div>
            </div>

            <div>
                <h2>
                    Merchandise
                </h2>

                <div>
                    <h3>Shirts</h3>
                    <p>Coming Soon!</p>

                    <img src={shirt} alt="shirt_merch"></img>
                
                </div>

                <div>
                    <Link to="/merch">More Merch</Link>
                </div>
            </div>
        </div>
    )
}


export default Home