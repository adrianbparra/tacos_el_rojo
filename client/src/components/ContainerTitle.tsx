import React, {FC} from "react"

import HeaderBanner from "../assets/images/HeaderBanner.png";

interface ILinkProps{
    children: React.ReactNode;
}

const ContainerTitle:FC<ILinkProps> = (props) => {

    const {children} = props;

    return (
        <div className="relative">
            <img src={HeaderBanner} alt="Banner" className="mx-auto h-12 md:h-24 " />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-lobster text-2xl md:text-6xl">
                {children}
            </h2>
        </div>
            )
}

export default ContainerTitle