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
        <Link to={title}>
        <div className="relative">
            <img src={HeaderBanner} alt="Banner" className="mx-auto h-12 md:h-24"/>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-lobster text-2xl md:text-6xl text-red-700">
                {children}
            </h2>
        </div>
        </Link>
            )
}

export default TitleContainer