import React from "react";
import { Link } from "react-router-dom";

interface ILinkProps {
  to: string;
  img: string;
  name: string;
}

const MenuItem  = ({ to, img, name }: ILinkProps) => {
  return (
    <Link
      to={to}
      className="mx-4 group relative text-center row-span-12 md:row-span-6 lg:row-span-4 h-64 w-64"
    >
      <div className="filter blur-sm border-2 border-black group-hover:blur-none opacity-60 group-hover:opacity-100">
        <img className="object-cover h-64 w-full" src={require(`./../assets/images/${img}.jpg`).default} alt={img} />
      </div>
      <div className="absolute capitalize group-hover:opacity-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-4xl font-bold">
        {name}
      </div>
    </Link>
  );
};

export default MenuItem;
