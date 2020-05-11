import React from "react"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";
import {Link} from "react-router-dom";

import shirt from "../assets/images/merch_shirt.jpg";
import divFloorImg from "../assets/images/section_bg_wood_home.png";

const BannerButton = (width) => {
    return( 
    <svg style={{display:"inline-block", position: "absolute",right:"0",bottom:"0",zIndex:"20"}} width="170" height="45" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4962 3.45128L29.7091 1.00001M20.4962 3.45128L29.7091 3.45128M20.4962 3.45128L20.4962 17.9138L20.4962 19.3845M29.7091 1.00001L18.2741 1C14.2435 1 8.48545 1.24513 5.60643 2.47076C2.7274 3.6964 1.38332 4.91231 1 6.63792L1 25.0225C1.38332 23.2968 2.7274 22.0809 5.60643 20.8553C8.48545 19.6297 14.2435 19.3845 18.2741 19.3845L20.4962 19.3845M29.7091 1.00001L29.7091 3.45128M20.4962 19.3845L20.4962 22.081L105.422 22.081L105.422 19.3845L105.422 17.9138L105.422 3.45126M29.7091 3.45128L96.2095 3.45126M105.422 3.45126L96.2095 0.999998L96.2095 3.45126M105.422 3.45126L96.2095 3.45126" stroke="black"/>
        <path d="M20.7092 19.3848L38.5592 19.3848" stroke="black" stroke-width="0.5"/>
        <path d="M20.7092 16.198L38.5592 16.198" stroke="black" stroke-width="0.5"/>
        <path d="M20.7092 12.7662L38.5592 12.7662" stroke="black" stroke-width="0.5"/>
        <path d="M20.7092 9.33444L38.5592 9.33444" stroke="black" stroke-width="0.5"/>
        <path d="M20.7092 6.39291L38.5592 6.39291" stroke="black" stroke-width="0.5"/>
    </svg>
    )
};






const divImage = {
    background: ` linear-gradient( rgba(254, 235, 200, .75),rgba(254, 235, 200, .75) ), url(${divFloorImg})`,
    width: "100%",
    height: "auto"
}

function Home (){
    return(
        <div className="py-12">
            
            <div className="container text-center bg-no-repeat bg-fill bg-opacity-75 p-6 pb-10 relative" style={divImage}>
                <h2 className="font-lobster text-2xl">
                    Menu
                </h2>
                <p>
                    I offer a selection of tacos, burritos and quesadillas. With a range of different meats to choose from to top the main dish. Includes savory condiments to make our food favlorful.
                </p>

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2 z-30">
                    
                    <Link to="/menu" className="hover:text-black ">See Menu</Link>
                </div>
                <BannerButton className=""/>

            </div>

            <div className="container text-center bg-no-repeat bg-fill bg-opacity-75 p-6 my-12 pb-10 relative" style={divImage}>
                <h2 className="font-lobster text-2xl">
                    Contact
                </h2>
                <p>Give us a call at:</p>
                <a className="text-xl font-bold hover:text-red-600" href="tel:4808229166">(480)822-9166</a>
                <p>Or Follow us:</p>
                <div className="flex justify-center text-xl">
                    <span>Tacos</span>
                    <a className="px-1 hover:text-red-600" href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                    <a className="px-1 hover:text-red-600" href="https://www.facebook.com/tacos.e.rojo" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                </div>
                <div className="flex justify-center text-xl">
                    <span>Merch</span>
                    <a className="px-1 hover:text-red-600" href="https://www.instagram.com/shoptacoselrojo/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                </div>

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2">
                    <Link to="/contact" className="hover:text-black">More Contacts</Link>
                </div>
            </div>

            <div className="container text-center bg-no-repeat bg-fill bg-opacity-75 p-6 my-12 pb-10 relative" style={divImage}>
                <h2 className="font-lobster text-2xl">
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

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2">
                    <Link to="/events" className="hover:text-black">More Events</Link>
                </div>
            </div>

            <div className="container text-center bg-no-repeat bg-fill bg-opacity-75 p-6 pb-10 relative" style={divImage}>
                <h2 className="font-lobster text-2xl">
                    Merchandise
                </h2>

                <div>
                    <h3>Shirts</h3>
                    <p>Coming Soon!</p>

                    <img src={shirt} alt="shirt_merch"></img>
                
                </div>

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2">
                    <Link to="/merch" className="hover:text-black">More Merch</Link>
                </div>
            </div>
        </div>
    )
}


export default Home