import React from "react"
import bgWood from "../assets/images/section_bg_wood.png";


const BannerHeader = () =>{
    return(
        <svg style={{display:"inline-block" , position: "absolute",left:"50%", top:"1rem", transform:"translateX(-50%)"}} width="255" height="124" viewBox="0 0 155 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5225 3.04312L26.3652 1.00001M20.5225 3.04312L26.3652 3.04312M20.5225 3.04312L20.5225 15.0974L20.5225 16.3233M26.3652 1.00001L11.9551 1C9.39887 1 5.74719 1.20431 3.92135 2.22586C2.0955 3.24742 1.2431 4.26087 1 5.69915L1 21.0225C1.2431 19.5842 2.0955 18.5708 3.92135 17.5492C5.74719 16.5276 9.39887 16.3233 11.9551 16.3233L20.5225 16.3233M26.3652 1.00001L26.3652 3.04312M20.5225 16.3233L20.5225 18.5708L58.5 18.5708L134.478 18.5708L134.478 16.3233M26.3652 3.04312L58.5 3.04311L128.635 3.04313M134.478 3.04313L128.635 1.00002M134.478 3.04313L128.635 3.04313M134.478 3.04313L134.478 15.0975L134.478 16.3233M128.635 1.00002L143.045 0.999998C145.601 0.999998 149.253 1.20431 151.079 2.22586C152.905 3.24741 153.757 4.26086 154 5.69915L154 21.0225C153.757 19.5842 152.905 18.5707 151.079 17.5492C149.253 16.5276 145.601 16.3233 143.045 16.3233L134.478 16.3233M128.635 1.00002L128.635 3.04313" stroke="black"/>
            <path d="M20.5225 16.3235L31.8427 16.3235" stroke="black" stroke-width="0.5"/>
            <path d="M123 16.3235L134.32 16.3235" stroke="black" stroke-width="0.5"/>
            <path d="M20.5225 13.6674L31.8427 13.6674" stroke="black" stroke-width="0.5"/>
            <path d="M123 13.6674L134.32 13.6674" stroke="black" stroke-width="0.5"/>
            <path d="M20.5225 10.807L31.8427 10.807" stroke="black" stroke-width="0.5"/>
            <path d="M123 10.807L134.32 10.807" stroke="black" stroke-width="0.5"/>
            <path d="M20.5225 7.94666L31.8427 7.94666" stroke="black" stroke-width="0.5"/>
            <path d="M123 7.94666L134.32 7.94666" stroke="black" stroke-width="0.5"/>
            <path d="M20.5225 5.49494L31.8427 5.49494" stroke="black" stroke-width="0.5"/>
            <path d="M123 5.49494L134.32 5.49494" stroke="black" stroke-width="0.5"/>
        </svg>

    )
}


const bgWoodImage = {
    background: ` linear-gradient( rgba(254, 235, 200, .85),rgba(254, 235, 200, .85) ), url(${bgWood})`,
    width: "100%",
    height: "auto"
}


function Menu (){
    return(
        <div className="py-8 grid grid-cols-1 text-center md:grid-cols-2 my-12" style={bgWoodImage}>
            

            <div className="p-4 relative">
                
               
                <h2 className="pb-2 font-bold text-2xl">Tacos</h2>
                
                <BannerHeader/>
                

                <ul>
                    <li className="pb-1">Carne Asada</li>
                    <li className="pb-1">Birria de Res</li>
                    <li className="pb-1">Pastor</li>
                </ul>
            </div>

            <div className="p-4 relative">
                <h2 className="pb-2 font-bold text-2xl">Burritos</h2>
                <BannerHeader/>

                <ul>
                    <li className="pb-1">Carne Asada</li>
                    <li className="pb-1">Birria</li>
                    <li className="pb-1">Pastor</li>

                </ul>

            </div>
            <div className="p-4 relative">
                <h2 className="pb-2 font-bold text-2xl">Quesadilla</h2>
                <BannerHeader/>

                <ul>
                    <li className="pb-1">Carne Asada</li>
                    <li className="pb-1">Pastor</li>

                </ul>
            </div>

            <div className="p-4 relative">
                <h2 className="pb-2 font-bold text-2xl">Drinks</h2>
                <BannerHeader/>
                <ul>
                    <li className="pb-1">Horchata</li>
                    <li className="pb-1">Strawberry Horchata</li>
                    <li className="pb-1">Pepilimon</li>
                    <li className="pb-1">Sprite</li>
                    <li className="pb-1">Coke</li>
                    <li className="pb-1">Water</li>
                    <li className="pb-1">Champurado</li>                    
                </ul>
            </div>

            <div className="md:col-start-1 md:col-end-3 pb-4 border-t border-black pt-3">
                
                <h1 className="text-xl">Our menu items are seasonal so some might not be available at all times.</h1>
            </div>
        </div>
    )
}


export default Menu