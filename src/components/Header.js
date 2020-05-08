import React from "react";
import {useLocation} from "react-router-dom";

import bg from "../assets/images/tacos_el_rojo_img_md.jpg"


const bgImage = {
    backgroundImage: `url( ${bg})`
}

function Header(){

    const location = useLocation();

    const locName = location.pathname.slice(1,location.pathname.length)

    console.log(location)
    return (

        
        <div className="h-64 flex bg-center bg-cover justify-center" style={bgImage}>
            {location.pathname !== "/" && locName.toUpperCase()}
            {location.pathname !== "/" && <p >Call to get catering for your party or to find out where we will be set up next</p>}
            {location.pathname !=="/" && <h2>(480) 822 9166</h2>}

            {location.pathname === "/" && <p className="self-end">Catering and Taco Shop located in Arizona</p>}
        </div>

    )
}


export default Header