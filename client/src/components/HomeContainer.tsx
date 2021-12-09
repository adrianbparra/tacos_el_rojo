import React, {FC} from "react"


interface ILinkProps{
    children: React.ReactNode;
}

const HomeContainer:FC<ILinkProps> = (props) => {

    const {children} = props;

    return (
        
        <div className="container text-center p-8 pb-10 border-b-2 border-black">
                {children}
        </div>
       
            )
}

export default HomeContainer