import React,{useEffect, useState} from "react"
import {Link} from "react-router-dom";




function NavBar() {

    const [topDistance, setTopDistance]= useState(0)

    useEffect(()=>{
        
        window.addEventListener("scroll", NavScroll)

        return function cleanup(){
            window.removeEventListener("scroll", NavScroll)
        }
    },[])

    function NavScroll (e){

        // console.log(window.scrollY)
        setTopDistance(window.scrollY)
    }
    
    
    return(
        
        <nav className={`${topDistance >= 100 && "bg-orange-100"} bg-opacity-75 w-full container pt-1 sm:pt-3 pb-3 fixed px-2 md:px-10 text-md md:text-2xl md:text-3xl z-50 text-red-700`}>
            <ul className="flex justify-between flex-wrap ">
                <li className=" w-full text-center md:flex-grow md:text-left md:w-auto">
                    <Link to="/">
                        <span>Tacos</span>
                        <span className="font-lobster">El Rojo</span>
                    </Link>
                </li>
                <li className="md:px-2">
                    <Link to="/menu" className="hover:text-black focus:text-black">MENU</Link>
                    
                </li>
                <li className="md:px-2">
                    <Link to="/contact" className="hover:text-black focus:text-black">CONTACT</Link>
                </li>
                <li className="md:px-2">
                    <Link to="/events" className="hover:text-black focus:text-black">EVENTS</Link>
                </li>
                <li className="md:px-2">
                    <Link to="/merch" className="hover:text-black focus:text-black">MERCH</Link>
                </li>
            </ul>
        </nav>
    )

}


export default NavBar;