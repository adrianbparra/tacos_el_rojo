import React from "react";
import bgWood from "../assets/images/section_bg_wood.png";
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";

const bgWoodImage = {
    background: ` linear-gradient( rgba(254, 235, 200, .85),rgba(254, 235, 200, .85) ), url(${bgWood})`,
    width: "100%",
    height: "auto"
}

const BannerHeader = () =>{
    return(
        <svg style={{display:"inline-block" , position: "absolute",left:"50%", top: "0", transform:"translateX(-50%)"}} width="282" height="40" viewBox="0 0 282 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.0511 4.87758L49.1397 1.00003M38.0511 4.87758L49.1397 4.87758M38.0511 4.87758L38.0511 27.7551L38.0511 30.0816M49.1397 1.00003L21.7912 1.00001C16.9399 1.00002 10.0095 1.38777 6.54432 3.32654C3.07911 5.26531 1.46137 7.1887 1 9.91837L1 39C1.46137 36.2703 3.07911 34.347 6.54433 32.4082C10.0095 30.4694 16.9399 30.0816 21.7912 30.0816L38.0511 30.0816M49.1397 1.00003L49.1397 4.87758M38.0511 30.0816L38.0511 34.347L110.127 34.347L243.589 34.347L243.589 30.0816M49.1397 4.87758L110.127 4.87757L232.5 4.8776M243.589 4.8776L232.5 1.00005M243.589 4.8776L232.5 4.8776M243.589 4.8776L243.589 27.7551L243.589 30.0816M232.5 1.00005L259.848 1.00001C264.7 1.00001 271.63 1.38777 275.095 3.32654C278.561 5.26531 280.178 7.1887 280.64 9.91837L280.64 39C280.178 36.2703 278.561 34.3469 275.095 32.4081C271.63 30.4694 264.7 30.0816 259.848 30.0816L243.589 30.0816M232.5 1.00005L232.5 4.8776" stroke="black"/>
        <path d="M38.051 30.0819L59.5353 30.0819" stroke="black" stroke-width="0.5"/>
        <path d="M222 30.0819L243.484 30.0819" stroke="black" stroke-width="0.5"/>
        <path d="M38.051 25.041L59.5353 25.041" stroke="black" stroke-width="0.5"/>
        <path d="M222 25.041L243.484 25.041" stroke="black" stroke-width="0.5"/>
        <path d="M38.051 19.6124L59.5353 19.6124" stroke="black" stroke-width="0.5"/>
        <path d="M222 19.6124L243.484 19.6124" stroke="black" stroke-width="0.5"/>
        <path d="M38.051 14.1839L59.5353 14.1839" stroke="black" stroke-width="0.5"/>
        <path d="M222 14.1839L243.484 14.1839" stroke="black" stroke-width="0.5"/>
        <path d="M38.051 9.53082L59.5353 9.53082" stroke="black" stroke-width="0.5"/>
        <path d="M222 9.53082L243.484 9.53082" stroke="black" stroke-width="0.5"/>
        </svg>


    )
}


function Contact (){
    return(
        <div className="py-8 grid grid-cols-1 text-center my-12" style={bgWoodImage}>
            <div className="pb-4 relative">
                <h2 className="text-2xl pb-3">Tacos</h2>
                <BannerHeader/>

                <a href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-600">
                    <div className="inline-block text-4xl"><FaInstagramSquare /></div>
                    <p className="inline-block pl-4 align-top">tacos_el_rojo_</p>
                </a>
                    
            </div>
            <div className="pb-4 relative"> 
                <h2 className="text-2xl pb-3">Merchendise</h2>
                <BannerHeader/>

                <a href="https://www.instagram.com/shoptacoselrojo/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-600">
                    <div className="inline-block text-4xl"><FaInstagramSquare /></div>
                    <p className="inline-block pl-4 align-top">shoptacoselrojo</p>
                </a>
            </div>
            <div className="pb-4 relative">
                <h2 className="text-2xl pb-3">Our Feed</h2>
                <BannerHeader/>

                <a href="https://www.facebook.com/tacos.e.rojo" rel="noopener noreferrer" className="text-2xl hover:text-red-600">
                    <div className="inline-block text-4xl"><FaFacebookSquare/></div>
                    <p className="inline-block pl-4 align-top">tacos.e.rojo</p>
                </a>
            </div>

            <div className="pb-4 relative">
                <h2 className="text-2xl pb-3">About El Rojo</h2>
                <BannerHeader/>
                <p className="px-8 md:px-24 md:text-xl">
                    I am here to serve you some great tasting tacos. I created my taco stand on December 20 2019 to serve my fellow west side community. We offer catering and hold a stand to let anyone get a taste to the great food we make. We are in the process on getting a food truck to take my tacos to further destinations.
                </p>
            </div>
        </div>
    )
}


export default Contact