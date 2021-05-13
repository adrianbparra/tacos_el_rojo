import React from "react"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";
import {Link} from "react-router-dom";

import shirt from "../assets/images/merch_shirt.jpg";
import divFloorImg from "../assets/images/section_bg_wood_home.png";

const BannerButton = ({r,b}) => {
    return(
    <svg style={{display:"inline-block", position:"absolute" ,right:r, bottom:b, zIndex:10}} width="195" height="56" viewBox="0 0 165 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.7091 0.999902L15.2742 0.999892C11.2435 0.999892 8.87906 0.774251 6.00004 1.99988C4.5 2.63847 2.5 3.5 1 5.5L1 23.8845C2.5 22.0809 4.39371 21.0683 6.00005 20.3844C8.87906 19.1588 11.2435 19.3844 15.2742 19.3844L26.7091 19.3844M26.7091 0.999902L26.7091 19.3844M26.7091 0.999902L17.5 3.45115M26.7091 19.3844L17.5 22.0809" fill="#E8D1B6" stroke="black"/>
        <path d="M164 21.9999H17.5V3.49991H164V21.9999Z" fill="#E8D1B6" stroke="black"/>
        <path d="M17.7092 19.3847L35.5592 19.3847" stroke="black" stroke-width="0.5"/>
        <path d="M17.7092 16.1979L35.5592 16.1979" stroke="black" stroke-width="0.5"/>
        <path d="M17.7092 12.7661L35.5592 12.7661" stroke="black" stroke-width="0.5"/>
        <path d="M17.7092 9.33435L35.5592 9.33435" stroke="black" stroke-width="0.5"/>
        <path d="M17.7092 6.39282L35.5592 6.39282" stroke="black" stroke-width="0.5"/>
    </svg>
    )
};






const divImage = {
    background: ` linear-gradient( rgba(254, 235, 200, .85),rgba(254, 235, 200, .85) ), url(${divFloorImg})`,
    width: "100%",
    height: "auto"
}

function Home (){
    return(
        <div className="py-12">
            
            <div className="container text-center bg-no-repeat bg-fill p-6 pb-10 relative overflow-hidden "  style={divImage}>
                <h2 className="font-lobster text-2xl md:text-4xl">
                    Menu
                </h2>
                <p className="lg:text-2xl">
                    I offer a selection of tacos, burritos and quesadillas. With a range of different meats to choose from to top the main dish. Includes savory condiments to make our food favlorful.
                </p>

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2 z-50">
                    
                    <Link to="/menu" className="hover:text-black">See Menu</Link>
                </div>
                <BannerButton r="-50" b="0" />

            </div>

            <div className="container text-center bg-no-repeat bg-fill bg-opacity-75 p-6 my-12 pb-10 relative overflow-hidden" style={divImage}>
                <h2 className="font-lobster text-2xl  md:text-4xl">
                    Contact
                </h2>
                <p>Give us a call at:</p>
                <a className="text-xl font-bold hover:text-red-600" href="tel:4808229166">(480)822-9166</a>
                <p>Or Follow us:</p>
                <div className="flex justify-center text-xl">
                    <span>Tacos</span>
                    <a className="px-1 hover:text-red-600 text-3xl" href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                    <a className="px-1 hover:text-red-600 text-3xl" href="https://www.facebook.com/tacos.e.rojo" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                </div>
                <div className="flex justify-center text-xl">
                    <span>Merch</span>
                    <a className="px-1 hover:text-red-600 text-3xl" href="https://www.instagram.com/shoptacoselrojo/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                </div>

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2 z-30">
                    <Link to="/contact" className="hover:text-black">More Contacts</Link>
                </div>
                <BannerButton r="-10" b="0" />
            </div>

            <div className="container text-center bg-no-repeat bg-fill bg-opacity-75 p-6 my-12 pb-10 relative overflow-hidden" style={divImage}>
                <h2 className="font-lobster text-2xl  md:text-4xl">
                    See our upcoming events
                </h2>
                

                    <h3 className="text-left pl-1 lg:text-3xl">Date:</h3>
             
                    <div className="flex pb-2 lg:text-2xl">
                        <p>TBA</p>
                        <p className="text-left pl-4 lg:pl-12">In our next event we will be having a give away of a pair of apple air pods everyone who buys tacos the day of.</p>
                    </div>
                    <div className="flex pb-2 lg:text-2xl">
                        <p>TBA</p>
                        <p className="text-left pl-4 lg:pl-12">New menu items including Rojos Burritos and Strawberry Horchata</p>
                    </div>

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2 z-30">
                    
                    <Link to="/events" className="hover:text-black">More Events</Link>
                    
                </div>
                <BannerButton r="-30" b="0"/>
            </div>

            <div className="container text-center bg-no-repeat bg-fill bg-opacity-75 p-6 pb-10 relative overflow-hidden" style={divImage}>
                <h2 className="font-lobster text-2xl  md:text-4xl">
                    Merchandise
                </h2>

                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl underline md:text-3xl">Shirts</h3>
                        <p className="font-lobster text-xl md:text-2xl">Coming Soon!</p>
                    </div>
                    
                    <div className=" flex-1 lg:p-8">
                        <img className="max-h-full" src={shirt} alt="shirt_merch"></img>
                    </div>
                
                </div>

                <div className="font-lobster text-2xl text-red-600 inline-block absolute bottom-0 right-0 pr-2 z-30 ">
                    
                    <Link to="/merch" className="hover:text-black z-30">More Merch</Link>
                </div>
                <BannerButton r="-30" b="0"/>
            </div>
        </div>
    )
}


export default Home