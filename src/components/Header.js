import React from "react";
import {useLocation} from "react-router-dom";

import bg from "../assets/images/tacos_el_rojo_logo_bg.jpg";


const bgImage = {
    backgroundImage: `url(${bg})`,
    height: "0",
    width: "100%",
    paddingTop: "96%"

}

function Header(){

    const location = useLocation();

    const locName = location.pathname.slice(1,location.pathname.length)

    console.log(location)

        if(location.pathname === "/"){
            return (
                <div className="relative bg-no-repeat bg-contain" style={bgImage}>
                    <div className="absolute flex justify-center bg-orange-200 bg-opacity-75 inset-0">
                        {location.pathname === "/" && <p className="self-end text-center text-xl md:text-3xl font-lobster lg:text-5xl">Catering and Taco Shop located in Arizona</p>}
                    </div>
                    
                </div>
            )
        } else 
        return (

            
            <div className="relative bg-no-repeat bg-contain" style={bgImage}>
                {/* absolute flex  items-center  text-3xl sm:text-5xl  */}
                <div className="absolute flex bg-orange-200 bg-opacity-75 inset-0 flex-col justify-center items-center">
                    {/* p-32 md:p-20 font-lobster text-7xl sm:text-5xl */}
                {location.pathname !== "/" && <h2 className="sm:pb-12 font-lobster text-3xl text-center text-red-600 tracking-wider font-bold">{locName.toUpperCase()}</h2>}
                {/* p-12 sm:text-3xl sm:p-16 text-center */}
                {location.pathname !== "/" && <p className="sm:pb-12 px-4 text-center text-lg font-bold">Call to get catering for your party or to find out where we will be set up next</p>}
                {/* p-24 sm:p-12 text-3xl sm:text-4xl */}
                {location.pathname !=="/" && <a className="text-3xl font-lobster text-red-600 hover:text-black" href="tel:4808229166">(480) 822 9166</a>}
                </div>

                
            </div>

        )
}


export default Header