import React from "react"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";

import TitleContainer from "./TitleContainer";
import HomeContainer from "./HomeContainer";

import shirt from "../assets/images/merch_shirt.jpg";
import MenuItem from "./MenuItem";


function Home (){
    return(
        <div className="py-12 px-6">
            
            <HomeContainer>
                
                <TitleContainer title="menu">
                    Menu
                </TitleContainer>
                
                <p className="lg:text-2xl">
                    I offer a selection of tacos, burritos and quesadillas. With a range of different meats to choose from to top the main dish. Includes savory condiments to make our food favlorful.
                </p>
                <div className="flex md:flex-row">
                    {
                        [{to:"menu",img:"tacos",name:"tacos"}].map( menuItem => {
                            return <MenuItem to={menuItem.to} img={menuItem.img} name={menuItem.name} />
                        })
                    }
                </div>

            </HomeContainer>

            <HomeContainer>
                <TitleContainer title="contact">
                    Contact
                </TitleContainer>

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
            </HomeContainer>

            <HomeContainer>
                <TitleContainer title="events">
                    Events
                </TitleContainer>
                

                <h3 className="text-left pl-1 lg:text-3xl">Date:</h3>
            
                <div className="flex pb-2 lg:text-2xl">
                    <p>TBA</p>
                    <p className="text-left pl-4 lg:pl-12">In our next event we will be having a give away of a pair of apple air pods everyone who buys tacos the day of.</p>
                </div>
                <div className="flex pb-2 lg:text-2xl">
                    <p>TBA</p>
                    <p className="text-left pl-4 lg:pl-12">New menu items including Rojos Burritos and Strawberry Horchata</p>
                </div>

            </HomeContainer>

            <HomeContainer>

                <TitleContainer title="merch">
                    Merch
                </TitleContainer>

                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl underline md:text-3xl">Shirts</h3>
                        <p className="font-lobster text-xl md:text-2xl">Coming Soon!</p>
                    </div>
                    
                    <div className=" flex-1 lg:p-8">
                        <img className="max-h-full" src={shirt} alt="shirt_merch"></img>
                    </div>
                
                </div>
            </HomeContainer>
        </div>
    )
}


export default Home