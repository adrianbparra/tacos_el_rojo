import React, {FC} from 'react';
import { Link } from "react-router-dom";

interface ILinkProps{
    to: string;
    img: string;
    name:string;
}

const MenuItem = ( {to,img,name} : ILinkProps)  => {



    return (
        <Link to={to} className='mx-1 border-2 border-black relative text-center md:grow'>
            {/* <img src={require(`.assets/${img}`)}/> */}
            <div className='absolute top-1/2 left-1/2 transform translate-y-1/2 translate-x-1/2 text-xl'>
                {name}
            </div>

        </Link>
    );
}

export default MenuItem;