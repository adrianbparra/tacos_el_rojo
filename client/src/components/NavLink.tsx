import React, {FC} from "react"
import {Link} from "react-router-dom";


const navBannerEdges : string = "content-hover-before content-hover-after hover:before:absolute hover:after:absolute hover:before:w-3.5 hover:after:w-3.5 hover:before:h-4 hover:after:h-4  hover:before:border-black hover:after:border-black ";
const navLeftBannerEdge : string = "hover:before:border-t-2 hover:before:border-l-2 hover:before:-top-2.5 hover:before:left-0 hover:before:transform hover:before:skew-x-36 hover:before:rotate-90"
const navRightBannerEdge : string = "hover:after:border-b-2 hover:after:border-l-2 hover:after:-top-2.5 hover:after:right-0 hover:after:transform hover:after:-skew-x-36 hover:after:rotate-90"

interface ILinkProps{
    to: string;
    children: React.ReactNode;
}

const NavLink:FC<ILinkProps> = (props) => {

    const {to, children} = props;

    return (
            <Link to={to} tw-content-hover-before="" tw-content-hover-after="" className={`${navBannerEdges} ${navLeftBannerEdge} ${navRightBannerEdge} hover:bg-primary box-border relative flex-1 border-solid mx-0.5 hover:mx-0 flex justify-center items-center transform hover:translate-y-3 border-black inline-block h-full hover:border-2 hover:text-base hover:h-full  md:hover:text-4xl focus:text-black`}>
                {children}
            </Link>
            )
}

export default NavLink