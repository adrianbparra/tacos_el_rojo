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
      className="mx-4 p-1 group border-2 border-black relative text-center flex-grow md:flex-none h-64 w-64"
    >
      <div className="filter blur-sm  group-hover:blur-none">
        <img className="object-cover h-60 w-full" src={require(`./../assets/images/${img}.jpg`).default} alt={img} />
      </div>
      <div className="absolute capitalize group-hover:opacity-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-3xl font-bold">
        {name}
      </div>
    </Link>
  );
};

export default MenuItem;
