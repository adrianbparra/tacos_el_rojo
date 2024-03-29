import React,{FC} from "react";
import {useLocation} from "react-router-dom";

import bg from "../assets/images/tacos_el_rojo_logo_bg.jpg";


const bgImage = {
    backgroundImage: `url(${bg})`,
    height: "0",
    width: "100%",
    paddingTop: "96%"

}

interface LocationState {
    pathname: string;
}

const Header: FC = () => {

    const location  =  useLocation<LocationState>();
    const {pathname} = location;

        if(pathname === "/"){
            return (
                <div className="relative bg-no-repeat bg-contain" style={bgImage}>
                    <div className="absolute flex justify-center bg-orange-200 bg-opacity-75 inset-0">
                        <p className="self-end text-center text-xl md:text-3xl font-lobster lg:text-5xl">Catering and Taco Shop located in Arizona</p>
                    </div>
                    
                </div>
            )
        } else 
        return (

            
            <div className="relative bg-no-repeat bg-contain" style={bgImage}>
             
                <div className="absolute flex bg-orange-200 bg-opacity-75 inset-0 flex-col justify-center items-center">
                
                <h2 className="sm:pb-12 font-lobster text-3xl text-center text-red-600 tracking-wider font-bold uppercase">{location.pathname.slice(1,location.pathname.length)}</h2>
                
                <p className="sm:pb-12 px-4 text-center text-lg font-bold">Call to get catering for your party or to find out where we will be set up next</p>
                
                <a className="text-3xl font-lobster text-red-600 hover:text-black" href="tel:4808229166">(480) 822 9166</a>
            </div>

                
            </div>

        )
}


export default Header