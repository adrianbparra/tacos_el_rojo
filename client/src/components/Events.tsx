import React from "react";
import BannerHeader from "../assets/BannerHeader.js";
import bgWoodImage from "../assets/images/bgWoodImage.js";


        // <svg style={{display:"inline-block" , position: "absolute",left:"50%", top: "0", transform:"translateX(-50%)"}} width="auto" height="auto" viewBox="-10 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <path d="M38.0511 4.87758L49.1397 1.00003M38.0511 4.87758L49.1397 4.87758M38.0511 4.87758L38.0511 27.7551L38.0511 30.0816M49.1397 1.00003L21.7912 1.00001C16.9399 1.00002 10.0095 1.38777 6.54432 3.32654C3.07911 5.26531 1.46137 7.1887 1 9.91837L1 39C1.46137 36.2703 3.07911 34.347 6.54433 32.4082C10.0095 30.4694 16.9399 30.0816 21.7912 30.0816L38.0511 30.0816M49.1397 1.00003L49.1397 4.87758M38.0511 30.0816L38.0511 34.347L110.127 34.347L243.589 34.347L243.589 30.0816M49.1397 4.87758L110.127 4.87757L232.5 4.8776M243.589 4.8776L232.5 1.00005M243.589 4.8776L232.5 4.8776M243.589 4.8776L243.589 27.7551L243.589 30.0816M232.5 1.00005L259.848 1.00001C264.7 1.00001 271.63 1.38777 275.095 3.32654C278.561 5.26531 280.178 7.1887 280.64 9.91837L280.64 39C280.178 36.2703 278.561 34.3469 275.095 32.4081C271.63 30.4694 264.7 30.0816 259.848 30.0816L243.589 30.0816M232.5 1.00005L232.5 4.8776" stroke="black"/>
        // <path d="M38.051 30.0819L59.5353 30.0819" stroke="black" stroke-width="0.5"/>
        // <path d="M222 30.0819L243.484 30.0819" stroke="black" stroke-width="0.5"/>
        // <path d="M38.051 25.041L59.5353 25.041" stroke="black" stroke-width="0.5"/>
        // <path d="M222 25.041L243.484 25.041" stroke="black" stroke-width="0.5"/>
        // <path d="M38.051 19.6124L59.5353 19.6124" stroke="black" stroke-width="0.5"/>
        // <path d="M222 19.6124L243.484 19.6124" stroke="black" stroke-width="0.5"/>
        // <path d="M38.051 14.1839L59.5353 14.1839" stroke="black" stroke-width="0.5"/>
        // <path d="M222 14.1839L243.484 14.1839" stroke="black" stroke-width="0.5"/>
        // <path d="M38.051 9.53082L59.5353 9.53082" stroke="black" stroke-width="0.5"/>
        // <path d="M222 9.53082L243.484 9.53082" stroke="black" stroke-width="0.5"/>
        // </svg>



function Events (){
    return(
        <div className="py-8 grid grid-cols-1 text-center my-12" style={bgWoodImage}>            
            <div className="relative">
            <h2 className="pb-4 pt-2 text-2xl">
                Coming Events
            </h2>
            <BannerHeader left="50%" top="0" width="auto" height="auto" viewBox="-10 0 300 40"/>
            </div>

            <div className="flex text-left items-center justify-between mx-4 lg:mx-24 py-4 border-b border-black ">
                <p className="pr-6">Our next event we will be having a give away for an apple air pod, stay tuned for a date</p>
                <span>TBA</span>
            </div>
            <div className="flex text-left items-center justify-between mx-4 lg:mx-24 py-4 border-b border-black">
                <p className="pr-6">New menu items including Rojos Burritos and Strawberry Horchata</p>
                <span>TBA</span>
            </div>

            <div>

            </div>
        </div>
    )
}


export default Events