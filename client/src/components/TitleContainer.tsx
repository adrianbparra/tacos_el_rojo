import React, {FC} from "react"
import {Link} from "react-router-dom";

import HeaderBanner from "../assets/images/HeaderBanner.png";

interface ILinkProps{
    title: string;
    children: React.ReactNode;
}

const TitleContainer:FC<ILinkProps> = (props) => {

    const {title, children} = props;

    return (
        <div className="relative inline-block text-red-700 hover:text-black">
            <Link to={title}>
                <img src={HeaderBanner} alt={title + " banner"} className="mx-auto h-12 md:h-24"/>
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-lobster text-2xl md:text-6xl">
                    {children}
                </h2>
            </Link>
        </div>
        )
}

export default TitleContainer