import React from "react"

const navBannerEdges = "content-hover-before content-hover-after hover:before:absolute hover:after:absolute hover:before:w-3.5 hover:after:w-3.5 hover:before:h-4 hover:after:h-4  hover:before:border-black hover:after:border-black ";

const navLeftBannerEdge = "hover:before:border-t-2 hover:before:border-l-2 hover:before:-top-2.5 hover:before:left-0 hover:before:transform hover:before:skew-x-36 hover:before:rotate-90"
const navRightBannerEdge = "hover:after:border-b-2 hover:after:border-l-2 hover:after:-top-2.5 hover:after:right-0 hover:after:transform hover:after:-skew-x-36 hover:after:rotate-90"

function NavButton(props) {
    return <li tw-content-hover-before="" tw-content-hover-after="" className={`${navBannerEdges}  ${navLeftBannerEdge} ${navRightBannerEdge} box-border relative flex-1 border-solid mx-0.5 hover:mx-0  flex justify-center items-center transform hover:translate-y-3 border-black inline-block h-full hover:border-2 hover:text-lg hover:h-full md:hover:text-4xl focus:text-black`} {...props}/>
}

export {
    NavButton
}