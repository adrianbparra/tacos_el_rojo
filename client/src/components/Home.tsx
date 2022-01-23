import React from "react"
import moment from "moment";
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";
import { Link } from "react-router-dom";

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
                
                <div className="my-14 grid justify-items-center gap-y-16 md:gap-y-14 xl:gap-y-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        [{to:"menu",img:"tacos",name:"tacos"},{to:"menu",img:"quesadilla",name:"quesadilla"},{to:"menu",img:"tacos",name:"tacos"},{to:"menu",img:"quesadilla",name:"hotdogs"}].map( menuItem => {
                            return <MenuItem to={menuItem.to} img={menuItem.img} name={menuItem.name} />
                        })
                    }
                </div>

            </HomeContainer>

            <HomeContainer>
                <TitleContainer title="contact">
                    Contact
                </TitleContainer>
                
                <div className="text-2xl grid gap-y-8 my-2">
                    <address className="not-italic flex justify-center"> 
                        <a className="hover:text-red-600" href="https://goo.gl/maps/MbYSSaSbpZkYaHGo6" target="_blank" rel="noopener noreferrer">
                            <p>3000 W McDowell Rd</p>
                            <p>Phoenix, AZ 85009</p>
                        </a>
                    </address>

                    <div className="text-xl mx-6 xl:mx-48 xl:text-2xl">
                    {
                        [{id:1, "dayOfWeek":"Monday", "openTime": 0, "closeTime": 0 },
                        {id:2, "dayOfWeek":"Tuesday", "openTime": 0, "closeTime": 0 },
                        {id:2, "dayOfWeek":"Wednesday", "openTime": 0, "closeTime": 0 },
                        {id:2, "dayOfWeek":"Thursday", "openTime": 17, "closeTime": 22 },
                        {id:2, "dayOfWeek":"Friday", "openTime": 17, "closeTime": 22 },
                        {id:2, "dayOfWeek":"Saturday", "openTime": 17, "closeTime": 22 },
                        {id:2, "dayOfWeek":"Sunday", "openTime": 0, "closeTime": 0 },].map(day => 
                            {
                                const {dayOfWeek, openTime, closeTime} = day;
                                return  <div className="grid grid-cols-2 ">
                                            <p>{dayOfWeek}</p>
                                            
                                            <p>
                                            {
                                                openTime < closeTime ? moment(openTime,"HH").format("LT") + " - "+ moment(closeTime,"HH").format("LT") : "Closed"
                                            }
                                            </p>
                                        </div>

                            })
                        
                    }
                    </div>

                    <div>

                        <a className="hover:text-red-600" href="tel:4808229166">(480)822-9166</a>
                    </div>
        
                    <div className="flex justify-center">
                        <a className="px-1 hover:text-red-600 text-5xl" href="https://www.instagram.com/tacos_el_rojo_/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                        <a className="px-1 hover:text-red-600 text-5xl" href="https://www.facebook.com/tacos.e.rojo" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                    </div>

                </div>
                
                
            </HomeContainer>

            <HomeContainer>
                <TitleContainer title="events">
                    Events
                </TitleContainer>
                
                <div className="text-2xl my-10">
                    <p>Stay tuned for future events</p>
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