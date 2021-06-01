import React from "react"


function NavButton(props) {
    return <li className="box-border flex-1 border-solid mx-0.5 hover:mx-0  flex justify-center items-center transform hover:translate-y-4 border-black inline-block h-full hover:border-2 hover:text-lg hover:h-full md:hover:text-4xl focus:text-black" {...props}/>
}

export {
    NavButton
}